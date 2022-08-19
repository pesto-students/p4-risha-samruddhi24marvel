function sum(a, b) {
  return this.a + this.b;
}

const sumc = sum.bind({ a: 10, b: 20 });
console.log(sumc());

function sub(a, b) {
  console.log(this.a - this.b);
}
var subVal = { a: 20, b: 10 };
sub.call(subVal);

var max = Math.max.apply(Math, [5, 90, 66]);
console.log(max);
