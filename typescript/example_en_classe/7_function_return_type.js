function myFunction(param, param2, param3) {
    if (param3 === void 0) { param3 = 0; }
    // return 42;
}
// any
// int
// void
function multiArgs() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        console.log(typeof arg);
    }
}
multiArgs(4, 2, 4, "Salut", null, true, function () { return 1 + 1; }, [4, 5]);
