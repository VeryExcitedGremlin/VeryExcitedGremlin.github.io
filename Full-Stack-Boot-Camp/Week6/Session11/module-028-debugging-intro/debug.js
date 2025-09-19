console.log("Hello World!");

const PI = 3.14;

for (let i = 1; i <= 10; i++) {
  console.log(i + " hahaha");
}

if (temperature > 90) {
  console.log("Extremely hot!");
} else if (temperature > 80) {
  console.log("Hot");
} else if (temperature > 60) {
  console.log("Comfortable");
} else {
  console.log("Cold");
}

function addWithReturn(x, y) {
  return x + y;
}

addWithReturn(5, 10); // 15

// is essentially the same thing
// 1. let sum -> exists
// 2. addWithReturns is called, we go to line 37
// 3. x gets set to 5
// 4. y gets set to 10
// 5. x + y ran
// 6. x + y becomes 15
// 7. return 15
// 8. let sum = 15

console.log(sum);
