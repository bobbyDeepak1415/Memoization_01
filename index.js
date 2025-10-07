// Factorial

// function factorial() {
//   let cache = {};

//   return function inner(n) {
//     if (n <= 1) return 1;

//     if (cache[n]) {
//       console.log("fetching from cache :", n);

//       return cache[n];
//     }

//     console.log("calculating: ", n);

//     cache[n] = n * inner(n - 1);

//     return cache[n];
//   };
// }

// const display = factorial();

// console.log(display(5));
// console.log(display(5));
// console.log(display(6));

// /////////////////////////////////////////////////////////////////////////////

function sum(a, b) {
  return a + b;
}

function product(a, b, c) {
  return a * b * c;
}


function getUniqueId(fn,args){

    let uniqueId=[]
    uniqueId=uniqueId.concat(fn.name,args)
    return uniqueId

}


function memoise(fn){
    let cache={}


    return function(...args){

        let uniqueId=getUniqueId(fn,args)

        if(cache[uniqueId]){
            console.log("fetching from cache",uniqueId)
            return cache[uniqueId]
        }else{
            console.log("calculating",uniqueId)
             cache[uniqueId]=fn(...args)
             return cache[uniqueId]
        }

    }
}


const display=memoise(product)

console.log(display(4,2,3))
console.log(display(4,2,3))