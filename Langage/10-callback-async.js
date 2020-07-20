setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('FIN');

// pile d'appel
// ^
// |
// |                            lg         lg    lg        C
// |st - st - st - st - lg  ⟳  cbB  ⟳    cbA - cbD ⟳    cbC
// +-----0----------------------10---------500-------------------> temps
//                      FIN     B          A     D         C

// File d'attente de timer (0ms) : cbB
// File d'attente de timer (10ms) :
// File d'attente de timer (500ms) : cbA - cbD
// File d'attente de timer (501ms) : cbD
// File d'attente de timer (502ms) :
// File d'attente de timer (1000ms) : cbC
// File d'attente de timer (1001ms) :

// Jake Archibald
// In the loop (2018) - JSConf.Asia
// -> Youtube
