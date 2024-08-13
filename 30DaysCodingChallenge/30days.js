// // contriuctor function 

// function User(name){
//     this.name=name;
// }
// let persion=new User("Rohit");
// console.log(persion.name);


// // symbol = these are unique data types
// let sym=Symbol("id")
// console.log(sym.description);

//   Recursion in js **********

// function printnum(n){
//     if(n<=100){
//         console.log(n);
//         printnum(n+1)       
//     }
// }
// printnum(1);


// function factorial(n){
//     if(n==0){
//         return 1;
//     }else {
//         return n*factorial(n-1);
//     }
// }
// console.log(factorial(10));


// asynchronous we know that js is synchonous language

// console.log("This");
// console.log("is");
// console.log("synchonous");

// console.log("Hello.....");


// setTimeout(() => {
//     console.log("you are Rohit Right");
    
// }, 3000);

// setTimeout(()=>{
//     console.log("wait i think ! ");
    
// },1000)


// ********** property flag and descriptor ******

// let emp={};
// emp.name="Rohit Rana";
// console.log(Object.getOwnPropertyDescriptor(emp , "name"));
// Object.defineProperty(emp , "age",{
//     value:23,
//     writable:false,
//     configurable:true,
//     enumerable:true
// })
// emp.age=25; // cant update the age cause of its descriptor flag ....
// console.log(Object.getOwnPropertyDescriptor(emp , "age"));

// let descriptor=Object.getOwnPropertyDescriptor(Math , "PI")
// // console.log(descriptor);

// let obj1={
//     fname:"Rohit"
// }
// let obj2={
//     lname:"Rana"
// }
// obj1.__proto__=obj2;

// console.log(obj1.fname);
// console.log(obj1.lname);


//  ***** prototype *********

// function Person(name , age){
//     let person=Object.create(obj)
//     person.name=name;
//     person.age=age;
//     return person;
// }

// var obj={
//     greet(){
//         console.log(`hello ${this.name}`);
        
//     }
// }
// let user=Person("Rohit" , 23);
// // console.log(user.greet());

// console.log(Person.prototype);


// ****** classs **********

// class Person {
//     constructor(name , age){
//         this.name=name;
//         this.age=age;
//     }
//     sayhi(){
//         console.log(`Hello ${this.name} kaise ho ???`);
        
//     }
// }
// let user=new Person("Rohit" ,23)
// user.sayhi()
// let user2=new Person("Ankit" ,25)
// user2.sayhi()

// !? ****** inheritance ****

class Animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(`${this.name} makes noise`);
        
    }
}

class Dog extends Animal{
    constructor(name){
        super(name)
    }
    
}

class Cat extends Animal{
    constructor(name)
    {
        super(name)
    }
}
let d1=new Dog("tommy")
d1.speak()
let c=new Cat("pussy")
c.speak()















