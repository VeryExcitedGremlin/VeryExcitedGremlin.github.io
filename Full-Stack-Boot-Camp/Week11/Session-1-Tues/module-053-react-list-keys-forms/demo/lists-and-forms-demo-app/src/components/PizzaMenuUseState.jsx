import { useState } from "react";
export default function PizzaMenuUseState() {
  // initial pizzas would typically be loaded via API call
  let initialPizzas = [
    { id: 1, name: "Pepperoni Paradise", spicy: true },
    { id: 2, name: "Veggie Supreme", spicy: false },
    { id: 3, name: "Hawaiian Controversy", spicy: false },
    { id: 4, name: "Meat Lovers Madness", spicy: true },
  ];

  //   handling our state properly here
  const [pizzas, setPizzas] = useState(initialPizzas);

  const deletePizza = (id) => {
    setPizzas(pizzas.filter((pizza) => pizza.id !== id));
  };

  //   map is used to go over each one of the array items
  //   we are getting back pizza objects and looking at their properties and using them
  //.  pizza.name is displayed
  //   pizza.spicy is used for conditional rendering of the emojis

  return (
    <ul>
      {pizzas.map((pizza) => (
        // make sure to have key on the top level element
        // more than just a list item (like buttons etc)
        // you can do this on a div, the li itself, or on a fragment
        // <React.Fragment key={item.id}> (longhand for the <></> fragment)
        // notice how PizzaMenu in the console has the
        // "Each child in a list should have a unique "key" prop."
        // error and this one does not

        <div key={pizza.id}>
          <li>
            {pizza.name} {pizza.spicy ? "🌶️" : "🧀"}
          </li>
          <button
            key={pizza.id}
            onClick={() => {
              deletePizza(pizza.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </ul>
  );
}
