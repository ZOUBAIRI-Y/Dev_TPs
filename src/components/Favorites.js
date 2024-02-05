import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
export default function Favorites() {
    const Favs = useSelector((state) => state.tvshow);
    const dispatch = useDispatch()
    const deleteTvshow = () => {
        dispatch({
            type: "deleteTVshow",
            playload: Favs
        })
    }
   
    return <>
        {/* <div className="container">
            <img src={Favs.Poster} width="200" />
            <h1>{Favs.Title}</h1>
        </div> */}
        {Favs && Favs.map(tvshow=> {
            return <div key={tvshow.imdbID} className="container d-flex flex-column align-items-center">
                <img src={tvshow.Poster} width="200" className="rounded" />
                <p className="text-secondary fs-2 fw-bold m-0">{tvshow.Title}</p>
                <button onClick={deleteTvshow} className="btn btn-danger">delete</button>
            </div>
        })}
    </>
}