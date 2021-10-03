// var let const

function f(shouldInitialize: Boolean) {
    //let x: number;

    if (shouldInitialize) {
        //var x=10;
        let x=10;
    }

    return x;
}

console.log(f(true));
console.log(f(false));

