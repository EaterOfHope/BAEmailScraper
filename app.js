var BAEmailScraper = require("./controllers/scraper.js");
var searchQuery = 'keyword "@gmail.com" "@live.com" "@yahoo.com" "@hotmail.com"'; /* Google search query to find email address */

// Method: start()
// parameters 1: Google search query to find emails
// parameters 2: Google Page number to start
// parameters 3: Google Page number to end
// parameters 4: List file name to save emails

// Note: Don't query to many pages at once. Query 1 to 5 than 6 - 10 and so on. Google will block you if you query to much at once.

BAEmailScraper.start(searchQuery, 1, 1, "myList.txt");