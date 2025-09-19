let importantInfo = "Data I want to see";

// not ideal way to log
// we can identify what this log is if we have multiple
console.log(importantInfo);

// better ways to log
console.log("We can log out values here: ", importantInfo);
console.log(`${importantInfo} was the value we want`);

// // mini testing

console.log("I expect important info to be xyz: it was: ", importantInfo);


// use warn and log to show different colors in the browser

// function openDoor(){

//     if(locked){
//         console.warn("The was locked")
//     }

//     if(doorNotReal){
//         console.error("fake door")
//     }
// }
