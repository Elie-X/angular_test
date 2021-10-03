function myFunction(param: number, param2: number, param3: number = 0): void {


    // return 42;
}

// any
// int
// void

function multiArgs(...args:any[]) {
    for (let arg of args) {
        console.log(typeof arg)
    }
}

multiArgs(4,2,4,"Salut", null, true, ()=>1+1, [4,5]);

var obj={
    asyncmethod(param1, param2, callback) {
        /// some code
        // Using this

        callback(...);
    }
}

obj.asyncmethod(1,2,function(err, result) {
    // code here
    // This will possibly clash with this
})

// should be

obj.asyncmethod(1,2,(err, result)=>{
    // code here
});

function abc(params1) {
    return def;
}

// same as

(params1) => {
    return def;
}

// Same as

(param1) => def;

// Same as

param1 => def;





