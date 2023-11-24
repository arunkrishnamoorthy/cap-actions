using {cap.actions.demo as my} from '../db/schema';

service CallCenterService {
    entity Inquiries as projection on my.Inquiries actions {
        @sap.applicable.path: 'startEnabled'
        action start();
        @sap.applicable.path: 'closeEnabled'
        action close(satisfaction : Integer);
    };
}

extend projection CallCenterService.Inquiries with {
    virtual null as startEnabled: Boolean @UI.Hidden,
    virtual null as closeEnabled: Boolean @UI.Hidden
}

annotate CallCenterService.Inquiries with @odata.draft.enabled;

annotate CallCenterService.Inquiries with @(UI: {
    SelectionFields    : [
        category_code,
        status_code,
        satisfaction
    ],
    LineItem           : [
        {
            $Type : 'UI.DataFieldForAction',
            Action: 'CallCenterService.start',
            Label : 'Start'
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action: 'CallCenterService.close',
            Label : 'End'
        },
        {Value: category_code},
        {Value: inquiry},
        {Value: status_code},
        {Value: startedAt},
        {Value: satisfaction},
        {Value: createdAt},
        {Value: modifiedAt}
    ],
    Facets             : [{
        $Type : 'UI.ReferenceFacet',
        Target: '@UI.FieldGroup#inquiry',
    }, ],
    FieldGroup #inquiry: {
        $Type: 'UI.FieldGroupType',
        Label: 'Inquiry Type',
        Data : [
            {Value: category_code},
            {Value: inquiry},
            {Value: answer}
        ]
    },
});
