// let str = " some RandomwordsForlongletters of some "

// console.log(`lenght ${str.length}`);
// console.log(`slice ${str.slice(3)}`);
// console.log(`substring ${str.substring(3)}`);
// console.log(`substr ${str.substr(3)}`);
// console.log(`replace ${str.replace("some", "all")}`);
// console.log(`replaceAll ${str.replaceAll("some", "all")}`);
// console.log(`uppercase ${str.toUpperCase()}`);
// console.log(`lowercase ${str.toLowerCase()}`);
// console.log(`concat ${str.concat("test")}`);
// console.log(`trim ${str.trim()}`);
// console.log(`trim start ${str.trimStart()}`);
// console.log(`trim end ${str.trimEnd()}`);
// console.log(`pad start ${str.padStart(120, "x")}`);
// console.log(`pad end ${str.padEnd(120, "x")}`);
// console.log(`split ${str.split(" , ")}`);
// console.log(`charAt ${str.charAt(3)}`);
// console.log(`charCodeAt ${str.charCodeAt(8)}`);

// let arr=[34, "word1", 898, "word2", true, [12, 45, 23]]
// console.log(`lenght ${arr.length}`);
// console.log(`tostring ${arr.toString(arr)}`);
// console.log(`pop ${arr.pop(2)}`);
// console.log(`push ${arr.push(2)}`);
// console.log(`shift ${arr.shift(2)}`);
// console.log(`unshift ${arr.unshift(2)}`);
// console.log(`join ${arr.join([67, 34])}`);
// console.log(`concat ${arr.concat([67, 34])}`);
// console.log(`flat ${arr.flat()}`);
// console.log(`splice ${arr.splice(2, 3)}`);
// console.log(`slice ${arr.slice(2)}`);

let arr=["Istanbul" ,"Baku", "London"]
function search(arr) {
    let word=prompt("enter city name")
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            if (word==arr[i].charAt(j)){
                console.log("found");
            }
        }
    }
    console.log(word);
}
console.log(search(arr));