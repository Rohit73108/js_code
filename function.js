// function bookTicket(){
//     console.log("your ticket is booked dude....");
// }
// bookTicket();

 
// function bookTicket1(location){
//     console.log(`ticket is booked for the ${location}`);
// }
// bookTicket1("mumbai");



//  function introduction(name, email, phone){
    // console.log(`my name is : "${name}" and my email id is : "${email}" and my phone no is : "${phone}"` );
    // console.log(`my email is : ${email}`);
    // console.log(`my phone is : ${phone}`);
//  }
//  introduction("Rohit","rohitrana83@gmail.com",97384844)


//  let func= (name)=>{
//     console.log(`this is an arrow funciton and the driver is : ${name}`);
//  }
//  func("Rohit Rana");

//  let add= (a , b)=>{
//     console.log(`the addition of the ${a} and ${b} is => ` , a+b);
//  }
// add(5 ,9)

 /********* the higher order function And the call back funtion ******
  * the parent function or outer function is  known as the higher order function and the fucntion which is given 
  * iside the function as a parameter is known as the call back function 
  * 
            HIGHER ORDER FUCNTION AND CALL BACK FUCNTION
 */
//   let a=(func)=>{
//      func();
//   }
//   let anyfucntion=()=>{
//    console.log("any Function");
//   }
//   a(anyfucntion);
 
// let hof=(cbf)=>{
//    cbf();
// }
// let cbf=()=>{
//    console.log("cbf is executed");
// }
// hof(cbf);
// hof(cbf);
// hof(cbf);

// let operations=(task , num1, num2)=>{
//       task(num1 , num2);
// }
// let subs=(num1 , num2)=>{
//    console.log(num1-num2);

// }
// let multy=(num1 , num2)=>{
//    console.log(num1*num2);
// }
// let divie=(num1 , num2)=>{
//    console.log(num1/num2);
// }
// // operations(add, 10 , 30);
// operations(subs, 10 , 30);
// operations(multy, 10 , 30);
// operations(divie, 10 , 30);


// ******* anonamous function

// fucntion assigned to A  variable is called as fucntion as a expression

let demo = function(){
   console.log("Hello this is an unnamed fucntion");
}
demo();
// (immidiate invoke function expression)

(()=>{
   console.log("this is an immidiate invok function");
})
()

let que="kasi ho tum"
let call = (que)=>{
   console.log(que);
   return "badia hu ji aap btaiye"
}
let reply=call(que)
console.log(reply);

console.log(a);
var a=10;
let b;
const c=9;

console.log(b);





  




