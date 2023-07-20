import { useEffect, useState } from "react";
import Movie from "../Components/Movie";

function Home(){
  const [loading,setLoading] = useState(true); // 이 함수가 실행되면 re-rendering
  const [movies,setMovies] = useState([]);
  const getMovies = async() => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
    )
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);  
  }
  useEffect (() =>{
    getMovies();
  }, [])
  return <div>
    {loading ? <strong>Loading....</strong> : 
    <div>
      {movies.map((movie) =>(
        <Movie 
        key = {movie.id} // key는 react.js 에서만 map안에서 component들을 rendering 할때 사용한다.
        id={movie.id}
        coverImg={movie.medium_cover_image}
        title = {movie.title}
        summary={movie.summary}
        genres={movie.genres}
        />
    ))}</div>}
  </div>;
}
export default Home;