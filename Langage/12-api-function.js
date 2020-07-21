globalThis.name = 'Romain';

const contact = {
  name: 'Toto',
};

function hello(p1, p2) {
  console.log(`Hello ${p1}, ${p2} my name is ${this.name}`);
}

hello.call(contact, 'Jean', 'Eric');
hello.apply(contact, ['Jean', 'Eric']);
hello.call(contact, ...['Jean', 'Eric']);

const helloContact = hello.bind(contact);
helloContact('Jean', 'Eric');
