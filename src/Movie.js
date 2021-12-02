import Button from "react-bootstrap/Button"

function Movie(props) {
    return (
        <div className="movieDetails">
            <h2 className="movieName" style={{ color: props.movie.done ? "green" : "red" }}>
                {props.movie.name}
            </h2>
            <h3 className="movieDate">{props.movie.year}</h3>
            <Button className="watched" variant="success" size='sm' onClick={() => props.completeMovie(props.movie.name)}>Watched</Button>
            <Button variant="danger" size='sm' onClick={() => props.removeMovie(props.movie.name)}>Delete</Button>

        </div>
    )
}

export default Movie
