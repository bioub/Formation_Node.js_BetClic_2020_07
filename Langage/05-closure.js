// historiquement globalThis (ES2020)
// global dans Node.js
// window dans le navigateur
globalThis.porteeGlobale = 'porteeGlobale';
const porteeModule = 'porteeModule';

function externe() {
  const porteeClosure = 'porteeClosure';
  function interne() {
    const porteeLocale = 'porteeLocale';
    console.log(porteeLocale);
    console.log(porteeClosure);
    console.log(porteeModule);
    console.log(porteeGlobale);
  }
  interne();
}

externe();

// pile d'appel
// ^
// |
// |interne
// |externe
// +-----------------------> temps
