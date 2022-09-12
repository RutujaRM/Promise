import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Promises!</h1>
`;

//here we implement promise by using (new Promise) keyword
const p = new Promise(
  (
    resolve,
    reject //here we pass to parameters
  ) => {
    console.log("Rutuja");
    resolve(); // completed/fulfilled promise
    reject(); // uncomplte promise
    //return(123)
    console.log(123);
  }
);
console.log(p);

p.then(() => {
  console.log("Promise Successful !!");
});
p.catch(() => {
  console.log("Promise Unsuccessful");
});

//In this resolve or reject whatever you call first its excute that

/*In this promise(resolve , reject) whatever we call first it's executed first
   Return :-  after reject if we use "return" this not show output
   Console :- after reject if we use "console" this show the output
*/
const p1 = new Promise((resolve, reject) => {
  console.log("Rutuja");

  reject();
  console.log("Mashere"); //Mashere

  reject();
  return "Ramesh"; //this not show o/p
});

console.log(p1);

/*
 here to show message after Resolve , Reject we use "then , catch"
  
  Then (resolve)  :- It's executed when Resolve is called
  Catch (reject)  :- It's executed when Reject is called

This can be used to show user msg to promise is execute or not
 */

p1.then(() => {
  console.log("Successfully promise is executed!!");
});
p1.catch(() => {
  console.log("Promise is Rejected !!");
});

/* 
 It callback function as well so we can also pass msg or value in it

*/

const p2 = new Promise((resolve, reject) => {
  console.log("Mahadev");

  resolve("Hii Ritu"); //here pass value (Argument)
});

p2.then(
  (
    a //pass value assign to a variable (Parameter)
  ) => {
    console.log("Hiiiiiiii Promise done");
    console.log(a);
  }
);
