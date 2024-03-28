import React from 'react';

function ReusableInputComponent({ items, placeholderPrefix, handleItemChange, addButtonLabel, removeButtonLabel }) {
  const addItem = () => {
    if (items.length < 6) {
      handleItemChange([...items, `Example: ${placeholderPrefix} ${items.length + 1}`]);
    }
  };

  const removeItem = () => {
    if (items.length > 1) {
      const updatedItems = [...items];
      updatedItems.pop();
      handleItemChange(updatedItems);
    }
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <input
            type="text"
            value={item}
            placeholder={`${placeholderPrefix} ${index + 1}`}
            onChange={(e) => handleItemChange(index, e.target.value)}
            required
          />
        </div>
      ))}
      <button onClick={addItem}>{addButtonLabel}</button>
      <button onClick={removeItem}>{removeButtonLabel}</button>
    </div>
  );
}

export default ReusableInputComponent;
