"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const snakeCase = require("lodash/snakeCase");
const startCase = require("lodash/startCase");
const extend = require("lodash/extend");

extend(Generator.prototype, require("yeoman-generator/lib/actions/install"));

module.exports = class extends Generator {
  initializing() {
    this.answers = {};
    this.composeWith(require.resolve("../build-tools"), {
      answers: this.answers,
      nested: true
    });

    this.on("npmInstall:end", () => {
      this.log(yosay(`Let's ${chalk.cyan("compile the theme assets")}!`));
      this.spawnCommand("npm", ["run", "build"]);
    });
  }

  async prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Let's ${chalk.cyan("generate a Prototype subtheme")}!`));

    this.answers = await this.prompt([
      {
        name: "themeName",
        message: "What is your theme's name?",
        default: startCase(this.appname)
      },
      {
        name: "themeId",
        message: "What is your theme's machine name?",
        default: snakeCase(this.appname),
        filter: snakeCase
      },
      {
        name: "themeDesc",
        message: "What is your theme's description?",
        default:
          "A custom theme implemtation for " +
          startCase(this.appname) +
          ". Based on the Prototype starter theme."
      }
    ]);
  }

  writing() {
    // Save a .yo-rc.json file for future generators.
    this.config.save();

    this.fs.copyTpl(
      this.templatePath("prototype.info.yml"),
      this.destinationPath(`${this.answers.themeId}.info.yml`),
      { ...this.answers }
    );

    this.fs.copyTpl(
      this.templatePath("prototype.libraries.yml"),
      this.destinationPath(`${this.answers.themeId}.libraries.yml`),
      { ...this.answers }
    );

    this.fs.copyTpl(
      this.templatePath("prototype.layouts.yml"),
      this.destinationPath(`${this.answers.themeId}.layouts.yml`),
      { ...this.answers }
    );

    this.fs.copyTpl(
      this.templatePath("prototype.theme"),
      this.destinationPath(`${this.answers.themeId}.theme`),
      { ...this.answers }
    );

    this.fs.copyTpl(
      this.templatePath("README.txt"),
      this.destinationPath("README.txt"),
      { ...this.answers }
    );
  }

  install() {
    this.installDependencies({
      bower: false,
      npm: true
    });
  }
};
