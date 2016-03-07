## testing react

First off, the strategy I've used (npm scripts, env vars and tape) can be applied to any unit tests.
I hope to use this repo to document how to test various aspects of React components as well as
serving as a reference on how to get started with unit tests.

This doesn't cover functional / acceptance tests, its mainly focused on unit tests (for now).

### goals

- ability to debug tests
- ability to run tests in a browser
- ability to generate code coverage
- all of the above but against a single file or a subset of test files

### implementation details

Most of these should be easily replaced, if you prefer other libraries.

- [x] browserify: as the code bundler (webpack version welcome!)
  - [x] babelify: es2015 and react transforms
  - [x] watchify: auto rebuilding
- [x] tape: the test harness
- [x] tape-run: the browser runner
- [x] tape-spec: prettify tap output
- [x] babel-istanbul: for code coverage (coverify doesn't quite work atm)
- [x] eslint


### test strategy

- Clear actual vs expected assertion
- utilize shallow renderer

#### npm scrips

1. `npm start` view the demo app we're testing against
2. `npm run watch` rebuild on file changes
3. `npm test` run all the tests
4. `npm run test:debug` ....
5. `npm run test:browser` run the tests in a browser, output gets piped back to stdout
6. `npm run test:coverage` check the code coverage the tests have
7. `npm run test:everything` combines 3, 4, and 5 into one command.. why not.

#### environment variables

1. `TEST_FILES`: default is `test/index.js`

Change this to run a standalone test via `TEST_FILES=test/test.App.js npm test` or a subset of tests via
`TEST_FILES="test/test.App.js test/test.Component.js" npm test`.

This variable also applies to:
- `npm run test:debug`
- `npm run test:browser`
- `npm run test:coverage`

2. `TEST_NODE_ARGS`: default it nothing.

Pass node parameters / flags to the test command. For example `npm run test:debug` is the same as `npm test` with `TEST_NODE_ARGS=--debug-brk` set.

3. `TEST_BROWSER`: default is electron

Can be any of the following (if installed...)

- `chrome`
- `firefox`
- `ie`
- `phantom`
- `safari`

#### debugging

`npm run test:debug` doesn't dictate how to debug the tests, it simply adds the `--debug-brk` flag.

##### node-inspector

1. `npm i node-inspector -g`
2. spawn it in another terminal `node-inspector`
3. `npm run test:debug`
4. open `http://127.0.0.1:8080/?port=5858`

#### iron node

1. `npm install iron-node -g`
2. `npm run build:test`
3. `iron-node test/bundle.js`

### todo

- Add lots more tests and in-depth examples
