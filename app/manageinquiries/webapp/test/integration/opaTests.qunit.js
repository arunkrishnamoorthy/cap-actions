sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/fe/demo/manageinquiries/test/integration/FirstJourney',
		'com/fe/demo/manageinquiries/test/integration/pages/InquiriesList',
		'com/fe/demo/manageinquiries/test/integration/pages/InquiriesObjectPage'
    ],
    function(JourneyRunner, opaJourney, InquiriesList, InquiriesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/fe/demo/manageinquiries') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheInquiriesList: InquiriesList,
					onTheInquiriesObjectPage: InquiriesObjectPage
                }
            },
            opaJourney.run
        );
    }
);