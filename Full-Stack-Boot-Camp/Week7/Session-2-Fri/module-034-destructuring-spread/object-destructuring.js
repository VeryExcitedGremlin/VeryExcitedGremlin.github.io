// Object Destructuring

// unpack properties from an object

const location = {
  city: "Las Vegas",
  state: "Nevada",
  zip: 89111,
};

const { city, state, zip } = location;

console.log(city);
console.log(state);
console.log(zip);

// what happens if we mix up the order?
// because it uses the key, it doesn't get mixed up
// const {state, zip, city}= location

// is equivalent to
// let city = location.city;
// let state = location.state;
// let zip = location.zip;

// Rule of  Thumb
// before an = sign destructuring
// inside of a function declaration
function nameStuff({ city }) {
  //
  console.log(city)
}

nameStuff(location)

// equivalent to 
// function nameStuff(city) {
//   //
//   console.log(city);
// }
//nameStuff(location.city)

// End Object Destructuring