function sum(a, b) {
  let result = a + b;

  // pseudo variables : variables créées au moment de l'appel
  // this, arguments
  for (let i = 2; i < arguments.length; i++) {
    const nb = arguments[i];
    result += nb;
  }

  return result;
}

// REST Params (ES2015)
function sum(a, b, ...nbs) {
  let result = a + b;

  for (const nb of nbs) {
    result += nb;
  }

  return result;
}

console.log(sum(1, 2, 3, 4)); // 10
