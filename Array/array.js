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

// let arr=[10,60,30,20,40]
// let sum=0;
// arr.forEach((val,i)=>{
//     sum+=val;
// })
// console.log(sum);
// arr.map((val , i)=>{
//     console.log(i, "value is ", val);
// })
// let newArr=[];
// arr.forEach((val , i)=>{
//     // console.log(val , "squre of it" , val*val);
//     newArr.push(val*val)
// })
// console.log(newArr);

// let arr=[10,60,30,20,40]
// for(val in arr){
//     console.log(val);
// }
// for(val of arr){
//     console.log(val);
// }

// let arr=[10,60,30,20,40]
// arr.map((val , i)=>{
//     console.log(val);
// })
// console.log(arr);

// let newArr=arr.sort()
// console.log(newArr);
// console.log(arr);

// let arr=[45,6,77,88,44,20,10]
// arr.map((val , i , arr)=>{
//     console.log(val,"the twice of the val=", val*2);
//     console.log("this is arr",arr);
// })

// **************** filter********

// let arr2=[45,6,77,88,44,20,10]
// let newArr2=[]
// arr2.forEach((val)=> {
//     if(val>40){
//         newArr2.push(val)
//     }
// });
// console.log(newArr2);


// let arr=[45,6,77,88,44,20,10]
// let newArr=arr.filter((value, index, array) => {
//     return value>40
// })
// console.log(newArr);

// *********** removing the duplicate value from the existing array ******

// let arr=[45,6,77,88,44,20,10,44,10,20]
// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr.length; j++){
//         if(arr[i]==arr[j]){
//             arr.pop(arr[i])
//         }
//     }
// }
// console.log(arr);

// let arr=[NaN , 10 , 20.3 , 19n]
// let arr2=arr.filter((val , i)=>{
//    return (typeof val=="number")
// })
// console.log(arr2);

// ************ Reduce method *********
// let arr=[45,6,77,88,44,20,10,44,10,20]
// let a=arr.reduce((acc , val , i , arr)=>{
//    return acc+=val
// })
// console.log(a);

// let arr=[45,6,77,88,44,20,10,44,10,20]
// let a=arr.reduce((acc , val , i , arr)=>{
//    return acc+=val
// },1000)
// console.log(a);

// let arr=[45,6,77,88,44,20,10,44,10,20]
// console.log(Array.isArray(arr));


// let name=["t","i","n","k","u"]
// console.log(name.toString());
// console.log(name.join(""));




// ******** destructuring in javascript*******

// let Bagpack={
//     item1:"Torch",
//     item2:"Tiffin",
//     item3:"Rope",
//     item4:"Knife",
//     item5:"Water",
//     item6:"First Aid box",
//     item7: ()=>{
//         console.log("Fishing.....");
//     }
// }
// let {item1 , item2, item3, item4, item5, item6 , item7}=Bagpack
// // console.log(Bagpack.item1);
// // console.log(item1);
// item7();

// let arr=["Torch", "WAter", "Blanket", "knife",{menu1:"ghewar", menu2:"Mithai"}]
// let [a,b,c,d,{menu1 , menu2}]=arr
// console.log(d);
// console.log(menu1);
 

// let arr=[10,20,30,40,50]
// console.log(...arr);
// **** Rest*******
// let [a, b, c,...d]=arr
// console.log(d);



// let arr=[10,20,30,40,{name:"Rohit "}, ()=>{console.log("func Executed...")}]
// let [a,...b]=arr
// console.log(b);
// let[c,d,e,f,g]=b
// console.log(g);
// g();

//  ************* Spread Operator *****
// let arr=[10,20,30,40,50]
// let nums=[...arr]
// console.log(nums);

// let arr=[10,20,30,40,50]
// let arr2=[60,70]
// let nums=[...arr]
// console.log("original arrat:", arr);
// nums.push(60,70)

// console.log(nums);

// let func=(a,b,c,d,e)=>{
//    console.log(d);
// }
// func(...arr)











 






