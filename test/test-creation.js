/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('pypackage generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('pypackage:app', [
                '../../app'
            ]);
            done();
        }.bind(this));
    });

    it('creates expected files', function (done) {
        var expected = [
            // add files you expect to exist here.
            '.gitignore',
            'CHANGES.rst',
            'MANIFEST.in',
            'README.rst',
            'bootstrap.py',
            'buildout.cfg',
            'runtests.sh',
            'setup.py',
            'somepkg',
            'somepkg/__init__.py',
            'tests',
            'tests/__init__.py',
            'tests/test_somepkg.py',
        ];

        helpers.mockPrompt(this.app, {
            'pkg': 'somepkg',
            'buildout': true
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });
});
