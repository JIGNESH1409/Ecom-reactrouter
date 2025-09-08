import { NavLink } from "react-router-dom";


export const Header = () => {
  const getNavLinkStyle = ({ isActive },colour) => {
        return{
            color :isActive ? colour : "black",
        }

  }

  return (
    <>
      <header className="section-navbar">
        <section className="top_txt">
          <div className="head container">
            <div className="head_txt">
              <p>Get a movie in rent if you want</p>
            </div>
            <div className="sing_in_up">
              <NavLink to="# ">SIGN IN</NavLink>
              <NavLink to="# ">SIGN UP</NavLink>
            </div>
          </div>
        </section>

        <div className="container">
          <div className=  "navbar-brand">
            <NavLink to="index" className="logo" style={getNavLinkStyle}>
              <p>JigneshFlix</p>
            </NavLink>
          </div>

          <nav className="navbar">
            <ul>
              <li className="nav-item">
                <NavLink style={({isActive})=> getNavLinkStyle({isActive},"blue")}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  style={({isActive})=> getNavLinkStyle({isActive},"green")}
                >
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                to="/Movies"
                style={({isActive})=> getNavLinkStyle({isActive},"red")}
                
                >
                  movies

                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  style={({isActive})=> getNavLinkStyle({isActive},"orange")}
                
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};