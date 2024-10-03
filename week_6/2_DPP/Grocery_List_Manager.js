let groceryList=[];
let item1={
    name: "Sugar",
    quantity: 5,
    purchased: true,
    costPerUnit:70
};
let item2={
    name: "Salt",
    quantity: 3,
    purchased: false,
    costPerUnit:100
};
let item3={
    name: "Pasta",
    quantity: 2,
    purchased: true,
    costPerUnit:120
};
let item4={
    name: "Rice",
    quantity: 10,
    purchased: false,
    costPerUnit:150
};
groceryList[0] = item1;
groceryList[1] = item2;
groceryList[2] = item3;
groceryList[3] = item4;

console.log(groceryList);

groceryList[2]=null;

console.log(groceryList);

groceryList[3].purchased=true;

console.log(groceryList);

let item5 = {
    name: "Oranges",
    quantity: 12,
    purchased: false,
    costPerUnit: 20.5,
    
};
groceryList[4] = item5;

console.log(groceryList);

groceryList[3]=undefined;
console.log(groceryList);

console.log('Total Cost of Salt: ', groceryList[1].quantity * groceryList[1].costPerUnit);
console.log('Total Cost Oranges: ', groceryList[4].quantity * groceryList[4].costPerUnit);