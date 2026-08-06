const myObj = {
  a: 1,
  b: 2,
  c: 3,
  d: {
    e: 4,
    f: 5
  }
}

// Object Destrucure
// const { a: a, b: b, c: c } = {
// Short Hand Property if key & value are same
const { a, b, c, d } = myObj;

const {e, f} = d;

// DEEPLY NESTED OBJECT DESTRUCTURE
// const { a, b, c, d: { e, f} } = myObj;

console.log(a, b, c, e, f);



/* 
You Don't Know JavaScript by Kyle Simpson
'Namaste JavaScript' Playlist in Youtube
*/
// == -> Loose Equality
// === -> Strict Equality
console.log(1 == '1');  // Type Coercion / Type Conversion

console.log([1, 2, 3] == [1, 2, 3]);

console.log([1, 2, 3] == '1,2,3');

// const aa = [1, 2, 3].join('')
const aa = [1, 2, 3].toString()
console.log(aa)
console.log(typeof aa)