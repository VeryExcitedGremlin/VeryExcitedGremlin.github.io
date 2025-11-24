const userProfile = {
  preferences: {
    theme: "dark",
    notifications: true,
  },
  profileId: 123,
  anotherProperty: "reallyImportant",
};

// userprofile gets copied
const userProfileCopyReference = userProfile;

userProfile.preferences.theme = "light";
console.log("userProfile", userProfile);
console.log("userProfileCopyReference", userProfileCopyReference);

// create a shallow spread copy
// shallow copy only give you new references for primitives

const userProfileShallowSpreadCopy = { ...userProfile };
userProfile.preferences.theme = "dark";
userProfileShallowSpreadCopy.profileId = 234;

// what will all 3 look like?

console.log("userProfile", userProfile);
console.log("userProfileCopyReference", userProfileCopyReference);
console.log("userProfileShallowSpreadCopy ", userProfileShallowSpreadCopy);

// why are all of the theme's still set to dark here on userProfileShallowSpreadCopy ?

// how to fix this?

// Spread out each level

const userProfileSpreadProperties = {
  ...userProfile, // same as before but....
  preferences: { ...userProfile.preferences }, //overwrite our preferences and spread out that object
};

userProfileSpreadProperties.preferences.theme = "random";
console.log("userProfile", userProfile);
console.log("userProfileSpreadProperties", userProfileSpreadProperties);

// more complex example

const complexProfile = {
  personal: {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  },
  preferences: {
    theme: "dark",
    notifications: true,
    language: "en",
  },
  settings: {
    privacy: "public",
    newsletter: false,
  },
  profileId: 123,
  anotherProperty: "This is another primitive",
};

// How can you do a deep copy with this object?
const personal = complexProfile.personal;

const complexProfileDeepCopy = {
  ...complexProfile,
  personal: { ...personal }, // commonly see it like this
  preferences: { ...complexProfile.preferences },
  settings: { ...complexProfile["settings"] }, //bracket notation
};

// destructure

// const {personal, preferences, settings} = complexProfile;

// const complexProfileDeepCopyDestructure = {
//   ...complexProfile,
//   personal,
//   preferences,
//   settings,
// };

//deep copy trick
JSON.parse(JSON.stringify(object));
