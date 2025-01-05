import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Page actuelle
  const [selectedBook, setSelectedBook] = useState(null); // Livre sélectionné

  const renderPage = () => {
    if (currentPage === 'home') {
      return <HomePage onNavigate={() => setCurrentPage('list')} />;
    } else if (currentPage === 'list') {
      return (
        <ListPage
          onNavigateDetail={(book) => {
            setSelectedBook(book); // Enregistre le livre sélectionné
            setCurrentPage('detail');
          }}
        />
      );
    } else if (currentPage === 'detail') {
      return (
        <DetailPage
          book={selectedBook} // Passe les détails du livre sélectionné
          onNavigateBack={() => setCurrentPage('list')}
        />
      );
    }
  };

  return <div>{renderPage()}</div>;
}

export default App;
