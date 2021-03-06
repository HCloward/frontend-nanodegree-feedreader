/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('has a URL defined and the URL is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        /* This is a test that uses the forEach method to loop through each feed
         * in the allFeeds object and ensure it has a name defined
         * and that the name is not empty.
         */
       
        it('has a name defined and the name is not empty', function() {
            allFeeds.forEach(function(name) {
                expect(name.url).toBeDefined();
                expect(name.url.length).not.toBe(0);
            });
        });
    });


    /* This is a new test suite named "The menu" */
    /* This is a test that uses the hasClass method that ensures the menu element is
         * hidden by default. It also ensures that if in the future a class is added to <body> this test will still work.
         */
    describe('The menu', function(){
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    /* This is a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('is visible when menu icon is clicked and hidden when clicked again', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });
    
    /* This is a new test suite named "Initial Entries" */
    /* This is a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * loadFeed() is asynchronous so this testrequires
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        it('loadFeed function is called and there is at least 1 .entry element within the .feed container', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0); 
            
        });
    });

    /* This is a new test suite named "New Feed Selection" */
    /* This is a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    describe('New Feed Selection', function() {
        var preContent,
            postContent;

        beforeEach(function(done) {
            loadFeed(1, function() {
                preContent = $('.feed').html();
                done();
            });
        });
    
        it('loadFeed function loads new content', function() {
            loadFeed(2, function() {
            postContent = $('.feed').html();
            expect(preContent === postContent).toBe(false);
            
            });
        });
    }); 
}());
