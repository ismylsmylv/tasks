function getSum(num1, num2) {
    sum = num1 + num2
    return sum
}
function getDiff(num1, num2) {
    diff = num1 - num2
    return diff
}
function result(num1, num2) {
    sum = getSum(num1, num2)
    diff = getDiff(num1, num2)
    result = sum * diff
    return result
}

console.log(result(9, 7));