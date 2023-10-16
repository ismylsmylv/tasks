let check = false
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "string") {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === arr[i][j].uppercase) {
                check = true
            }
        }
        if (check) {
            console.log(`index is ${i}, element is ${arr[i]}`)
        }
    }
}


for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "string"){
        for (let j = 0; j < arr[i].length; j++) {
            let count = 0
            if (arr[i][j] === arr[i][j].uppercase) {
                count++
                if (count > 2) {
                    console.log(arr[i])
                }
            }
        }
    }
}


let sum = 0
let min = 0
let max = 0

for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
        min = arr[i]
    }
    if (max < arr[i]) {
        max = arr[i]
    }
}
for (let j = 0; j < arr.length; j++) {
    if (typeof arr[i] == "number") {
        if (a[j] == max || a[j] == min) {
            continue
        }
        sum += arr[j]
    }
}



for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true || arr[i] === false) {
        console.log(arr[i - 1], arr[i + 1])
    }
}



let max = arr[0]
let min = arr[0]
let indexMin = 0
let indexMax = 0
let temp = 0

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
        if (i % 2 == 0) {
            if (min > arr[i]) {
                min = arr[i]
                indexMin = i
            }
        }
        else {
            if (max < arr[i]) {
                max = arr[i]
                indexMax = i
            }
        }
    }}
    temp = arr[indexMin]
    arr[indexMax] = arr[indexMin]
    arr[indexMin] = temp
    console.log(arr)