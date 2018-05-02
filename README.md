# Feed Reader Testing Project 

## Table of Contents
* [Project Overview](#project-overview)
* [Getting Started](#getting-started)
* [Steps Taken](#steps-taken)
* [Requirements](#requirements)


## Project Overview
This Feed Reader Testing Project was created as part of my Udacity Front-End Nanodegree, which was awarded through a Google Developer Scholarship. It was developed to meet the requirements of the [rubric](https://review.udacity.com/#!/rubrics/18/view).

As Udacity states, testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development" – when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

I used Jasmine to write a number of tests against a pre-existing application, which test the underlying business logic of the application as well as the event handling and DOM manipulation. 

## Getting started
Download the repository and load the index.html in your browser. 

## Steps Taken 
* Explored the Jasmine spec file in **./jasmine/spec/feedreader.js** and reviewed the [Jasmine documentation](http://jasmine.github.io).

* Edited the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
* Returned the `allFeeds` variable to a passing state.

Wrote tests that:
* Looped through each feed in the `allFeeds` object and ensured it has a URL defined and that the URL is not empty.
* Looped through each feed in the `allFeeds` object and ensured it has a name defined and that the name is not empty.

* Created a new test suite named `"The menu"`.
Wrote tests that:
* Ensured the menu element is hidden by default. Analyzed the HTML and the CSS to determine how the hiding/showing of the menu element was being performed.
* Ensured the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.

* Created a test suite named `"Initial Entries"`.
Wrote a test that:
* Ensured when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.

* Created a test suite named `"New Feed Selection"`.
Wrote a test that:
* ensured when a new feed is loaded by the `loadFeed` function that the content actually changes.

## Requirements
* No test should be dependent on the results of another.
* Callbacks should be used to ensure that feeds are loaded before they are tested.
* Implement error handling for undefined variables and out-of-bound array access.
* When complete - all of your tests should pass. 

