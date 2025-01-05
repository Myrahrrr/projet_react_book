import React from 'react';

function HomePage({ onNavigate }) {
  return (
    <div>
      <h1>Bienvenue dans l'application de gestion de livres</h1>
      <button onClick={onNavigate} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Voir les livres
      </button>
    </div>
  );
}

export default HomePage;
