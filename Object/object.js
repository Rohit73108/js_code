// let my_obj ={
//     name:"khurana",
//     age: 40,

// }
// my_obj.address="palampur";  // this concept is known as the object mutability
// console.log(my_obj);

// my_obj.name="Tamata";
// console.log(my_obj);

// //  object creation by using the new object 

// let obj1=new Object({name:"Rohit Rana", age:50})
// console.log(obj1);
// obj1.address="Banglore";
// console.log(obj1)

// //  object creation using by function (factory function)


// function sabji(name , rate, qty){
//    return{
//     name:name,
//     rate:rate,
//     qty:qty
//    }
// }
// let sabji1=sabji("tamatar" ,  50 , "1kg");
// let sabji2=sabji("baigan" ,  10 , "1kg");
// let sabji3=sabji("loki" ,   30 , "1kg");
// let sabji4=sabji("pyaaz" ,  200 , "1kg");
// console.log(sabji1);
// console.log(sabji2);
// console.log(sabji3);
// console.log(sabji4);




// // creating object using class 


// class Car {
//     constructor(name , rate , comp){
//      this.name=name,
//      this.rate=rate,
//      this.comp=comp
//     }
// }
// let car1=new Car("alto" , "1Lakh" , "bmw")
// let car2=new Car("alto2" , "2Lakh" , "bmw")
// let car3=new Car("alto3" , "3Lakh" , "bmw")

// console.log(car1);
// console.log(car2);
// console.log(car3);
// let name=car1.name;
// console.log(name);

// //  how to delete any key and value pair from the object

// let obj3={
//     name:"Rohit",
//     age:50,
// }
// console.log(obj3);
// delete(obj3.age)
// console.log(obj3);

// let country={
//     state: {
//         name:"uk",
//         district:{
//             name:"Dehradun",
//             value:"Dehradun ka mera khooon"
//         }
//     }
// }
// console.log(country);
// console.log(country.state.district.name);
// console.log(country.state.district.value);

// // creation of the object by using the help of the constructor function

// let students=function(name , id ){
//     this.name=name
//     this.id=id

// }
// let student1=new students("Tinku " , 202)
// console.log(student1);


// Object ke kux methods

// let movie={
//     name:"student of the year",
//     year: 2012,
//     actor: "sidhart malhotra",
//     actress:"Alia bhatt",
//     villain: "Ram kapoor",
//     villain: "60cr",
//     income:"110cr"
// }
// let keys=Object.keys(movie);
// console.log(keys);
// let allValues=Object.values(movie)
// console.log(allValues);
// let allentities=Object.entries(movie)
// console.log(allentities);


// // console.log(typeof ());

// **** assign objects to an object

// let student1={
//     name:"Rohit",

// }
// let student2={
//     add:"noida"
// }
// let student3={
//     rollno:32
// }
// Object.assign(student1,student2,student3)
// console.log(student1);
// console.log(student2);
// console.log(student3);


// let movie={
//     name:"hera pheri",
//     year:2000,
//     actor:{
//         actor1:"Babu Bhyaa",
//         actor2:"akshay kumar",
//         actor3:"sunil",
//     },
//     actress:{
//         actress1:"taboo",
//         actress2:"bipasha",
//     },
//     budget:"150rs",
//     income:"45lakh"
// }
// console.log(movie.year);
// console.log(movie["year"]);
// console.log(movie.actor.actor1);
// console.log(movie["actor"]["actor1"]);
// console.log(movie.hasOwnProperty("income"));
// console.log("income" in movie);

// let obj={
//     name:"Rohit"
// }
// Object.freeze(obj)
// Object.seal(obj)
// delete obj.name
// // console.log(obj);
// console.log(Object.isFrozen(obj));
// console.log(Object.isSealed(obj));


// **** creating object by using only variable
// let name = "Rohit"
// let phone=958393839
// let add="noida"
// let persion={
//      name,
//      phone,
//      add
// }
// console.log(persion);


// *********** shallow copy or deep copy

// let obj1={
//     name :"Tinku",
//     add:"noida"
// }
// let obj2=obj1
// // console.log(obj2);
// obj2.phone=9473893
// console.log(obj2);
// console.log(obj1);

// Deep copy

// let obj1={
//     name :"Tinku",
//     add:"noida"
// }

// //  first funny way to create deep copy
// let copy={
//     name :"Tinku",
// add:"noida"
// }

//  2nd method
// let obj1={
//     name :"Tinku",
//     add:"noida"
// }
// let copy={}
// for (const key in obj1) {
//     copy[key]=obj1[key]
        
//     }
// console.log(copy);


//  by using parse and stringify

let obj1={
    name :"Tinku",
    add:"noida"
}
// let jsonObject= JSON.stringify(obj1)
// console.log(jsonObject);
// let copy = JSON.parse(jsonObject)
// console.log(copy);
// console.log(copy.name);

let copy=JSON.parse(JSON.stringify(obj1))
console.log(copy);





