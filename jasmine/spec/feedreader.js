/* feedreader.js
    For reference: https://jasmine.github.io/2.1/introduction
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* All of our tests have been placed within the $() function,
 * since some of these tests may require DOM elements. This
 * ensures they don't run until the DOM is ready.
 */
$(function() {
    /* This is the first test suite - a test suite contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in the application.
    */
    describe('RSS Feeds', function() {
        /* This is the first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Tests loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty. 
         */
        it('URL is defined and is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe(null);
            });
        });

        /* Test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name is defined and is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe(null);
            });
        });
    });
//     /* Created a new test suite named "The menu" */
    describe('The menu', function() {
//     // //     /* Test ensures the menu element is
//     // //      * hidden by default.
//     // //      */
        it('menu is hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true)
        });
//     // //      /* Test ensures the menu changes
//     // //       * visibility when the menu icon is clicked. The test
//     // //       * has two expectations: does the menu display when
//     // //       * clicked and does it hide when clicked again.
//     // //       */
        it('menu visibility changes on click', function() {
            menuIcon = $('.menu-icon-link');
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* Created a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
//         /* Test ensures that when the loadFeed
//          * function is called and completes its work, there is at least
//          * a single .entry element within the .feed container.
//          * loadFeed() is asynchronous so this test requires
//          * the use of Jasmine's beforeEach and asynchronous done() function.
//          */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        it('contains at least one entry on load', function(done) {
            expect($('.feed .entry').length).not.toBe(0);
            done();
        });
    });

//     /* Created a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
//     //     /* Test ensures that when a new feed is loaded
//     //      * by the loadFeed function the content actually changes.
//     //      */
            var oldFeed;
            var newFeed;
            var originalTimeout;

//     //     /* Research on jasmine.DEFAULT_TIMEOUT_INTERVAL
//     //      * was conducted here https://jasmine.github.io/2.1/introduction
//     //      */

            beforeEach(function(done) {
                originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
                jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                loadFeed(0, function() {
                    oldFeed = $('.feed').html();
                loadFeed(1, function() {
                    newFeed = $('.feed').html();
                    done();
                    });
                });
            });
            
            it('changes content when new feed loads', function(done) {
                expect(oldFeed).not.toEqual(newFeed);
                done();
            });

            afterEach(function() {
                loadFeed(0);
                jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
            });
     });
}());
