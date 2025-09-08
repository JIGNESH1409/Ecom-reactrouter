import {useLoaderData} from 'react-router-dom';
import { Card } from '../Components/UI/Card';
import "../Components/UI/card.css";
export const Movies = () => {
  const movies = useLoaderData();
  return <>
<ul className="container grid grid-four--cols">
    {movies.Search.map((curElem)=>{
        return <Card ket={curElem.imdbID}  curElem={curElem}/>
    })}
  </ul>
  
  </>   
}