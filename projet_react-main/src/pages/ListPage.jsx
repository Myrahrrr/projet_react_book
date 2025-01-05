import React, { useState, useEffect } from 'react';

function ListPage({ onNavigateDetail }) {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');

  // Récupère les livres depuis l'API Google Books
  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${search || 'programming'}`)
      .then((response) => response.json())
      .then((data) => setBooks(data.items || []))
      .catch((error) => console.error('Erreur lors de la récupération des livres :', error));
  }, [search]);

  return (
    <div>
      <h1>Liste des Livres</h1>
      <input
        type="text"
        placeholder="Rechercher un livre"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '10px', marginBottom: '20px', width: '300px' }}
      />
      <ul>
        {books.map((book) => (
          <li
            key={book.id}
            onClick={() => onNavigateDetail(book)} // Passe l'objet complet du livre au parent
            style={{ cursor: 'pointer', marginBottom: '10px', display: 'flex', alignItems: 'center' }}
          >
            <img
              src={book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/50'}
              alt={book.volumeInfo.title}
              style={{ width: '50px', marginRight: '10px' }}
            />
            {book.volumeInfo.title} - {book.volumeInfo.authors?.join(', ') || 'Auteur inconnu'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListPage;
