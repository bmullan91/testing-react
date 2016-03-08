# Testing React

## Overview

- Focused on unit tests, not functional / acceptance tests
- Document how to test various aspects of React components
- Framework agnostic strategy, utilizing npm scrips and environment variables

## Goals

- No config .dotfiles
- No DOM dependency, utilize shallow renderer
- Clear actual vs expected assertion
- Ability to debug tests
- Ability to run tests in a browser
- Ability to generate code coverage
- Run a single test or a subset of tests

## NPM Scrips

1. `npm start` view the demo app we're testing against
2. `npm run watch` rebuild on file changes
3. `npm test` run all the tests
4. `npm run test:browser` run the tests in a browser, output gets piped back to stdout
5. `npm run test:coverage` check the code coverage the tests have
6. `npm run test:everything` combines 3, 4, and 5 into one command.. why not.
7. `npm run test:debug` see debugging section below

## Environment Variables

### `TEST_FILES`

Defaults to: `test/index.js`.

This can be used to change which test to include in the bundle. This can be useful when you only one to run a certain subset of tests. This variable also applies to:

- `npm run test:debug`
- `npm run test:browser`
- `npm run test:coverage`

#### Usage

- Single test `TEST_FILES=test/test.App.js npm test`
- Subset of tests `TEST_FILES="test/test.App.js test/test.Component.js" npm test`

### `TEST_NODE_ARGS`

Defaults to: nothing.

Pass node parameters / flags to the test command. For example `npm run test:debug` is the same as `npm test` with `TEST_NODE_ARGS=--debug-brk` set.

### `TEST_BROWSER`

Defaults to: `electron`.

This only applies to `npm run test:browser`. Can be any of the following (if installed):

- `chrome`
- `firefox`
- `ie`
- `phantom`
- `safari`

## Debugging

`npm run test:debug` doesn't dictate how to debug the tests, it simply adds `TEST_NODE_ARGS--debug-brk` to `npm test`.

### node-inspector

1. `npm i node-inspector -g`
2. Spawn it in another terminal `node-inspector`
3. `npm run test:debug`
4. `open http://127.0.0.1:8080/?port=5858`

### iron-node

1. `npm install iron-node -g`
2. `npm run build:test`
3. `iron-node test/bundle.js`

## Implementation Details

Most of these libraries should be easily replaced if you prefer others. I've listed the current versions because a lot have been updated recently to support babel 6.

- [x] [browserify@^13.0.0](https://www.npmjs.com/package/browserify): code bundler (webpack version welcome!)
  - [x] [babelify@^7.2.0](https://www.npmjs.com/package/babelify): es2015 and react transforms
  - [x] [watchify@^3.7.0](https://www.npmjs.com/package/watchify): auto rebuild
- [x] [tape@^4.4.0](https://www.npmjs.com/package/tape): test harness
- [x] [tape-run@^2.1.3](https://www.npmjs.com/package/tape-run): browser runner
- [x] [tap-spec@^4.1.1](https://www.npmjs.com/package/tap-spec): prettify tap output
- [x] [babel-istanbul@^0.6.1](https://www.npmjs.com/package/babel-istanbul): code coverage (coverify doesn't work atm)
- [x] [eslint@^2.3.0](https://www.npmjs.com/package/eslint): es2015 and react, extends [airbnb's](https://www.npmjs.com/package/eslint-config-airbnb)

## TODO

- Add lots more tests and in-depth examples
- Update to React@15.0.0-rc.x
- Greenkeeper
- Document compatible node versions.
- Get coverage to work using only instanbul (sourcemaps stuff see https://github.com/gotwarlost/istanbul/compare/master...ambitioninc:master)
