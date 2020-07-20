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

  return interne;
}

const interne = externe();
interne();

// pile d'appel
// ^
// |
// |
// |externe - interne
// +-----------------------> temps
