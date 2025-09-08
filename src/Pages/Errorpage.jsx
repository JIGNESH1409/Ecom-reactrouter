import { NavLink, useRouteError } from "react-router-dom";
import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
export const Errorpage = () => {
    const error=useRouteError();
    const[ishover,sethover]=useState(false);
    const navigate=useNavigate();
    

    if(error.status===404){
        return( 
        <section>
         <div>
            <figure style={{alignItems:"center",display:"flex",flexDirection:"column"}}>
<img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="404 Error" />            
</figure>

            <div style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                gap:"40px",
                fontSize: "2rem",
                fontWeight: "bold",
                fontFamily: "Arial, Helvetica, sans-serif"
            }}>
                <p style={{marginTop:"10px",gap:"40px",}}>the page you are looking for might have been removed had its name changed or is temporarily unavailable</p>
                <button  style={{
    backgroundColor: ishover?"white":"red",
    padding: "10px 20px",
    color: ishover?"black":"white",
    borderRadius: "5px",
    textDecoration: "none",
    cursor: "pointer"
  }}
  onMouseEnter={() => sethover(true)}
  onMouseLeave={() => sethover(false)}    
  onClick={()=>navigate(-1)}
        >GO BACK
        </button>
            </div>
    
        </div>   

        </section>
    );
    }

    return <div>Something went wrong.</div>;
}