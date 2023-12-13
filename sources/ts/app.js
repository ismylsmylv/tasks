function func(a, b) {
    if (typeof b != "undefined") {
        return b;
    }
    else {
        return a;
    }
}
console.log(func(2, "asda"));
function func2(a, c, b) {
    if (typeof a != "undefined") {
        return a;
    }
    else if (typeof b != "undefined") {
        return b;
    }
    else {
        return c;
    }
}
function def(initial1, initial2) {
    if (initial2 === void 0) { initial2 = 100; }
    return initial1 * initial2;
}
console.log(def(230, 12));
function bothDef(num1, num2) {
    if (num1 === void 0) { num1 = 213; }
    if (num2 === void 0) { num2 = 1234; }
    return (num1 * 2) / num2;
}
console.log(bothDef());
function opt(num1, num2) {
    if (num2 === void 0) { num2 = 1234; }
    return (num1 * 2) / num2;
}
console.log(opt(3));
function restFunc() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var sum = 0;
    numbers.forEach(function (elem) {
        sum = sum + elem;
    });
    return sum;
}
console.log(restFunc());
function adder(a, b) {
    if (typeof a == "string" && typeof b == "string") {
        return a + b;
    }
    if (typeof a == "number" && typeof b == "number") {
        return a + b;
    }
}
console.log(adder("ewsew", "asdsad"));
function adder(a, b) {
    return a + b;
}
console.log(adder(2131, 1212));
