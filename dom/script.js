// // 1. Use getElementById to select an element by ID

const item = document.getElementById("item");
console.log(item);

// 2. Use getElementsByName to select elements by name

const i = document.getElementsByName("username");
console.log(i);

// // 3. Use getElementsByTagName to select elements by tag name

const item2 = document.getElementsByTagName("li");
console.log(item2[1]);

// // 4. Use getElementsByClassName to select elements by class name

const items = document.getElementsByClassName("item");
console.log(items[2]);
