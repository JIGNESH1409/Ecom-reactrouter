
import { FaFilm, FaUsers, FaHeart, FaLightbulb, FaHandshake } from "react-icons/fa";

export const About = () => {
  return (
    <main className="about-amazon-main">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-hero-title">
            <FaFilm style={{ marginRight: "10px", color: "#535bf2" }} />
            About JigneshFlix
          </h1>
          <p className="about-hero-desc">
            JigneshFlix is your gateway to the world of movies and entertainment. 
            We bring together the latest releases, timeless classics, and community-driven recommendations—all in one place.
          </p>
        </div>
        <div className="about-hero-image">
          <img
            src="https://i.postimg.cc/Nj9dgJ98/cards.png"
            alt="JigneshFlix"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission fade-in">
        <h2>
          <FaLightbulb style={{ marginRight: "8px", color: "#f39c12" }} />
          Our Mission
        </h2>
        <p>
          To inspire and connect movie lovers everywhere by providing a platform 
          that celebrates storytelling, creativity, and the shared experience of cinema.
        </p>
      </section>

      {/* Values Section */}
      <section className="about-values fade-in">
        <h2>
          <FaHandshake style={{ marginRight: "8px", color: "#27ae60" }} />
          Our Values
        </h2>
        <ul className="values-grid">
          <li>
            <FaLightbulb className="value-icon" /> 
            <strong>Innovation:</strong> We embrace new ideas and technologies to enhance your viewing experience.
          </li>
          <li>
            <FaUsers className="value-icon" /> 
            <strong>Community:</strong> We foster a welcoming space for all movie fans to share, discuss, and discover.
          </li>
          <li>
            <FaHandshake className="value-icon" /> 
            <strong>Integrity:</strong> We are committed to honest reviews, transparent information, and respect for creators.
          </li>
          <li>
            <FaHeart className="value-icon" /> 
            <strong>Passion:</strong> We love movies—and we want you to love them too!
          </li>
        </ul>
      </section>

      {/* Join Us Section */}
      <section className="about-join fade-in">
        <h2>
          <FaUsers style={{ marginRight: "8px", color: "#2980b9" }} />
          Join Us
        </h2>
        <p>
          Whether you’re a casual viewer or a film aficionado, JigneshFlix is here for you. 
          Explore, connect, and be part of our growing community!
        </p>
        <button className="about-btn">Start Exploring</button>
      </section>
    </main>
  );
};
