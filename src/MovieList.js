import { useState, useEffect } from 'react'
import Movie from './Movie'


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
                console.log(data)
            } catch {

            }
        }
        getData()
    }, []);

    function refreshPage() {
        window.location.reload();
        // document.querySelector("suggestion2").contentWindow.location.reload(true);
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
        <section>
            <div className="movieList">{movie.map((movie, index) =>
                <Movie key={`movie-${index}`} movie={movie} completeMovie={completeMovie} removeMovie={removeMovie} removeWatched={removeWatched} removeMovieAll={removeMovieAll} yesNoDelete={yesNoDelete} />
            )}
            </div>
            <div className="addMovieForm">
                <form>
                    <input onChange={addName} placeholder="Add Movie" />
                    <input onChange={addYear} placeholder="Add year" />
                    <br />
                    <button className="submit" type="submit" onClick={addMovie}>Add Movie</button>
                </form>
                <button className="DeleteAll" onClick={() => yesNoAll()}>Delete all</button>
                <button className="removeWatched" onClick={() => yesNoWatched()}>Delete Watched</button>
            </div>
            <div className="suggestion2">
                <h3>Check out some of our suggestions</h3>
                <h3>{suggestion.name}</h3>
                <h4>{suggestion.releasedOn}</h4>
                <button onClick={addsSuggestion}>Add to my list!</button>
                <button onClick={refreshPage}>Get new Suggestion</button>
            </div>
        </section>
    )
}

export default MovieList