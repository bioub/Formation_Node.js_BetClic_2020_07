
// ... 1s ... 3 3 3
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

function externe(msg) {
  return () => {
    console.log(msg);
  };
}

// ... 1s ... 0 1 2
for (var i = 0; i < 3; i++) {
  setTimeout(externe(i), 1000);
}

// ... 1s ... 0 1 2
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
