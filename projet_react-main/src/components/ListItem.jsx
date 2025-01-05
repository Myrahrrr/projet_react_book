import React from 'react';

function ListItem({ fact, onClick }) {
  return (
    <li
      onClick={onClick}
      style={{
        cursor: 'pointer',
        marginBottom: '10px',
        padding: '10px',
        backgroundColor: '#f9f9f9',
        border: '1px solid #ddd',
        borderRadius: '5px',
      }}
    >
      {fact}
    </li>
  );
}

export default ListItem;
