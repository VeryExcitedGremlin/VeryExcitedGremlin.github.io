// for loops 

// sometimes we want to loop through things

// // Count - to 10
// console.log("1, hahaha");
// console.log("2, hahaha");
// console.log("3, hahaha");
// console.log("4, hahaha");
// console.log("5, hahaha");
// //,,,
// console.log("10, ihahaha");

// example
// for (let i = 0; i < 11; index++) {
//     console.log(i)
// }

// initialize step ;condition ; afterthought

for (let i = 1; i <= 10; i++) {
  console.log(i + " hahaha");
}


// while

let stillAlive = true;

while (stillAlive) {
  // play the game

  console.log("did action 1");
  console.log("got a goomba");
  console.log("collected 50 coins");

  // this happens 50 loops into the game
  console.log("fell into lava");
  stillAlive = false;
}

console.log("game over");