sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.fe.demo.manageinquiries',
            componentId: 'InquiriesList',
            contextPath: '/Inquiries'
        },
        CustomPageDefinitions
    );
});