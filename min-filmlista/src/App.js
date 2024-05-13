import MovieList from './components/MovieList';
import MovieForm from './components/MovieForm';
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
