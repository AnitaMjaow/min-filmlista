// MovieList.js
import React from 'react';
import '../custom-style.css';

function MovieList({ movies, removeMovie }) {
	return (
		<ul className="movie-list">
			{movies.map((movie, index) => (
				<li key={index} className="movie-item">
					<div className="movie-title">{movie.title}</div>
					<div>{getStars(movie.grade)}</div>
					<button onClick={() => removeMovie(movie.title)}>Delete</button>
				</li>
			))}
		</ul>
	);
}

function getStars(rating) {
	let stars = '';
	for (let i = 0; i < rating; i++) {
		stars += '⭐';
	}
	return stars;
}

export default MovieList;
