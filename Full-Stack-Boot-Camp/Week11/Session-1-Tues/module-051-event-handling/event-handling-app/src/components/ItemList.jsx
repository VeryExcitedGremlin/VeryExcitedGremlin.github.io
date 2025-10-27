import { useState } from "react";
import DeleteButton from "./DeleteButton";

export default function ItemList() {
  const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);

  const handleDeleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  //   we will go over keys on another module
  return (
    <div>
      {items.map((item, index) => (
        <div key={item}>
          <span>{item}</span>
          <DeleteButton
            itemName={item}
            onDelete={() => handleDeleteItem(index)}
          />
        </div>
      ))}
    </div>
  );
}
