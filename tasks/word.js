'use strict';

// Modules
const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const utils = require('./../../../lib/utils');

module.exports = lando => {

  return {
    // yarn global add lando-power@1.2 --global-folder=/lando --modules-folder=plugins
    command: 'word',
    describe: 'da word',
    options: {
      daword: {
        describe: 'Spread dawords.',
        alias: ['w', 'd'],
        default: 'bird',
        string: true,
      },
    },
    run: options => {
      console.log('\n\n\t\tDa word: ', options.daword);
    },
  };
};
