// let arr=[10,30,40,50]
// arr.push(80)
// console.log(arr);
// arr.shift(10)
// console.log(arr);
// arr.splice(1,2)
// console.log(arr);
// console.log(arr.indexOf(50));
// console.log(arr.includes(50));

// let newArr=arr.reverse()
// console.log(newArr);
// let arr=[10,60,30,20,40]
// console.log(arr.sort());

// let arr=[10,60,30,20,40]
// let total=0
// for (let index = 0; index < arr.length; index++) {
//      total += arr[index];
// }
// console.log(total);

let arr=[10,60,30,20,40]
// let sum=0;
// arr.forEach((val,i)=>{
//     sum+=val;
// })
// console.log(sum);
// arr.map((val , i)=>{
//     console.log(i, "value is ", val);
// })
let newArr=[];
arr.forEach((val , i)=>{
    // console.log(val , "squre of it" , val*val);
    newArr.push(val*val)
})
console.log(newArr);





