export default function PizzaMenu() {
  // remember this would usually be stored using useState
  // add useState here

  let pizzas = [
    { id: 1, name: "Pepperoni Paradise", spicy: true },
    { id: 2, name: "Veggie Supreme", spicy: false },
    { id: 3, name: "Hawaiian Controversy", spicy: false },
    { id: 4, name: "Meat Lovers Madness", spicy: true },
  ];

  const deletePizza = (id) => {
    // for any pizza that doesn't have this id
    // include it back in our pizza list
    pizza = pizzas.filter((pizza) => pizza.id !== id);
  };

  //   map is used to go over each one of the array items
  //   we are getting back pizza objects and looking at their properties and using them
  //.  pizza.name is displayed
  //   pizza.spicy is used for conditional rendering of the emojis
  return (
    // duplicating the key is an issue
    // and if you have other elements floatinf in the list you will still
    // get the missing key error of "Each child in a list should have a unique "key" prop."
    <ul>
      {pizzas.map((pizza) => (
        <>
          <li key={pizza.id}>
            {pizza.name} {pizza.spicy ? "🌶️" : "🧀"}
          </li>
        </>
      ))}
    </ul>
  );
}
