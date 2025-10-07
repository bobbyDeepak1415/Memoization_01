
// Factorial

function factorial(){
    let cache={}

    return function inner(n){

        if(n<=1) return 1

        if(cache[n]) {
            console.log("fetching from cache :")

            return n
        }



    }

}


const display=factorial()

console.log(display())