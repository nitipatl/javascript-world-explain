# JavaScript module bundler

Most programming languages provide a way to import code from one file into another.

Java

![](https://3.bp.blogspot.com/-mzibMIk3d_c/VAVdswFbJmI/AAAAAAAAdbA/tESeKo7hTlo/s1600/6.jpg)

JavaScript wasn’t originally designed with this feature, because JavaScript was designed to only run in the browser, with no access to the file system of the client’s computer (for security reasons). 

So for the longest time, organizing JavaScript code in multiple files required you to load each file with variables shared globally. 


# History

- 2009, CommonJS was started with the goal of specifying an ecosystem for JavaScript outside the browser.
    - allow JavaScript to import and export code across files like most programming languages

![](https://cdn-images-1.medium.com/max/800/1*xeF1flp1zDLLJ4j7rDQ6-Q.png)

# Playground

`var moment = require('./node_modules/moment/min/moment.min.js');`

`var moment = require('moment');`

`node node.index.js`

Change code in index.html  

`<script src="index.js"></script>`

To

`<script src="node.index.js"></script>`

See what's happen on a browser.

# History

- 2011, [Browserify](http://browserify.org/) - node.js usage style on frontend, can use npm too.

- 2015, [webpack](https://webpack.js.org/)

# Webpack

`npm install webpack-cli --save-dev`

`$ ./node_modules/.bin/webpack-cli node.index.js -o bundle.js`

Change code in index.html 

`<script src="node.index.js"></script>`  

To

`<script src="bundle.js"></script>`  
