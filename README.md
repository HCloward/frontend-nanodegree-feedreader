#FeedReader Project
===============================

## Table of Contents

* [Instructions](#instructions)
* [Dependencies](#dependencies)
* [Contributing](#contributing)

## Instructions
This repo is a project for the Udacity Front-End Developer Nanodegree. The assignment was to write a series of tests using Jasmine.
The Jasmine spec file included in this project contains the tests I wrote for the project. These tests include:

1. A test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
2. A test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
3. A test that ensures the menu element is hidden by default.
4. A test that ensures the menu changes visibility when the menu icon is clicked. 
5. A test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. Since loadFeed() is asynchronous, this test required the use of Jasmine's beforeEach and asynchronous done() function.
6. A test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.

To view the passing tests in the project, download the files from GitHub and open the Index.html file in a browser. You will see the passing tests at the bottom of the page.

## Dependencies
Udacity supplied the html, CSS, and Javascript that is being tested. I only wrote the Jasmine tests.
I used the Jasmine testing framework to write my tests.
Furthermore, the site uses Jquery, the Handlebars templating library, and the Google FeedReader API. It also uses Roboto a Google font.

## Contributing
Since this is a project for a class. I will not accept contributions to the code.

