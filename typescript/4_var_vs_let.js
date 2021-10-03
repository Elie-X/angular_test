// var let const
function f(shouldInitialize) {
    //let x: number;
    if (shouldInitialize) {
        //var x=10;
        var x = 10;
    }
    return x;
}
console.log(f(true));
console.log(f(false));
