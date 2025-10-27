export default function DeleteButton({ onDelete, itemName }) {
  const handleClick = () => {
    if (confirm(`Are you sure you want to delete ${itemName}?`)) {
      onDelete(); // Call the function passed from parent
    }
  };

  return <button onClick={handleClick}>Delete {itemName}</button>;
}
