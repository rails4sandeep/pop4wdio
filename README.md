# pop4wdio
A simplified page object pattern solution for webdriverio

### Introduction

Trying to implement a simplified way of writing the popular page object pattern. In this repo you can find two examples.
One for class based page object pattern and the other for object based page object pattern.

* Browser object creation and deletion is wrapped in `Session` class
* Common methods related to interacting with page and its elements are wrapped in `Page` class
* Each page is a javascript object. You can find an example for it in the `pop` directory
* In another example each page is an ES6 Javascript class. You can find an example for it in `pop` directory

### Installation

`npm install`

### Use

You can run the examples and see the usage

* `node obj-based-pop.js` to run the javascript object based example
* `node class-based-pop.js` to run the javascript class based example
