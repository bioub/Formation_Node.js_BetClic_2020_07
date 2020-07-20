function hello(name = '') {
  return `Hello ${name} !`;
}

// function createUser(user = {}) {
//   const name = user.name || 'John'; // falsy : '', 0, false, null, undefined
//   return `Hello ${name} !`;
// }

// ECMAScript 2020
// ?? -> Nullish Coalescing operator (Node 14, TypeScript 3.7 à vérifier)
function createUser(user = {}) {
  const name = user.name ?? 'John'; // nullish : null, undefined
  return `Hello ${name} !`;
}

console.log(createUser({
  name: '',
}));
