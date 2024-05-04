import React from 'react';
import "./genre.css"

const GenreFilter = ({ genres }) => {
  const handleGenreClick = (genre) => {
    console.log(`Selected genre: ${genre}`);
  };

  return (
    <div className='genre'>
        <h2>Filter by Genre</h2>
      {genres.map((genre, index) => (
        <button key={index} onClick={() => handleGenreClick(genre)}>
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;
