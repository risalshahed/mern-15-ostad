const myObj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}

const anotherObj = {
  ...myObj,
  a: 11
}

// anotherObj.a = 11;

console.log({ myObj })
console.log({anotherObj})