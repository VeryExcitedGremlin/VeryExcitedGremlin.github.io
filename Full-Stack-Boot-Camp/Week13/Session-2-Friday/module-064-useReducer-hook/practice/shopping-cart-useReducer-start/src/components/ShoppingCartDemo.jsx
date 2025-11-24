import { useReducer } from "react";

const mockProducts = [
  { id: 1, name: "Laptop", price: 999, image: "💻" },
  { id: 2, name: "Phone", price: 699, image: "📱" },
  { id: 3, name: "Book", price: 29, image: "📚" },
];

const initialCartState = {
  items: [],
  total: 0,
  itemCount: 0,
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      // TODO: Implement ADD_ITEM logic
      // The product to add is in action.payload (it has: id, name, price, image)

      // Step 1: Check if the item already exists in the cart
      // HINT: Use state.items.find() to search for an item with the same id
      // const existingItem = state.items.find(item => item.id === action.payload.id);

      // Step 2: If the item already exists, increase its quantity by 1
      // HINT: Use state.items.map() to create a new array
      // If item.id matches action.payload.id, return a new object with quantity + 1
      // Otherwise, return the item unchanged

      // Step 3: If the item is new, add it to the cart with quantity: 1
      // HINT: Create a new array with all existing items plus the new item
      // const newItem = { ...action.payload, quantity: 1 };
      // const updatedItems = [...state.items, newItem];

      // Step 4: Calculate the new total using the calculateTotal helper function
      // HINT: const newTotal = calculateTotal(updatedItems);

      // Step 5: Calculate the new item count using calculateItemCount helper function
      // HINT: const newItemCount = calculateItemCount(updatedItems);

      // Step 6: Return the new state object with updated items, total, and itemCount
      // HINT: return { items: updatedItems, total: newTotal, itemCount: newItemCount };

      return {

      };
    }

    case "REMOVE_ITEM": {
      // TODO: Implement REMOVE_ITEM logic
      // The product ID to remove is in action.payload

      // Step 1: Filter out the item with the matching ID
      // HINT: Use state.items.filter() to keep only items where item.id !== action.payload
      // const updatedItems = state.items.filter(item => item.id !== action.payload);

      // Step 2: Calculate the new total using the calculateTotal helper function
      // HINT: const newTotal = calculateTotal(updatedItems);

      // Step 3: Calculate the new item count using calculateItemCount helper function
      // HINT: const newItemCount = calculateItemCount(updatedItems);

      // Step 4: Return the new state object with updated items, total, and itemCount
      // HINT: return { items: updatedItems, total: newTotal, itemCount: newItemCount };

      return {

      };
    }

    case "CLEAR_CART": {
      return initialCartState;
    }

    default:
      return state;
  }
}

function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function calculateItemCount(items) {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}

const ShoppingCartDemo = () => {
  const [cart, dispatch] = useReducer(cartReducer, initialCartState);

  const addToCart = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_ITEM", payload: productId });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div className="demo-section">
      <div className="demo-header">
        <h2>Shopping Cart with useReducer</h2>
        <p>Complex state management with multiple interdependent values</p>
      </div>

      <div className="demo-content">
        <div className="products-section">
          <h3>Available Products</h3>
          <div className="button-group">
            {mockProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => addToCart(product)}
                className="btn btn-primary"
              >
                {product.image} Add {product.name} (${product.price})
              </button>
            ))}
          </div>
        </div>

        <div className="cart-display">
          <div className="cart-header">
            <h3>Shopping Cart ({cart.itemCount} items)</h3>
            {cart.items.length > 0 && (
              <button onClick={clearCart} className="btn btn-danger btn-small">
                Clear Cart
              </button>
            )}
          </div>

          {cart.items.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty - add some products!</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cart.items.map((item) => (
                  <div key={item.id} className="cart-item">
                    <span className="item-image">{item.image}</span>
                    <div className="item-details">
                      <strong>{item.name}</strong>
                      <span className="quantity">Qty: {item.quantity}</span>
                    </div>
                    <div className="item-total">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="btn btn-danger btn-small"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <div className="total-display">
                  <strong>Total: ${cart.total.toFixed(2)}</strong>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="state-display">
          <h3>Cart State:</h3>
          <pre className="state-json">{JSON.stringify(cart, null, 2)}</pre>
        </div>
      </div>

      <div className="demo-explanation">
        <h3>Simplified useReducer Benefits:</h3>
        <ul>
          <li>
            <strong>Centralized State:</strong> All cart state managed in one place
          </li>
          <li>
            <strong>Automatic Calculations:</strong> Total and item count updated automatically
          </li>
          <li>
            <strong>Simple Actions:</strong> Just ADD_ITEM, REMOVE_ITEM, and CLEAR_CART
          </li>
          <li>
            <strong>Predictable Updates:</strong> State changes only through dispatched actions
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShoppingCartDemo;
