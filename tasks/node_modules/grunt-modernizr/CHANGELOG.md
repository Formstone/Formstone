# Changelog

### 1.0.2

- Add support to the standard Grunt `options` section, for shared config settings

### 1.0.1

- Update postinstall script from bash to node, for better cross platform support

### 1.0.0

- Warning: Configuration not compatible with [grunt-modernizr 0.6.0]
- Changed configuration to match customizr customizr repository
- Updated dependencies

## 0.6.0

### Deprecated features
- Removed support for Node 0.9

### Pull Requests
- [PR #68](https://github.com/Modernizr/grunt-modernizr/pull/68): Adds support for *.sass files
- [PR #69](https://github.com/Modernizr/grunt-modernizr/pull/69): Adds support for cssclassprefix extensibility option
- [PR #73](https://github.com/Modernizr/grunt-modernizr/pull/73): Retain License when compressing output
- [PR #81](https://github.com/Modernizr/grunt-modernizr/pull/81): Adds an optional callback handler
- [PR #88](https://github.com/Modernizr/grunt-modernizr/pull/88): Adjusts expression to not ignore matchCommunityTests option
- [PR #89](https://github.com/Modernizr/grunt-modernizr/pull/89): Fix issue with documentation on cache busting.
- [PR #90](https://github.com/Modernizr/grunt-modernizr/pull/90): outputFile option is not required
- [PR #94](https://github.com/Modernizr/grunt-modernizr/pull/94): fix(communityTests): find the correct module by test name
- [PR #97](https://github.com/Modernizr/grunt-modernizr/pull/97): Fix 404 when downloading csspositionsticky

### Bug Fixes
- [Issue #96](https://github.com/Modernizr/grunt-modernizr/issues/96): npm test fails
- [Issue #93](https://github.com/Modernizr/grunt-modernizr/issues/93): Attempts to download `filereader.js` instead of `file-api.js`
- [Issue #86](https://github.com/Modernizr/grunt-modernizr/issues/86): matchCommunityTests: false not working
- [Issue #85](https://github.com/Modernizr/grunt-modernizr/issues/85): Fetching community test
- [Issue #83](https://github.com/Modernizr/grunt-modernizr/issues/83): Grunt modernizr pollutes the grunt options array
- [Issue #78](https://github.com/Modernizr/grunt-modernizr/issues/78): Request for a file points to wrong place?
- [Issue #67](https://github.com/Modernizr/grunt-modernizr/issues/67): Buggy behaviour of matchCommunityTests and hyphens
