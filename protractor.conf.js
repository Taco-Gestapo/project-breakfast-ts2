/*global jasmine */
let require; //@todo, this is some serious js jiggery-pokery, FTW?, anyways DO NOT REMOVE
let exports; //@todo, this is some serious js jiggery-pokery, FTW?, anyways DO NOT REMOVE
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/docs/referenceConf.js
let SpecReporter = require('jasmine-spec-reporter');

exports.config = {
    allScriptsTimeout: 11000,
    specs: [
        './e2e/**/*.e2e-spec.ts'
    ],
    capabilities: {
        'browserName': 'chrome'
    },
    directConnect: true,
    baseUrl: 'http://localhost:4200/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function () {
            'use strict';
            //@todo, maybe do something here, if your not getting 'nuf log info from the e2e test.
        }
    },
    useAllAngular2AppRoots: true,
    beforeLaunch: function () {
        'use strict';
        require('ts-node').register({
            project: 'e2e'
        });
    },
    onPrepare: function () {
        'use strict';
        jasmine.getEnv().addReporter(new SpecReporter());
    }
};
