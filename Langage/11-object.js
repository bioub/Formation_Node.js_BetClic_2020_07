// object literal
const coords = {
  x: 1,
  y: 2,
};

// extensibilité
coords.z = 3;

console.log(coords.z); // 3
console['log'](coords['z']); // 3
const key = 'z';
console.log(coords[key]); // 3

delete coords.z;

const MyMath = {
  sum(a, b) {
    return a + b;
  },
};

console.log(MyMath.sum(1, 2));

// function Contact(prenom) {
//   this.prenom = prenom;
// }

// Contact.prototype.hello = function() {
//   return `Hello ${this.prenom} !`;
// };


class Contact {
  constructor(prenom) {
    // if (prenom.length > 3) {
      this.prenom = prenom;
    // }
  }
  hello() {
    return `Hello ${this.prenom} !`;
  }
}

const romain = new Contact('Romain');
console.log(typeof romain); // object
console.log(romain.prenom);
console.log(romain.hello());

console.log(romain.prenom !== undefined); // true
console.log(romain.hello !== undefined); // true

console.log(romain.hasOwnProperty('prenom')); // true
console.log(romain.hasOwnProperty('hello')); // false
