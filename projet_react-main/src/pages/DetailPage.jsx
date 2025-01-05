import React from 'react';

function DetailPage({ book, onNavigateBack }) {
  if (!book) {
    return (
      <div>
        <p>Aucun livre sélectionné.</p>
        <button onClick={onNavigateBack} style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Retour à la liste
        </button>
      </div>
    );
  }

  const { title, authors, description, imageLinks, publisher, publishedDate } = book.volumeInfo;

  return (
    <div>
      <h1>{title}</h1>
      <p><strong>Auteur(s):</strong> {authors?.join(', ') || 'Auteur inconnu'}</p>
      <p><strong>Éditeur:</strong> {publisher || 'Éditeur inconnu'}</p>
      <p><strong>Date de publication:</strong> {publishedDate || 'Date inconnue'}</p>
      <img
        src={imageLinks?.thumbnail || 'https://via.placeholder.com/150'}
        alt={title}
        style={{ width: '150px', margin: '20px 0' }}
      />
      <p><strong>Description:</strong> {description || 'Aucune description disponible.'}</p>
      <button onClick={onNavigateBack} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Retour à la liste
      </button>
    </div>
  );
}

export default DetailPage;
