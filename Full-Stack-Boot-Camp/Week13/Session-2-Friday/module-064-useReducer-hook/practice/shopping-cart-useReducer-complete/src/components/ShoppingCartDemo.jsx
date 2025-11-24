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
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        return {
          ...state,
          items: updatedItems,
          total: calculateTotal(updatedItems),
          itemCount: calculateItemCount(updatedItems),
        };
      }

      const newItems = [...state.items, { ...action.payload, quantity: 1 }];

      return {
        ...state,
        items: newItems,
        total: calculateTotal(newItems),
        itemCount: calculateItemCount(newItems),
      };
    }

    case "REMOVE_ITEM": {
      const newItems = state.items.filter((item) => item.id !== action.payload);

      return {
        ...state,
        items: newItems,
        total: calculateTotal(newItems),
        itemCount: calculateItemCount(newItems),
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
