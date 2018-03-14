import * as singleSpa from 'single-spa';

// singleSpa.registerApplication('app1', () => import ('../app1/app1.js'), pathPrefix('/app1'));
// singleSpa.registerApplication('app2', () => import ('../app2/app2.js'), pathPrefix('/app2'));

var apps = require('./kroton-manifest.json');

apps.forEach(function(app, index) {
  singleSpa.registerApplication(app.name, 
    () => System.import(`${app.file}`), pathPrefix(app.path));
});

// singleSpa.declareChildApplication('login', System.import('../login/dist/main.bundle'), () => true)

singleSpa.start();

function pathPrefix(prefix) {
  return function(location) {
    return location.pathname.startsWith(`${prefix}`);
  } 
}

function loadApp(path) {
  return () => System.import(`${path}`);
}

// function loadApp(url) {
//   return new Promise((resolve, reject) => {
//     const script = document.createElement('script')
//     script.src = url;
//     script.onload = resolve;
//     script.onerror = reject;
//     document.head.appendChild(script)
//   });
// }