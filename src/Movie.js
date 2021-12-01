function Movie(props) {
    return (
        <div>
            <h2 style={{ color: props.movie.done ? "green" : "red" }}>
                {props.movie.name}
            </h2>
            <h3>{props.movie.year}</h3>
            <button onClick={() => props.completeMovie(props.movie.name)}>Watched</button>
            <button onClick={() => props.removeMovie(props.movie.name)}>Delete</button>
        </div>
    )
}

export default Movie
