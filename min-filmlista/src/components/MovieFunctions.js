// MovieFunctions.js
function saveMovies(movies) {
	localStorage.setItem("movies", JSON.stringify(movies));
}

function loadMovies() {
	const storedMovies = JSON.parse(localStorage.getItem("movies")) || [];
	if (storedMovies.length === 0) {
		return [
			{ title: "Star Wars", grade: 5 },
			{ title: "Titanic", grade: 4 },
			{ title: "Drive", grade: 1 }
		];
	} else {
		return storedMovies;
	}
}

function removeMovie(movies, title, setMovies) {
	const updatedMovies = movies.filter(movie => movie.title !== title);
	saveMovies(updatedMovies);
	setMovies(updatedMovies);
}

function handleSortAlphabetical(movies, setMovies) {
	const sortedMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title));
	saveMovies(sortedMovies);
	setMovies(sortedMovies);
}

function handleSortByGrade(movies, setMovies) {
	const sortedMovies = [...movies].sort((a, b) => b.grade - a.grade);
	saveMovies(sortedMovies);
	setMovies(sortedMovies);
}

export { saveMovies, loadMovies, removeMovie, handleSortAlphabetical, handleSortByGrade };
