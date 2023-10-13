let arr=[24, 3, 67, 79, 90,11, 120];
let max=arr[0];
for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
        for(let j=0; j<arr.length; j++){
            if(max<arr[i]){
                max=arr[i]
            }
        }
    }
}
console.log(max);