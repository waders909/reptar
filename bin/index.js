#!/usr/bin/env node

var logger = require('winston');
require('babel/register');
// require('babel/polyfill');
var Yarn = require('../lib');

logger.profile('yarn');

var yarn = new Yarn();
yarn.readFiles()
  .then(yarn.writeFiles.bind(yarn))
  .then(function() {
    logger.profile('yarn');

    process.exit(0);
  });