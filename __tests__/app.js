"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-prototype-subtheme:app", () => {
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
      `${THEME_ID}.info.yml`,
      `${THEME_ID}.libraries.yml`,
      `${THEME_ID}.theme`,
      "components",
      "libraries",
      "partials",
      "logo.svg",
      "logo.png",
      "screenshot.png"
    ];

    files.forEach(filename => assert.file(filename));
  });

  it("creates empty template directories", () => {
    const files = ["node", "field", "paragraphs"];

    files.forEach(dir => assert.file(`templates/${dir}`));
  });

  it("creates README", () => {
    assert.file("README.txt");
    assert.fileContent("README.txt", THEME_NAME);
    assert.fileContent("README.txt", "A component-based");
  });

  it("creates components", () => {
    const component = ["site-header", "site-footer"];

    component.forEach(filename => {
      assert.file(`components/${filename}/${filename}.component.css`);
      assert.fileContent(
        `components/${filename}/${filename}.component.css`,
        filename
      );
    });
  });
});
