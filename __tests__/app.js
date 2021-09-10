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
      `${THEME_ID}.theme`
    ];

    files.forEach(filename => assert.file(filename));
  });

  it("creates README", () => {
    assert.file("README.txt");
    assert.fileContent("README.txt", THEME_NAME);
    assert.fileContent("README.txt", "A component-based");
  });
});
