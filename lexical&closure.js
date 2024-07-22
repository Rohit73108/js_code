/* ****************** closure ********* */
// the ability of the js engine to search for the variables from the  function even the fucniton is removed from the execution context ()
// or we can said removed from the call stack

let sumit=()=>{
   let bike="splendor"
   let rohit=()=>{
    console.log("the bike is the : ", bike);
   }
   return rohit
}
let returnedFunc=sumit()
returnedFunc()





