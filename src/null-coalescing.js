// Falsy Values -> 0, null, undefined, false, ''

const value = undefined;  // change the value & test
// let value;
// let value = null;

value && console.log('value is truthy');


// Falsy hoile, that is (0, null, undefined, false, '') ei shobgula hoile
value || console.log('value is falsy');

// Nullish Coalescing Operator -> value jodi null othoba undefined hoy,
value ?? console.log('value is nullish');