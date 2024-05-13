import React, { useState } from 'react';
import MovieList from './components/MovieList';
import MovieForm from './components/MovieForm';
import { loadMovies, saveMovies, removeMovie, handleSortAlphabetical, handleSortByGrade } from './components/MovieFunctions';
import './custom-style.css';

function App() {
  const [movies, setMovies] = useState(loadMovies());

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const grade = parseInt(e.target.grade.value);
    if (!title || !grade) {
      alert("Please give the movie both a title and a rating =)");
      return;
    }
    const newMovie = { title, grade };
    const updatedMovies = [...movies, newMovie];
    saveMovies(updatedMovies);
    setMovies(updatedMovies);
    e.target.reset();
  };

  return (
    <div className="App">
      <div className="container d-flex justify-content-center">
        <div classname="row">
          <div className="col my-5">
            <MovieForm handleSubmit={handleSubmit} />
          </div>
          <div className="col my-5">
            <MovieList movies={movies} removeMovie={(title) => removeMovie(movies, title, setMovies)} />
          </div>
          <div class="col d-flex justify-content-center mr-5">
            <div classname="col">
              <button onClick={() => handleSortAlphabetical(movies, setMovies)}>Sort Alphabetically</button>
            </div>
            <div className="col">
              <button onClick={() => handleSortByGrade(movies, setMovies)}>Sort by Grade</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
