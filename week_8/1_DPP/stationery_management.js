let inventory = ["Pencil", "Pen", "Eraser", "Register", "NoteBook", "Marker"];
// console.log(inventory);

//display inventory function
function displayInventory(){
    for(let i = 0; i<inventory.length; i++){
    console.log(i+" "+ inventory[i]);
    };
   return inventory
};
console.log(displayInventory());



//add new item using push method
function addItem(){
    inventory.push("Sketches","Sharpner");
    console.log("Inventory after push method");
     return displayInventory();
    
};
console.log(addItem());


//remove last item using pop method
function removeLastItem(){
    inventory.pop();
    console.log("Inventory after pop method");
    return displayInventory();
};
console.log(removeLastItem());


//remove first item using shift method
function removeFirstItem(){
    inventory.shift();
    console.log("Inventory after shift method");
     return displayInventory();
    
};
console.log(removeFirstItem());


// add item in the starting using unshift method
function addItemToBeginning(){
   inventory.unshift("Pencil");
   console.log("Inventory after unshift method");
    return displayInventory();
};
console.log(addItemToBeginning());


// reverse inventory using reverse method
function reverseInventory(){
    inventory.reverse();
    console.log("Inventory after reverse method");
    return displayInventory();
};
console.log(reverseInventory());


//joins all inventory items into a string using join
function joinInventory(){
    console.log("Inventory after join method");
    return inventory.join();
};
console.log(joinInventory());


// convert inventory into string using toString method
function inventoryToString(){
    console.log("Inventory after using toString method");
    return inventory.toString();
}
console.log(inventoryToString());


//removing items from its index using splice method
function removeItem(){
    console.log("Inventory before splice method");
    console.log(inventory);
    console.log("Inventory after splice method");
    inventory.splice(0,3);
    return displayInventory();
};
console.log(removeItem());


// search an item using indexOf method
function searchItem(){
    return inventory.indexOf("Eraser");
};
console.log("Index of the searched element is = "+searchItem());


// sort inventory alphabetically using sort method
function sortInventory(){
    console.log(inventory);
    console.log("inventory after sort method");
    return inventory.sort();
};
console.log("inventory before sort method");
console.log(sortInventory());


// slice the inventory using slice method
function getInventorySlice(){
    console.log(inventory);
    console.log("inventory after slice method");
    return inventory.slice(0,2);
};
console.log("inventory before slice method");
console.log(getInventorySlice());


// delete an item using delete operator
console.log("inventory before delete operator");
console.log(inventory);
delete inventory[1];
console.log("inventory after delete operator");
console.log(inventory);






