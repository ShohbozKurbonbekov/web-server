// how  do we set up our server to send  a response  when someone tries to get something at a specific route? (apple.com). we set up using a method on app. it is app.get();  this lets us configure what the server should do  when someone tries to get the resourse at a specific url. res.spend() - this allow us to send something to the specific requester. to start server up, we have to use one more method on app which is used once in our application and that is "listen()", it has to listen to a specific port.

//  __filename is a global variable that provides the absolute path of the currently executing file. It returns the full path including the file name. It is available only in CommonJS modules (i.e., files using require instead of import).
// console.log(__filename);

// __dirname in Node.js
// __dirname is a global variable in Node.js that provides the absolute path of the directory containing the currently executing file. It returns only the directory path, not the file name. It is only available in CommonJS (require-based modules).
// console.log(__dirname);

// path.join([...paths]) in Node.js
// path.join() is a method from the path core module in Node.js. It is used to join multiple path segments into a single path while handling platform-specific separators (/ for macOS/Linux, \ for Windows).

// ✨ Joins multiple path segments into a normalized path.
// ✨ Automatically handles slashes (/ or \) based on the OS.
// ✨ Removes redundant separators (//).
// Resolves .. and . (parent and current directory references).
// const path = require("path");
// const filePath = path.join("users", "john", "docs", "file.txt");
// console.log(filePath);

//  Output:
// On Windows: 'users\john\docs\file.txt'
// On macOS/Linux: 'users/john/docs/file.txt'

// 🟩 Dynamic pages with templating
/*Handlebars is a simple templating language that helps developers generate HTML dynamically. It is often used in web applications to separate logic from the UI by allowing you to insert dynamic content into templates.
1️⃣.Logic-less Templates: Handlebars keeps templates clean by avoiding inline JavaScript.
2️⃣.Expressions: Uses {{}} to insert values dynamically.
3️⃣.Helpers: Custom functions to extend template functionality.
4️⃣.Partials: Allows template reuse for better maintainability.*/

// 🟩 ADVANCED TEMPLATING;
// Partials allow you create a little template which is part of a bigger webpage. So we need to think about the parts of the webpage that we are gonna end  up reusing multiple pages in our site. these things would be "header" or "footer". with partials, it is gonna be so easy to create header and reuse it without needing to copy markup between all the pages in our site.  for that they are some steps to do.
//1️⃣ - load and configure "hbs" for the first time. and create a partials "folder" inside  "template" folder
//2️⃣ - then  we can tell "hbs" that we put our partials in this partials directory, and then we can actually add some stuff inside of there.
//3️⃣ - we should customize our nodemon command, we can have nodemon restart when our js files change and when hbs change, like "nodemon src/app.js -e js,hbs"
