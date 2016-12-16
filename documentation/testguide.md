The Angular Team has a quick starter repo and the CLI, both of them have the scaffolding required to test right out of the box. If you're using the Angular Cli, then go ahead and run through their guide: https://angular.io/docs/ts/latest/guide/testing.html . It covers best practices and has the latest updates. Otherwise, if you're using webpack or think of migrating to it then you'll need to do some configuration.

You have two options in terms of getting everything set up, the end result is the same; you need to import all the shims, polyfills, and bootstrap Angular 2 in a test environment. 

You can either include it in a test configuration file or, alternatively, you can put everything in the in the testing framework's config file.

For the first option, look at the file `test.conf.js` for the second option go to https://github.com/angular/quickstart/blob/master/karma.conf.js and take a look at how they set up their karma config file.

So, to set up everything, take a look at the karma.conf.js and then the test.conf.js. Run the command 'npm run test' (and look at the package.json for the test command) to run any tests.

Here's a list of dependencies I had to install:
    jasmine-core
    karma
    karma-jasmine
    karma-webpack
    @types/jasmine

Some things to be cognizant of:
If Karma can't find a declaration such as 'describe' it's probably because it is missing an @types definition. 

If you get an error that says cannot call Promise.then in a sync test wrap the test in an async function.

Protractor is fairly straight forward, all you need do is have an installation of Protractor and its dependencies. Also, include a protractor.conf.js file or when you run protractor point it to some other configuration file.

Things I had to install for the configuration to work properly were:
  jasmine-spec-reporter
  ts-node

If you run into a Chromedriver issue, a possible solution is to run: webdriver-manager update

Otherwise, just make sure you have the repo running on one terminal and protractor running on the other.

For best practices regarding Protractor, it's necessary to use the page object pattern to keep code reusable and to make the actual tests far less verbose. 

If you're using the Angular Cli, it comes with an example of an e2e test using page objects (the one in this repo is similarly structured).





Useful resources:

http://docs.seleniumhq.org/docs/06_test_design_considerations.jsp#page-object-design-pattern

https://angular.io/docs/ts/latest/guide/testing.html