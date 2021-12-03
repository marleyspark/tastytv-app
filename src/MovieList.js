import { useState, useEffect } from 'react'
import Movie from './Movie'
import Button from "react-bootstrap/Button"

function MovieList() {
    const [movie, setMovie] = useState([])
    const [value, setValue] = useState("")
    const [value2, setValue2] = useState("")
    const [suggestion, setSuggestion] = useState([])

    function addName(event) {
        setValue(event.target.value)
    }

    function addYear(event) {
        setValue2(event.target.value)
    }

    function addMovie(event) {
        event.preventDefault()
        setMovie([...movie, { name: value, year: value2, done: false }])
    }
    function completeMovie(name) {
        const newMovie = movie.map((movie) => {
            if (movie.name === name
            ) {
                return { ...movie, done: true }
            }
            return movie
        })
        setMovie(newMovie)
    }

    function removeMovie(name) {
        const remove = movie.filter((movie) => {
            if (movie.name === name) {
                return false
            }
            return true
        })
        setMovie(remove)
    }

    function removeWatched(name) {
        const watched = movie.filter((movie) => {
            if (movie.done === true) {
                return false
            }
            return true
        })
        setMovie(watched)
    }

    function removeMovieAll(name) {
        const removeAll = movie.filter((movie) => {
            if (movie !== name) {
                return false
            }
            return true
        })
        setMovie(removeAll)
    }

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch('https://hub.dummyapis.com/vj/wzGUkpZ')
                const data = await response.json()
                setSuggestion(data[0])
            } catch {

            }
        }
        getData()
    }, []);

    function refreshPage() {
        window.location.reload();
    }

    useEffect(() => {
        document.title = "TastyTV - Movie List"
        localStorage.setItem("movie", JSON.stringify(movie))
    }, [movie])

    function addsSuggestion(event) {
        event.preventDefault()
        setMovie([...movie, { name: suggestion.name, year: suggestion.releasedOn, done: false }])
    }

    function yesNoAll() {
        const confirm = window.confirm("Do you want to remove all your movies?"); if (confirm === true) { removeMovieAll() }
    }

    function yesNoWatched() {
        const confirm = window.confirm("Do you want to remove all your watched movies?"); if (confirm === true) { removeWatched() }
    }

    function yesNoDelete() {
        const confirm = window.confirm("Do you want to remove this?"); if (confirm === true) { removeMovie() }
    }


    return (
        <section className="allMovieDetails">

            <div className="addMovieForm">
                <form>
                    <input onChange={addName} placeholder="Add Movie" />
                    <input onChange={addYear} placeholder="Add year" />
                    <br />
                    <Button className="submit" variant="success" size='lg' type="submit" onClick={addMovie}>Add Movie</Button>
                </form>
                <Button className="DeleteAll" variant="danger" size='lg' onClick={() => yesNoAll()}>Delete all</Button>
                <Button className="removeWatched" variant="danger" size='lg' onClick={() => yesNoWatched()}>Delete Watched</Button>
            </div>
            <div className="suggestion2">
                <h3>Check out some of our suggestions</h3>
                <p>You can add this to your list!</p>
                <h3>{suggestion.name}</h3>
                <h4>{suggestion.releasedOn}</h4>
                <Button variant="outline-success" onClick={addsSuggestion}>Add to my list!</Button>
                <Button variant="outline-info" onClick={refreshPage}>Get new Suggestion</Button>
            </div>
            <div className="movieList">{movie.map((movie, index) =>
                <Movie key={`movie-${index}`} movie={movie} completeMovie={completeMovie} removeMovie={removeMovie} removeWatched={removeWatched} removeMovieAll={removeMovieAll} yesNoDelete={yesNoDelete} />
            )}
            </div>

        </section>
    )
}

export default MovieList