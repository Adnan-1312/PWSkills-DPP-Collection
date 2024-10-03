let contacts = [];
// Function to add a contact
function addContact(name, phone) {
contacts[contacts.length] = { name: name, phone: phone };
console.log(`Added contact: ${name}`);
}
// Function to delete a contact
function deleteContact(name) {
let newContacts = [];
let deleted = false;
for (let i = 0; i < contacts.length; i++) {
if (contacts[i].name !== name) {
newContacts[newContacts.length] = contacts[i];
} else {
deleted = true;
}
}
contacts = newContacts;
if (deleted) {
console.log(`Deleted contact: ${name}`);
} else {
console.log(`Contact not found: ${name}`);
}
}
// Function to display all contacts
function displayContacts() {
console.log("Contacts:");
for (let i = 0; i < contacts.length; i++) {
console.log(`${i + 1}. ${contacts[i].name}:
${contacts[i].phone}`);
}
}
// Function with arbitrary number of parameters
function addMultipleContacts() {
for (let i = 0; i < arguments.length; i++) {
addContact(arguments[i].name, arguments[i].phone);
}
}
// Function that returns a value
function findContact(name) {
for (let i = 0; i < contacts.length; i++) {
if (contacts[i].name === name) {
return contacts[i];
}
}
return null;
}
// Function expression
const updateContact = function(name, newPhone) {
let updated = false;
for (let i = 0; i < contacts.length; i++) {
if (contacts[i].name === name) {
contacts[i].phone = newPhone;
updated = true;
break;
}
}
if (updated) {
console.log(`Updated ${name}'s phone to ${newPhone}`);
} else {
console.log(`Contact not found: ${name}`);
}
};
// Arrow function
const countContacts = () => {
let count = 0;
for (let i = 0; i < contacts.length; i++) {
count++;
}
return count;
};
// Example usage
addContact("Alice", "123-456-7890");
addContact("Bob", "987-654-3210");
displayContacts();
deleteContact("Alice");
displayContacts();
addMultipleContacts(
{ name: "Charlie", phone: "111-222-3333" },
{ name: "David", phone: "444-555-6666" }
);
displayContacts();
let foundContact = findContact("Bob");
console.log("Found contact:", foundContact);
updateContact("Charlie", "999-888-7777");
displayContacts();
console.log("Total contacts:", countContacts());