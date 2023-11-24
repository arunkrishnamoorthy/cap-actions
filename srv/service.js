const cds = require('@sap/cds');

module.exports = (srv) => {

    const { Inquiries } = cds.entities;

    srv.after('READ', 'Inquiries', (each) => {
        if(each.status_code === '1') {
            each.startEnabled = true;
        }
        if(each.status_code !== '3') {
            each.closeEnabled = true;
        }
    });

    srv.on("start", async (req) => {
        const id = req.params[0];
        const n = await UPDATE(Inquiries).set({
            status_code: '2',
            startedAt: Date.now()
        }).where({ ID: id}).and({ status_code: '1'});
        n > 0 || req.error(404);
    });

    srv.on("close",  async (req) => {
        const id = req.params[0];
        const { satisfaction } = req.data;
        const n = await UPDATE(Inquiries).set({
            satisfaction: satisfaction,
            status_code: '3'
        }).where({ ID: id}).and({status_code: { '<>' : '3' }});
        n > 0 || req.error(404);
    });

    srv.before('CREATE', Inquiries, (req) => {
        req.status_code = '1';
    });

}