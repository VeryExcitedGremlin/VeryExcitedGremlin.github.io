// Object spread
const baseUser = { name: "Alex", age: 25 };
const permissions = { canEdit: true, canDelete: false };
const preferences = { theme: "light", language: "es" };

const completeUser = {
    ...baseUser,
    ...permissions,
    ...preferences,
    newProperty: 123 // you can even add on a new property at the end
}
console.log(completeUser)

// what would you do to manually do this without spread? Fill out below