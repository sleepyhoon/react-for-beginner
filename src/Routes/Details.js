import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../Components/Movie";
import Point from "../Components/Point";
import Loading from "../Components/Loading";

function Details(){
    const {id} = useParams();
    const [loading,setLoading] = useState(true);
    const [datas,setDatas] = useState({});
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
        setDatas(json.data.movie);
        setLoading(false); 
    }
    useEffect(()=>{
        getMovie();
    },[])
    console.log(datas);
    return <div>
    {loading ? <Loading/> : 
    <div>
      <Point
      background_image_original={datas.background_image_original}
      medium_cover_image={datas.medium_cover_image}
      url={datas.url}
      title_long={datas.title_long}
      rating = {datas.rating}
      runtime = {datas.runtime}
      genres={datas.genres}
      download_count={datas.download_count}
      />
    </div>}
  </div>;
}
export default Details;