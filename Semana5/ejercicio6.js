const f1 = (fn) => fn(5);
const f2 = (x) => (y) => x * y;

console.log(f1(f2(2)));