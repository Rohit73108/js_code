// ---------------------------------------DOM--------------------------------

// document object model 

// 1- document.getElementById("id")
//  return first(single element) id element (id should not be repeated)
// 2 -getElementByClassName("class")
// 3- getElementByTagName("")  
// return the array of elements(html collection)
// 4 -querySelector("") 
// -- single element target
// 5 - quarySelectorAll("")  
// -- target all element

/// !--------------getElementsByTagName---------------------
let heading = document.getElementsByTagName("h1")
heading[0].style.background="red";
heading[1].style.background="Blue";
console.log(heading)


/// ! ----------------------getElementById ------------------
let second1= document.getElementById("second1")
second1.style.background="pink"
console.log(second1)

/// ! --------------------getElementsByClassName

let third = document.getElementsByClassName("third");
third[0].style.background="green";
console.log(third);



// let heading = document.querySelector("#heading")

// let heading2 = document.querySelectorAll(".heading");  

/// ! ------------------------------Create element ---------------------

// let myDiv = document.querySelector("div")
// let newH1 = document.createElement("h1")
// console.log(newH1)

// newH1.innerText="i am heading";
// myDiv.append(newH1)            // append - multiple element insert , and append child - single element


// let mySection = document.getElementsByTagName("section")

// let p = document.createElement("p")

// console.log(p)
// p.innerText = "I am section";
// console.log(p)
// mySection.append(p)

// p.innerText = "I am section";
// section1.append(p)


/// ----------------setAtrribute----------------




// innerHTML
// myDiv = document.querySelector("div")
// myDiv.innerHTML =
// `<h1>heading</h1>
// <p>heading</p>`