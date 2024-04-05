import React from "react";
import "./Movie.css";

const Movie = (props) => {
    return (
        <div className="movie">
            <img src=( 'https://image.tmbd.org/t/p/u-3000/'{poster}) alt="title" />
            <h3 className="title">{title}</h3>
            <p className="year">{year}</p>
            <p className="genre">{genre}</p>
        </div>
    );
};

export default Movie;