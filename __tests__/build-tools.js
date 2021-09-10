"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-prototype-subtheme:build-tools", () => {
  const THEME_ID = "test_theme";
  const THEME_NAME = "Test Theme";
  const THEME_DESCRIPTION = "Test Theme description text";

  beforeAll(() => {
    return helpers.run(path.join(__dirname, "../generators/app")).withPrompts({
      themeId: THEME_ID,
      themeName: THEME_NAME,
      themeDesc: THEME_DESCRIPTION
    });
  });

  it("creates files", () => {
    const files = [
      "gulpfile.js/index.js",
      "gulpfile.js/js.js",
      "gulpfile.js/css.js",
      "gulpfile.js/browser-sync.js",
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

    files.forEach(filename => assert.file(filename));
  });

  it("creates README", () => {
    assert.file("README.txt");
    assert.fileContent("README.txt", "# Tooling");
  });
});
