// let obj={
//     name:"Rohit Rana"
// }
// console.log(obj);

// let arr=[10,20,30,40,50]
// console.log(arr);

// let a=String.prototype
// console.log(a);

// let b=Symbol.prototype
// console.log(b);
// let c=Function().prototype
// console.log(c);

// let obj1={
//     name:"Rohit Rana",
//     age:23
// }
// console.log(obj1);

// let arr=[1,2,3,4,5]
// console.log(arr.__proto__);

// let a=Math.PI
// console.log(a);
// console.log(a.__proto__);


//  ************* prototype inheritance*****
let obj1={
    name:"Rohit Rana",
}
let obj2={
    age:23,
    class:"6th",
    roll:50
}
let obj3={
    city:"Noida"
}
obj1.__proto__=obj2

console.log(obj1.age);
console.log(obj1.name);
console.log(obj1.roll);