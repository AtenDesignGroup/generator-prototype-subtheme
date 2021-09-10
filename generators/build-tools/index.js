"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const snakeCase = require("lodash/snakeCase");
const startCase = require("lodash/startCase");

module.exports = class extends Generator {
  async prompting() {
    if (this.options.answers && this.options.nested) {
      // Inherit settings from the parent.
      this.answers = this.options.answers;
    } else {
      // Have Yeoman greet the user.
      this.log(yosay(`Let's ${chalk.cyan("setup build tools")}!`));
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
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("package.json"),
      this.destinationPath("package.json"),
      { ...this.answers }
    );

    const filesToCopy = [
      "gulpfile.js",
      ".babelrc",
      ".browserslistrc",
      ".env",
      ".env-example",
      ".eslintrc",
      ".gitignore",
      ".nvmrc",
      ".postcssrc.js",
      ".prettierrc.yml",
      ".stylelintrc.json",
      "config.js",
      "tailwind.config.js",
      "webpack.config.js"
    ];

    filesToCopy.forEach(filename => {
      this.fs.copy(this.templatePath(filename), this.destinationPath(filename));
    });

    // Append Readme documentation.
    this.fs.append(
      this.destinationPath("README.txt"),
      this.fs.read(this.templatePath("README.txt"), {
        seprator: "\n\n",
        create: true
      })
    );
  }

  install() {
    if (!this.options.nested) {
      this.installDependencies({
        bower: false,
        npm: true
      });
    }
  }
};
