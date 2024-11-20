let myList = [];
let inp = "";
let del = "";

while (inp.toLowerCase() !== "q" && inp.toLowerCase() !== "quit") {
   inp = prompt("To Do List : A)dd, D)elete, L)ist, Q)uit?");

   if (inp.toLowerCase() === "a" || inp.toLowerCase() === "add") {
      let add = prompt("Add a new To Do List Item: (C to cancel)");
      if (add.toLowerCase !== "c") {
         myList.push(add);
      }
   } else if (inp.toLowerCase() === "d" || inp.toLowerCase() === "delete") {
      while (del.toLowerCase !== "c")
      del = prompt("Delete which To Do List Item? (C to cancel)");
      for (let i = 0; i < myList.length; i++) {
         while (myList[i] === del) {
            prompt(`${del} was not found, please check the spelling.`)
         }
      }
   }

}
console.log(`My List length = ${myList.length}`)
console.log(`My List = ${myList}`);
console.log(`inp = ${inp}`);
console.log("All Done :)");