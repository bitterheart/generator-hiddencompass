(function(){
    'use strict';
    var yeoman = require('yeoman-generator');
    var chalk = require('chalk');
    var yosay = require('yosay');

    module.exports = yeoman.generators.Base.extend({
        initializing: function () {
            this.pkg = require('../package.json');
        },
        prompting: function () {
            var done = this.async();
            // Have Yeoman greet the user.
            this.log(yosay(
                'Welcome to the top-notch' + chalk.red('Hiddencompass') + ' generator!'
            ));
            var prompts = [{
                type: 'confirm',
                name: 'someOption',
                message: 'Would you like to enable this option?',
            default: true
            },{
                type: 'confirm',
                name: 'sampleProject',
                message: 'Would you like to set up a sample project?',
                default: false
            }];
            this.prompt(prompts, function (props) {
                this.someOption = props.someOption;
                done();
            }.bind(this));
        },
        writing: {
            grunt: function (){
//                this.gruntfile.insertConfig("pkg","grunt.file.readJSON(\"package.json\")");
//                ["grunt-eslint","grunt-karma","grunt-bower-install","grunt-express","grunt-protractor-webdriver","grunt-protractor-coverage"].
                this.gruntfile.loadNpmTasks("grunt-bower-install");
                this.gruntfile.loadNpmTasks("grunt-karma");
                this.gruntfile.loadNpmTasks("grunt-eslint");
                this.gruntfile.loadNpmTasks("grunt-express");
                this.gruntfile.loadNpmTasks("grunt-protractor-webdriver");
                this.gruntfile.loadNpmTasks("grunt-protractor-coverage");
                this.gruntfile.insertConfig("eslint", "{target: [\"Gruntfile.js\", \"karma.conf.js\", \"protractor.conf.js\"]}");
                this.gruntfile.insertConfig("karma", "{unit: {configFile: \"karma.conf.js\"}}");
                this.gruntfile.insertConfig("bowerInstall", "{target: \"index.html\", dependencies: true}");
                this.gruntfile.insertConfig("express", "{local: {options: {port: 26978, bases: \".\", server: \"server.js\"}}}");
                this.gruntfile.insertConfig("protractor_webdriver", "{local:{}}");
                this.gruntfile.insertConfig("protractor_coverage", "{local:{ options: { configFile: \"protractor.conf.js\", suite: \"local\"}}, remote:{ options: { configFile: \"protractor.conf.js\", suite: \"remote\"}}, instant:{ options: { configFile: \"protractor.conf.js\", suite: \"instant\"}}}");
                this.gruntfile.registerTask("e2e:local",["express:local","protractor_webdriver:local","protractor_coverage:local"]);
                this.gruntfile.registerTask("e2e:remote",["express:remote","protractor_webdriver:remote","protractor_coverage:remote"]);
                this.gruntfile.registerTask("e2e:instant",["express:instant","protractor_webdriver:instant","protractor_coverage:instant"]);
            },
            app: function () {
                this.template('_package.json','package.json');
                this.fs.copy(
                    this.templatePath('_bower.json'),
                    this.destinationPath('bower.json')
                );
            },
            client: function(){
                this.fs.copy(
                    this.templatePath("index.html"),
                    this.destinationPath("index.html")
                );
                this.fs.copy(
                    this.templatePath("angular-1.js"),
                    this.destinationPath("scripts/application.js")
                );
                this.fs.copy(
                    this.templatePath("angular-2.js"),
                    this.destinationPath("scripts/constants.js")
                );
                this.fs.copy(
                    this.templatePath("angular-2.js"),
                    this.destinationPath("scripts/constants.js")
                );
                this.fs.copy(
                    this.templatePath("angular-2.js"),
                    this.destinationPath("scripts/directives.js")
                );
                this.fs.copy(
                    this.templatePath("angular-2.js"),
                    this.destinationPath("scripts/factories.js")
                );
                this.fs.copy(
                    this.templatePath("angular-2.js"),
                    this.destinationPath("scripts/providers.js")
                );
                this.fs.copy(
                    this.templatePath("angular-2.js"),
                    this.destinationPath("scripts/runs.js")
                );
                this.fs.copy(
                    this.templatePath("angular-2.js"),
                    this.destinationPath("scripts/services.js")
                );
            },
            karma: function(){
                this.fs.copy(
                    this.templatePath("karma.conf.js"),
                    this.destinationPath("karma.conf.js")
                );
            },
            protractor: function() {
                this.fs.copy(
                    this.templatePath("server.js"),
                    this.destinationPath("server.js")
                );
                this.fs.copy(
                    this.templatePath("protractor.conf.js"),
                    this.destinationPath("protractor.conf.js")
                );
            },
            simple: function(){
                this.fs.copy(
                    this.templatePath("simple-e2e.js"),
                    this.destinationPath("spec/simple-e2e.js")
                );
            },
            projectfiles: function () {
                this.fs.copy(
                    this.templatePath('editorconfig'),
                    this.destinationPath('.editorconfig')
                );
                this.fs.copy(
                    this.templatePath('jshintrc'),
                    this.destinationPath('.jshintrc')
                );
            }
        },
        install: function () {
            this.npmInstall(["bower", "grunt-cli","grunt-eslint", "grunt-bower-install", "grunt-karma", "karma-html-reporter", "grunt-istanbul-coverage", "express", "grunt-express", "grunt-protractor-webdriver", "grunt-protractor-coverage", "protractor-html-screenshot-reporter"], {"saveDev": true});
            this.npmInstall();
            this.runInstall("node_modules/bower/bin/bower");
            this.bowerInstall(["angular"], {"save": true});
            this.bowerInstall();
            this.installDependencies({});
        }
    });
}());
