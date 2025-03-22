## Dynamic pages with templating

# Handlebars is a simple templating language that helps developers generate HTML dynamically. It is often used in web applications to separate logic from the UI by allowing you to insert dynamic content into templates.

- Logic-less Templates: Handlebars keeps templates clean by avoiding inline JavaScript.
- Expressions: Uses {{}} to insert values dynamically.
- Helpers: Custom functions to extend template functionality.
- Partials: Allows template reuse for better maintainability.\*/

# ADVANCED TEMPLATING

- Partials allow you create a little template which is part of a bigger webpage. So we need to think about the parts of the webpage that we are gonna end up reusing multiple pages in our site. these things would be "header" or "footer". with partials, it is gonna be so easy to create header and reuse it without needing to copy markup between all the pages in our site. for that they are some steps to do.
- load and configure "hbs" for the first time. and create a partials "folder" inside "template" folder
- then we can tell "hbs" that we put our partials in this partials directory, and then we can actually add some stuff inside of there.
- Use nodemon with "nodemon src/app.js -e js,hbs" to auto-reload your server on .hbs changes.
