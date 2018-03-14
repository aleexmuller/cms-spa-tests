import * as singleSpa from 'single-spa';

var apps = require('./kroton-manifest.json');

apps.forEach(function(app) {
  singleSpa.registerApplication(
    app.name, 
      () => System.import(`../${app.name}/${app.file}`), 
      (location) => location.pathname.startsWith(`${app.path}`));
});

singleSpa.start();



