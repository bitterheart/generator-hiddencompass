(function(){
    "use strict";
    exports.config = {
        seleniumAddress: "http://localhost:4444/wd/hub",
        suites: {
            local: 'spec/*.js',
            remote: 'spec/*.js',
            instant: 'spec/*.js'
        },
        capabilities: {
            browserName: 'chrome',
            baseUrl: 'http://localhost:9876'
        },
        allScriptsTimeout: 11000,
        getPageTimeout: 10000,
        onPrepare: function() {
            jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter(
                'outputdir/', true, true));
        },
        onComplete: function() {
            // At this point, tests will be done but global objects will still be
            // available.
        },
        onCleanUp: function(exitCode) {},
        afterLaunch: function() {},
        params: {
            login: {
                user: 'Jane',
                password: '1234'
            }
        },
        framework: 'jasmine',
        jasmineNodeOpts: {
            showColors: true,
            includeStackTrace: true,
            defaultTimeoutInterval: 30000
        }
    }
}());
