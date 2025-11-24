import { useState } from "react";

export default function Part3UpdatingArrays() {
  const [items, setItems] = useState([
    { id: 1, name: "Apple", price: 1.5, quantity: 5 },
    { id: 2, name: "Banana", price: 0.8, quantity: 3 },
    { id: 3, name: "Orange", price: 2.0, quantity: 2 },
  ]);
  const [newItemName, setNewItemName] = useState("");

  //  WRONG WAY - Direct array mutation
  const addItemWrong = () => {
    if (!newItemName.trim()) return;
    console.log(" WRONG: Mutating array directly");

    const newItem = {
      id: Date.now(),
      name: newItemName,
      price: Math.random() * 3 + 1,
      quantity: 1,
    };

    items.push(newItem); // Direct mutation!
    setItems(items); // Same reference, no re-render
  };

  //  RIGHT WAY - Create new array
  const addItemRight = () => {
    if (!newItemName.trim()) return;
    console.log("RIGHT: Creating new array");

    const newItem = {
      id: Date.now(),
      name: newItemName,
      price: Math.random() * 3 + 1,
      quantity: 1,
    };

    setItems((prev) => [...prev, newItem]); // New array created
    setNewItemName("");
  };

  return (
    <div className="step-container">
      <h2> Array Updating</h2>
      <div className="add-item-section">
        <h4>Add New Item</h4>
        <div className="add-controls">
          <input
            type="text"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            placeholder="Item name..."
            className="new-item-input"
          />
          <button
            onClick={addItemWrong}
            className="btn-wrong"
            disabled={!newItemName.trim()}
          >
            Add Wrong Way
          </button>
          <button
            onClick={addItemRight}
            className="btn-right"
            disabled={!newItemName.trim()}
          >
            Add Right Way
          </button>
        </div>
        <p className="add-hint">
          Try both buttons - notice only the right way updates the UI!
        </p>
      </div>
    </div>
  );
}
