
# Description
Various jQuery projects and  unit testing with Jasmine and Tape

## Cat Carousel
lesson-1/drill-1

## FizzBuzz
lesson-1/drill-2

## Lightbulb
lesson-1/drill-3

## Unit Testing with Jasmine
Notice spec/support/jasmine.json.

```
{
  "spec_dir": "spec",
  "spec_files": [
    "**/*[sS]pec.js"
  ],
  "helpers": [
    "helpers/**/*.js"
  ],
  "stopSpecOnExpectationFailure": false,
  "random": false
}
```

Jasmine will to this file for configuration information.
Notice the wildcarding of spec_files.

### Unit Testing with Jasmine HTML
lesson-1/jasmine-html.

Execute SpecRunner.html to run the tests.
Will re-run tests if there is a change.

### Unit Testing with Jasmine Node
cd lesson-1/jasmine-node

jasmine

## Unit Testing with Tape and Nodemon
```
cd lesson-1/tape/1
npm init
npm install tape --save-dev
npm i tap-spec tap-simple -D

A helpful symbolic link:
ln -s node_modules/.bin ./bin
node main.js | bin/tap-spec
```
```
node main.js | bin/tap-simple
fails
tap-simple may be old.
```
Continuously run unit tests:

```
npm i nodemon -g
nodemon main.js | bin/tap-spec
```
To run Tape unit tests:

```
./bin/tape test/**/*.test.js
nodemon -x "./bin/tape test/**/*.test.js"
nodemon -x "./bin/tape test/**/*.test.js | bin/tap-spec"
```

To formalize the tests, edit package.json:

```
  "scripts": {
    "test": "./bin/tape test/**/*.test.js | bin/tap-spec",
    "tdd": "nodemon -x \"./bin/tape test/**/*.test.js | bin/tap-spec\""
  },
```

Now, to run the tests:

```
npm test
npm run tdd
```

Re-create node modules:

```
rm -rf node_modules
npm install
```


## Unit Testing with Tape and Zuul

ref:
[Testing Client/Server JavaScript]([https://www.youtube.com/watch?v=lLqCXLYCqTI&list=PLQjslqDfe8Vn4ttT-bei7mXS8vZQ_xKgj)

```
cd lesson-1/tape/2
npm init
npm i tape --save-dev
npm i zuul --save-dev
node test
which runs the unit tests and provides a browser url, for example:
http://localhost:9966/__zuul
which runs the tests form a browser.
```


## Text Analyzer
lesson-1/text-analyzer

This is the real version.

###Run the App
index.html



## Text Analyzer with Unit Tests
lesson-1/text-analyzer-unit-tests

###Run the App
index.html

###Node Unit Tests
The unit tests are running exactly the same code as app is running from the browser. It works great but is very chunky.

```
cd node
node data
node cleaner
node app
```

# Shopping List App
cd lesson-2/shopping-list

Run the app:

index.html



