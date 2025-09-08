import{NavLink} from "react-router-dom"
import "./Card.css"
export const Card=({curElem})=>{
    const{Title,Year,imdbID,Type,Poster}=curElem;
    return<>
    <li key={imdbID} className="hero-container">
        <div className="main-container"> 
            <div className="poster-container">
                <img src={Poster} alt="movie-pic" className="poster"/>
            </div>
        <div className="ticket-container">
          <div className="ticket__content">
            <NavLink to={`/Movies/${imdbID}`}>                 
                <button className="ticket__buy-btn">Watch now</button>
              </NavLink>

              </div>
            </div>
            
        </div>
        

    </li>
    </>
}