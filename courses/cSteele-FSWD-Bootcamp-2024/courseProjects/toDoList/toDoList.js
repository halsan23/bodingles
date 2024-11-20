// JavaScript ToDo List

// Initialize Vriables
const toDoList = [];
let choice = "";
let addNew = "";
let arrCheck = 0;

while (choice !== "q" && choice !== "quit") {
   choice = prompt("ToDo List: A)dd a New Item, L)ist Items, D)elete an Item, or  Q)uit?").toLowerCase();

   // Add a new item
   while (choice === "a" || choice === "add") {
      addNew = prompt("Add a New Item or C)ancel?");
      if (addNew.toLowerCase() !== "c" && addNew.toLowerCase() !== "cancel") {
         toDoList.push(addNew);
      } else {
         choice = "";
      }
   }

   // List Items
   if (choice.toLowerCase() === "l" || choice.toLowerCase() === "list") {
      if (toDoList.length < 1) {
         console.log('No Items in ToDo List');
         alert('ToDo List is Empty');
      } else {
         console.log('ToDo List');
         console.log('===============');
         for (let i = 0; i < toDoList.length; i++) {
            console.log(`ToDo #${i + 1}: ${toDoList[i]}`);
         }
         console.log('---------------');
         choice = "";
      }
   }

   // Delete Items
   if (choice === "d" || choice === "delete") {
      if (toDoList.length < 1) {
         alert('The ToDo List is Empty : No Items to Delete!');
         choice = "";
      } else {
         delItem = prompt("Delete an Existing ToDo Item or C)ancel?");
         if (delItem.toLowerCase() !== "c" && delItem.toLowerCase() !== "cancel") {
            for (let i = 0; i < toDoList.length; i++) {
               if (toDoList[i] === delItem) {
                  console.log(`Deleted List Item ${i + 1} : ${toDoList[i]}`);
                  toDoList.splice(i, 1);
                  arrCheck = 1;
               } else if (parseInt(delItem-1) === i) {
                  console.log(`Deleted List Item ${i + 1} : ${toDoList[i]}`);
                  toDoList.splice(i, 1);
                  arrCheck = 1;
               }
            }
            if (arrCheck === 0) {
               alert(`${delItem} not Found : Check spelling and try again:`)
            }
         } else {
            choice = "";
            arrCheck = 0;
         }
      }
   }
}

console.log('All Done');
