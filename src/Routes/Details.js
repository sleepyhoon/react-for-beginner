import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../Components/Movie";
function Details(){
    const {id} = useParams();
    const [loading,setLoading] = useState(true);
    const [movies,setMovies] = useState([]);
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
        console.log(json);
        setMovies(json.data.movies);
        setLoading(false); 
    }
    useEffect(()=>{
        getMovie();
    },[])
    return <div>
    {loading ? <strong>Loading....</strong> : 
    <div>
      {console.log(movies)};
    </div>}
  </div>;
}
export default Details;