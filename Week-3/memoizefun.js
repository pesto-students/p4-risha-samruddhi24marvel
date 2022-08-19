function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = args.toString();
    if (cache.has(key)) {
      return cache.get(key);
    }
    cache.set(key, fn(...args));
    return cache.get(key);
  };
}
function add(a, b) {
  return a + b;
}
function time(fn) {
  console.time();
  fn();
  console.timeEnd();
}

const memoizeAdd = memoize(add);

time(() => memoizeAdd(10, 20));
time(() => memoizeAdd(10, 20));
time(() => memoizeAdd(10, 20));
time(() => memoizeAdd(10, 20));

/*console.log(memoizeAdd(10,20));
console.log(memoizeAdd(10,20));
console.log(memoizeAdd(10,20));*/
