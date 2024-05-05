import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import "../Movies.css";
import AddMovieForm from "../AddMovieForm/AddMovieForm";
import "../../apikey.js";

const Movies = () => {
    const {nama, setnama} = useState("ucup");

    console.log(nama);

    const {datas, setDatas} = useState ({    });
    

    
 const handleClick = () => {
    const movie = {
        title: "Amazing Sapiderman",
        year: 2012,
        poster: "https//picsum.photos/200/300",
        genre: "Action",
    };
    setData ([...datas,movie]);
 };

  const addMovie = (Movie) => {
    setDatas([...datas, movie]);
  };

  useEffect (() => {
    getMovieList().then((result) => {
      setDatas(result);
    });
  })

 return (
    <div>
      <h1>Latest Movies</h1>
      <div className="movies-container">
        {datas.map((data) => {
          return (
            <Movie title={data.title} year={data.year} poster={data.poster} genre={data.genre}/>
          );
        })}
      </div>
    </div>
  );

};