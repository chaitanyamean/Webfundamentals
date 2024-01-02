function fibnoci(n) {
  if (n <= 1) return n;
  return fibnoci(n - 1) + fibnoci(n - 2);
}

// A memoize function is a higher-order function that takes in a function and returns a
// memoized version of it. The memoized function caches the results of expensive function
// calls and returns the cached result when it receives the same inputs again.
function memoize(fn) {
  let cache = {};
  return function (...args) {
    let key = JSON.stringify(args);
    if (cache[key]) {
      console.log(cache);
      return cache[key];
    } else {
      let result = fn.apply(this, args);
      cache[key] = result;
      console.log(cache);
      return result;
    }
  };
}

const memoized = memoize(fibnoci);
console.log(memoized(5));
console.log(memoized(5));
console.log(memoized(10));
