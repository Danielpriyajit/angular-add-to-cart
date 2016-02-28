# Angular Phoneshop
## A starter project for AngularJS ##

###Install Node.js###
If you want to run the preconfigured local web-server and the test tools then you will also need Node.js v0.10.27+.

You can download a Node.js installer for your operating system from http://nodejs.org/download/.

Check the version of Node.js that you have installed by running the following command:


```
#!python

node --version
```


In Debian based distributions, there is a name clash with another utility called node. The suggested solution is to also install the nodejs-legacy apt package, which renames node to nodejs.


```
#!python

apt-get install nodejs-legacy npm

nodejs --version

npm --version
```


Once you have `Node.js` installed on your machine you can download the tool dependencies by running:


```
#!python

npm install
```


Running npm install will also automatically use bower to download the Angular framework into the app/bower_components directory.




```
#!python

npm start
```


Will start a local development web-server. Your app will be available on following URL:

[http://localhost:8040/app/](http://localhost:8040/app/)
