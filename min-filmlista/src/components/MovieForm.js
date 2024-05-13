// MovieForm.js
import React from 'react';

function MovieForm({ handleSubmit }) {
	return (
		<form onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="title">Title:</label>
				<input id="title" type="text" name="title" />
			</div>
			<div className="form-group">
				<label htmlFor="grade">Grade:</label>
				<select id="grade" name="grade">
					<option value="" disabled>Select grade here...</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
			</div>
			<button type="submit">Add Movie</button>
		</form>
	);
}

export default MovieForm;
