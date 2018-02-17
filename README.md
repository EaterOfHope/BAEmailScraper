# BAEmailScraper
#### BAEmailScraper is an email scrapping tool that can scrap millions of emails daily from Google search query only.

Here is how to use it.

- Install NodeJs
- cd to the BAEmailScraper folder and run npm-install

Now you can start scrapping your emails.
Open the app.js and configure your keyword and Google pages number you want to scrap.

```sh
var searchQuery = 'keyword "@gmail.com" "@live.com" "@yahoo.com" "@hotmail.com"';
BAEmailScraper.start(searchQuery, 1, 1, "myList.txt");
```
Finally run the NodeJs app to start the scrapping.

### ENJOY!
