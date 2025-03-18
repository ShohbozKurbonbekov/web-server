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
//3️⃣ - we should customize our nodemon command, we can have no demon restart when our js files change and when hbs change, like "nodemon src/app.js -e js,hbs"

const frequentElement = (arr) => {
  const obj = {};
  arr.forEach((num) => {
    obj[num] = (obj[num] || 0) + 1;
  });
  console.log(obj);
};
frequentElement([1, 2, 2, 3, 3, 3, 4, 4]);

//                   ✅ - VERSION CONTROL AND GIT
// 1️⃣ -by defualt, git doesn't track files you add to your application,you are gonna have to run commands telling git that you wanna track specific files, if we were to add a couple of new files to our project, they would show up as untracked files. first thing we do is we move everything we wanna commit over to "staged changes", this is where we put things we wanna save. We would run a "git add ." command, this is gonna take one or more files from untracked files and bring it over "staged changes".  we use the commit command, it is gonna take all of the files in staged changes and it is going to bundle them up into a single "commit" and it is going to show up over there, each commit has a unique identifier. when we make a change to a file that git is already tracking that comes in under "unstaged changes". Then, we are gonna make "git add . " commit to bring things over to the "staged area" and then we can use commit command to take  all of this and create a brand new commit in "commit".

// 2️⃣ -"ls -a -l ~/.ssh" in terminal.
/*
🧾 So what does it do?
It lists all the files (including hidden ones) in the .ssh folder, with detailed information like:

File permissions (e.g. -rw-------)
Number of links
Owner and group
File size
Last modified date/time
File name
📁 Example output:
-rw-------  1 yourname  staff   1675 Mar 17 14:01 id_rsa
-rw-r--r--  1 yourname  staff    400 Mar 17 14:01 id_rsa.pub
-rw-r--r--  1 yourname  staff    800 Mar 17 14:02 known_hosts
This would show you, for example:
Your private key (id_rsa)
Your public key (id_rsa.pub)
SSH known hosts
*/

// If we don't have it , we can create it like "ssh-keygen -t rsa -b 4096 -C  "kurbonbekovdatabase@gmail.com", and when we hit enter, it is gonna ask few questions, and we leave them as defaults. finally we run "dir %USERPROFILE%\.ssh" commond, and then we are gonna see the result "id_rsa" in the result is the one which we are gonna never share with anyone , this "id_rsa.pub" onei is public one which we can share with github to secure communication between our machine and their servers.
