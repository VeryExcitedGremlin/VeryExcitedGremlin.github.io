let dayOfWeek = 3;
let dayName;

switch (dayOfWeek) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  default:
    dayName = "Weekend!";
}

console.log(`Today is ${dayName}`);

// Real-world example: User role permissions
let userRole = "admin";

switch (userRole) {
  case "admin":
    console.log("Full system access");
    break;
  case "moderator":
    console.log("Content management access");
    break;
  case "user":
    console.log("Basic access");
    break;
  default:
    console.log("Guest access only");
}
