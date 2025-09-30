// Arrays Spread
const fruits = ["apple", "banana"];
const vegetables = ["carrot", "broccoli"];
const proteins = ["chicken", "tofu", "beef", "beans"];

const groceryList = []

groceryList.push(fruits)
groceryList.push(vegetables)
groceryList.push(proteins)

console.log(groceryList)

// ... is the spread operator

groceryListFlattened = []
groceryListFlattened.push(...fruits)
console.log(groceryListFlattened)
groceryListFlattened.push(...vegetables)
console.log(groceryListFlattened)
//... spread is the equivalent of doing this
//groceryListFlattened.push(proteins[0], proteins[1])
console.log(groceryListFlattened)

// why would we want to use spread????
groceryListFlattened.push(...proteins);
console.log(groceryListFlattened)