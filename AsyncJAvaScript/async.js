// function printM(){
//     console.log("this is normal function");
// }
// setTimeout(() => {
//     console.log("Hello this is a timeout function....");
// }, 3000);

// printM()

// setTimeout(printM,2000)



// setInterval(()=>{
//     console.log("this is interval");
// },2000)

// clearInterval()

let timer;
const button = document.getElementById("button");
const button1=document.getElementById("reset")
button.addEventListener("click" , function(){
    timer=setTimeout(() => {
        document.body.style.cssText="background-color:red; color:white;"
    }, 1000);
})
button1.addEventListener("click" , function(){
    document.body.style.cssText="background-color:white"
    clearTimeout(timer);
})