import Proptypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Point.module.css";

function Point({background_image_original, medium_cover_image, url, title_long, rating, runtime, genres, download_count})
{
    return (
        <div>
            <img className={styles.bg} src={background_image_original} />
            <div className={styles.show}>
                <img className={styles.img} src={medium_cover_image} />
                <div className={styles.textbox}>
                    <h1 className={styles.title}><a href={url} target="_blank">{title_long}</a></h1>
                    <ul>
                        <li className={styles.clr}>Rating {rating}</li>
                        <li className={styles.clr}>Runtime {runtime}</li>
                        <li className={styles.clr}>Download {download_count}</li>
                        <li className={styles.clr}>
                            Genres
                            <ul>
                                {genres.map(genre => <li>{genre}</li>)}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Point;