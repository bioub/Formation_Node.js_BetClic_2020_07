const prenoms = ['Jean', 'Eric', 'Romain'];

// programmation impérative
for (const prenom of prenoms) {
  if (prenom.length === 4) {
    const prenom4Letters = prenom;
    const prenom4LettersUpper = prenom4Letters.toUpperCase();
    console.log(prenom4LettersUpper);
  }
}

// programmation fonctionnelle (ES5)
prenoms
  .filter((prenom) => prenom.length === 4)
  .map((prenom4Letters) => prenom4Letters.toUpperCase())
  .forEach((prenom4LettersUpper) => {
    console.log(prenom4LettersUpper);
  });

console.log('FIN');

// pile d'appel
// ^
// |               up   up   lg   lg
// |=> - => - =>   => - =>   => - =>
// |filter       - map     - forEach - lg
// +-----------------------------------------> temps
//                           JEAN ERIC FIN
