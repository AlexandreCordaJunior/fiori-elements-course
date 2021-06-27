sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sap/fe/travel/travellist/test/integration/pages/MainListReport' ,
        'sap/fe/travel/travellist/test/integration/pages/MainObjectPage',
        'sap/fe/travel/travellist/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sap/fe/travel/travellist') + '/index.html'
        });

        
        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
        
    }
);