"use strict";

var grunt = require("grunt");
var file = require("../file");

describe("file", function() {

  describe("find_closest_match", function() {

    var find_closest_match = file.find_closest_match;

    it("returns an accurate filepath given a filename and folder to look in", function() {
      var filepath = find_closest_match("spec/includes", "example.html");
      expect(grunt.file.exists(filepath)).toBeTruthy();
    });

    it("returns an accurate filepath given a filename and an empty string folder", function() {
      var filepath = find_closest_match("", "spec/includes/example.html");
      expect(grunt.file.exists(filepath)).toBeTruthy();
    });

    it("returns an accurate filepath given a filename with no extension", function() {
      var filepath = find_closest_match("spec/includes", "example");
      expect(grunt.file.exists(filepath)).toBeTruthy();
    });

  });

  describe("has_extension", function() {

    it("returns true when the given filename has an extension", function() {
      expect(file.has_extension("file.html")).toBeTruthy();
      expect(file.has_extension("file.md.html")).toBeTruthy();
    });

    it("returns false when the given filename has no extension", function() {
      expect(file.has_extension("file")).toBeFalsy();
    });

  });

});
