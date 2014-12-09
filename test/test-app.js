(function(){
    'use strict';
    var path = require('path');
    var assert = require('yeoman-generator').assert;
    var helpers = require('yeoman-generator').test;
    var os = require('os');
    describe("hiddencompass",function(){
        describe("without sample project",function(){
            before(function (done) {
                helpers.run(path.join(__dirname, '../app'))
                    .inDir(path.join(os.tmpdir(), './temp-test'))
                    .withPrompt({
                        sampleProject: false
                    })
                    .on('end', done);
            });
            it('creates files', function () {
                assert.file([
                    'bower.json',
                    'package.json'
                ]);
            });
        });
    });
}());
