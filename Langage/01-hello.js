const prenoms = ['Jean', 'Eric', 'Romain'];

/**
 *
 * @param {string} name
 */
function hello(name) {
  return `Hello ${name.toUpperCase()} !`;
}

// programmation impérative
for (const prenom of prenoms) {
  console.log(hello(prenom));
}

// programmation fonctionnelle
// prenoms.forEach((prenom) => {
//   console.log(hello(prenom));
// });
