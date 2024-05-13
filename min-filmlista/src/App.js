import React, { useState } from 'react';
import MovieList from './components/MovieList';
import MovieForm from './components/MovieForm';
import { loadMovies, saveMovies, removeMovie, handleSortAlphabetical, handleSortByGrade } from './components/MovieFunctions';
import './custom-style.css';

function App() {
  return (
    <div className="App">
      <MovieForm />
      <MovieList />
    </div>
  );
}

export default App;
