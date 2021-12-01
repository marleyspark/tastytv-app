import './App.css';
import MovieList from './MovieList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TastyTV</h1>

        <img src="https://i.pinimg.com/originals/0a/b9/0e/0ab90e307aaa8fba6a1cfec6b3eb3c9e.jpg" className="mainImg" alt="logo" />
        <p>
          Welcome to your personal movie list
        </p>
        <MovieList />
      </header>

    </div>
  );
}

export default App;
