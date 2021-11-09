// Enum with all the operators that we want to support inside our code.
var Operator;
(function (Operator) {
    Operator["Add"] = "add";
    Operator["Subtract"] = "subtract";
    Operator["Multiply"] = "multiply";
    Operator["Divide"] = "divide";
    Operator["Modulo"] = "modulo";
})(Operator || (Operator = {}));
// An (empty) array that can hold multiple tuples of the `[Operator, Operation]` type. 
// This will be our dictionary, where we store all our methods.
const operations = [];
// An add method, that satisfies the `Operation` type
const add = function (first, second) {
    return first + second;
};
// Adding a tuple of the `Operator.Add` value and the `add` function to the `operations` array. 
operations.push([Operator.Add, add]);
const subtract = function (first, second) {
    return first - second;
};
operations.push([Operator.Subtract, subtract]);
const multiply = function (first, second) {
    return first * second;
};
operations.push([Operator.Multiply, multiply]);
const divide = function (first, second) {
    return first / second;
};
operations.push([Operator.Divide, divide]);
const modulo = function (first, second) {
    return first % second;
};
operations.push([Operator.Modulo, modulo]);
const calculator = function (first, second, op) {
    const tuple = operations.find(tpl => tpl[0] === op);
    const operation = tuple[1];
    const result = operation(first, second);
    return result;
};
// A test run of the calculator
console.log(calculator(4, 6, Operator.Add));
console.log(calculator(13, 3, Operator.Subtract));
console.log(calculator(2, 5, Operator.Multiply));
console.log(calculator(70, 7, Operator.Divide));
console.log(calculator(120, 11, Operator.Modulo));
// Ajouter une operation Modulo
