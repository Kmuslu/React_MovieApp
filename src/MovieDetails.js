import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { StyledMovieImage } from "./components/Card/Card.style";


const movieDetailBaseUrl = "https://api.themoviedb.org/3/movie/";
const apiKey = "7fc8d00ab1302c6aa7da237d2810116e"; //temporary
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState();
  const { id } = useParams();

  const wrapper = {
    marginTop: 50,
    marginBottom: 200,
    marginLeft: 500,
    marginRight:500,
    borderColor: "black",
    backgroundColor: "#d1c4e9",
  };

    const container = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "",
      // alignItem: "center",
      margin: 30,
    };

    const title = {
      justifyContent: "center",
      alignText: "center",
    };
   const box ={
       display:"flex",
       flexDirection:"row",

   }

   const imgContainer={
    border: "1px black solid",
    height: "300px",
   }


  useEffect(() => {
    axios
      .get(movieDetailBaseUrl + id, {
        params: {
          api_key: apiKey,
        },
      })
      .then((res) => setMovieDetails(res?.data))
      .catch()
      .finally();
  }, [id]);

  return (
    <div style={wrapper}>
      <div style={container}>
        <h1 style={title}>{movieDetails?.original_title}</h1>
        <div style={box}>
          <div style ={imgContainer}>
            <img style={{width:"auto", height: "100%", }}
              src={baseImageUrl + movieDetails?.poster_path}
              alt={"Movie Poster"}
            />
          </div>
          <div>
            <p>Rate: {movieDetails?.vote_average}</p>
            <p>Genre: {movieDetails?.genres[0].name}</p>
            <p>Year: {movieDetails?.release_date.slice(0,4)}</p>
            <p>Overview: {movieDetails?.overview}</p>
          </div>
        </div>
      </div>
    </div>
    // <div style={wrapper}>
    //   <div style={item1}><h1 style={title}>{movieDetails?.original_title}</h1></div>
    //   <div style={item2}> <img style={{ width: "auto", height: "100%", }}
    //     src={baseImageUrl + movieDetails?.poster_path}
    //     alt={"Movie Poster"} />
    //   </div>
    //     <div style={item3}><p>Rate: {movieDetails?.vote_average}</p></div>
    //     <div style={item4}><p>Genre: {movieDetails?.genres[0].name}</p></div>
    //     <div style={item5}><p>Year: {movieDetails?.release_date.slice(0,4)}</p> </div>
    //     <div style={item6}> <p>Overview: {movieDetails?.overview}</p></div>

    //   </div>
  );
}
