'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var PypackageGenerator = module.exports = function PypackageGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);
};

util.inherits(PypackageGenerator, yeoman.generators.Base);

PypackageGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'pkg',
    message: "What's your package name?",
    default: path.basename(process.cwd()),
    filter: function(input) {
      return input.toLowerCase();
    }
  }];

  this.prompt(prompts, function (props) {
    this.pkg = props.pkg;

    cb();
  }.bind(this));
};

PypackageGenerator.prototype.askForDetail = function askFor() {
  var cb = this.async();
  var prompts = [{
    name: 'desc',
    message: 'Describe your package'
  }, {
    name: 'url',
    message: "What's the URL for your project?"
  }, {
    type: 'list',
    name: 'license',
    message: 'Choose your license',
    choices: [
      'MIT License',
      'Apache License 2.0',
      'GNU GPL v2.0',
      'WTFPL',
      'None'
    ]
  }];
  this.prompt(prompts, function (props) {
    this.desc = props.desc;
    this.url = props.url;
    this.license = props.license;
    cb();
  }.bind(this));
};

PypackageGenerator.prototype.askForBuildout = function askFor() {
  var cb = this.async();
  var prompts = [{
    type: 'confirm',
    name: 'buildout',
    message: 'Use Buildout?',
    default: false
  }, {
    name: 'packageIndex',
    message: 'Specify your own Python Package Index URL if you have',
    when: function (props) {
      return props.buildout;
    }
  }];
  this.prompt(prompts, function (props) {
    this.buildout = props.buildout;
    this.packageIndex = props.packageIndex;
    cb();
  }.bind(this));
};

PypackageGenerator.prototype.app = function app() {
  this.mkdir(this.pkg);
  this.copy('_/__init__.py', this.pkg + '/__init__.py');

  this.mkdir('tests');
  this.copy('tests/__init__.py', 'tests/__init__.py');
  this.template('tests/_test_.py', 'tests/test_' + this.pkg + '.py');

  this.copy('gitignore', '.gitignore');
  this.copy('CHANGES', 'CHANGES');
  this.copy('MANIFEST.in', 'MANIFEST.in');
  this.copy('runtests.sh', 'runtests.sh');
  this.template('_README.md', 'README.md');
  this.template('_setup.py', 'setup.py');

  if (this.buildout) {
    this._.templateSettings.interpolate = /<%=([\s\S]+?)%>/g;
    this.copy('bootstrap.py', 'bootstrap.py');
    this.template('_buildout.cfg', 'buildout.cfg');
  }
};
