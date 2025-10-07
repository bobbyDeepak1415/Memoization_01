// Factorial

function factorial() {
  let cache = {};

  return function inner(n) {
    if (n <= 1) return 1;

    if (cache[n]) {
      console.log("fetching from cache :",n);

      return cache[n];
    }

    console.log("calculating: ",n);

    cache[n] = n * inner(n - 1);

    return cache[n];
  };
  
}

const display = factorial();

console.log(display(5));
console.log(display(5));
console.log(display(6));
