import './App.css';
import MovieList from './MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image src="tastyTVLogo2.JPG" className="mainlogo" alt="logo" fluid />
      </header>
      <h1 className="welcomeMessage">
        Welcome to your personal movie list
      </h1>
      <p>Add movies to your own personal list.
      </p>
      <MovieList />
      <footer className="footer">Copyright TastyTV {new Date().getFullYear()}</footer>
    </div>

  );
}

export default App;
