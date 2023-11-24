sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.fe.demo.manageinquiries',
            componentId: 'InquiriesObjectPage',
            contextPath: '/Inquiries'
        },
        CustomPageDefinitions
    );
});