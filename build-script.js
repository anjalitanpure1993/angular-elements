const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

  const files =[
    './dist/angular-weather-element/runtime.js',
    './dist/angular-weather-element/polyfills.js',
    './dist/angular-weather-element/main.js'
  ];

  await fs.ensureDir('elements');

  await concat(files, 'elements/ng-city-weather.js');
  console.info('Angular Elements created successfully!');

})();
