// let n=5;
// let space=n-1;
// for(let i=1; i<=5; i++){
//     for(let j=1; j<=space; j++){
//         console.log(" ");       
//     }
//     space--;
//     for(let j=1; j<=2*i-1; j++){
//         console.log("*");       
//     }
// }


// let arr=[1,4,3,2,88,90];

// let first=0;
// let second=0;
// for(let i=1; i<=arr.length; i++){
//     if(arr[i]>first){
//         second=first;
//         first =arr[i];
//     }
//     else if(arr[i]>second && arr[i]!=first){
//         second=arr[i];        
//     }    
// }
// console.log("the 2nd largest in the given array is :", second);


// let val=arr[5];
// for(let i=0; i<=5; i++){
//      arr[i]=arr[i+1];
// }
// arr[0]=val;
// console.log(arr);



// ************** remove duplicate **********

let arr=[45,6,77,88,44,20,10,44,10,20]
for(let i=0; i<arr.length; i++){
    for(let j=1; j<arr.length; j++){
        if(arr[i]==arr[j]){
            arr.pop(arr[i]);
        }
    }
}
console.log(arr);






