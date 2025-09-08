import { FaFilm, FaUsers, FaHeart, FaLightbulb, FaHandshake } from "react-icons/fa";

export const About = () => {
  const styles = {
    aboutMain: {
      width: "100vw",
      minHeight: "100vh",
      margin: "0",
      padding: "0",
      position: "relative",
      overflowX: "hidden",
      background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
      color: "#fff",
    },
    aboutHero: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "rgba(255, 255, 255, 0.95)",
      padding: "5rem 5vw 4rem 5vw",
      borderRadius: "40px",
      boxShadow: "0 12px 48px rgba(80, 120, 180, 0.15)",
      margin: "4rem auto 3rem auto",
      flexWrap: "wrap",
      position: "relative",
      overflow: "hidden",
      color: "#1e1f23",
    },
    aboutHeroContent: {
      flex: "1 1 400px",
      paddingRight: "3rem",
      zIndex: 1,
    },
    aboutHeroTitle: {
      fontSize: "3.6rem",
      fontWeight: "900",
      color: "#232f3e",
      marginBottom: "1.5rem",
    },
    aboutHeroDesc: {
      fontSize: "1.5rem",
      color: "#37475a",
      marginBottom: "2rem",
      lineHeight: 1.7,
    },
    aboutHeroImage: {
        maxWidth: "400px",
        borderRadius: "32px",
        boxShadow: "0 8px 32px rgba(80, 120, 180, 0.18)",
        transition: "transform 0.2s",
        marginLeft: "2rem",
    },
    aboutSection: {
        background: "rgba(255, 255, 255, 0.97)",
        width: "90vw",
        margin: "2.5rem auto",
        padding: "3rem 5vw",
        borderRadius: "32px",
        boxShadow: "0 4px 24px rgba(80, 120, 180, 0.10)",
        color: '#1e1f23'
    },
    sectionTitle: {
        fontSize: "2.6rem",
        color: "#232f3e",
        marginBottom: "1.2rem",
        fontWeight: "800",
    },
    sectionText: {
        fontSize: "1.25rem",
        color: "#37475a",
        marginBottom: "1rem",
        lineHeight: 1.7,
    },
    valuesGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1.5rem",
        padding: "0",
        marginTop: "2rem",
        listStyle: 'none'
    },
    valueItem: {
        background: "#ffffff",
        borderRadius: "16px",
        padding: "1.5rem",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        display: "flex",
        alignItems: "flex-start",
        gap: "1rem",
        color: "#37475a",
    },
    valueIcon: {
        fontSize: "1.8rem",
        flexShrink: 0,
        color: "#535bf2",
    },
    aboutBtn: {
        display: "inline-block",
        marginTop: "2rem",
        padding: "1rem 2rem",
        background: "linear-gradient(135deg, #535bf2, #2980b9)",
        color: "white",
        border: "none",
        borderRadius: "30px",
        fontSize: "1.4rem",
        fontWeight: "600",
        cursor: "pointer",
    }
  };

  return (
    <main style={styles.aboutMain}>
      <section style={styles.aboutHero}>
        <div style={styles.aboutHeroContent}>
          <h1 style={styles.aboutHeroTitle}>
            <FaFilm style={{ marginRight: "10px", color: "#535bf2" }} />
            About JigneshFlix
          </h1>
          <p style={styles.aboutHeroDesc}>
            JigneshFlix is your gateway to the world of movies and entertainment.
            We bring together the latest releases, timeless classics, and community-driven recommendations—all in one place.
          </p>
        </div>
        <div>
          <img
            style={styles.aboutHeroImage}
            src="https://i.postimg.cc/Nj9dgJ98/cards.png"
            alt="JigneshFlix"
          />
        </div>
      </section>

      <section style={styles.aboutSection}>
        <h2 style={styles.sectionTitle}>
          <FaLightbulb style={{ marginRight: "8px", color: "#f39c12" }} />
          Our Mission
        </h2>
        <p style={styles.sectionText}>
          To inspire and connect movie lovers everywhere by providing a platform
          that celebrates storytelling, creativity, and the shared experience of cinema.
        </p>
      </section>

      <section style={styles.aboutSection}>
        <h2 style={styles.sectionTitle}>
          <FaHandshake style={{ marginRight: "8px", color: "#27ae60" }} />
          Our Values
        </h2>
        <ul style={styles.valuesGrid}>
          <li style={styles.valueItem}>
            <FaLightbulb style={styles.valueIcon} />
            <strong>Innovation:</strong> We embrace new ideas and technologies to enhance your viewing experience.
          </li>
          <li style={styles.valueItem}>
            <FaUsers style={styles.valueIcon} />
            <strong>Community:</strong> We foster a welcoming space for all movie fans to share, discuss, and discover.
          </li>
          <li style={styles.valueItem}>
            <FaHandshake style={styles.valueIcon} />
            <strong>Integrity:</strong> We are committed to honest reviews, transparent information, and respect for creators.
          </li>
          <li style={styles.valueItem}>
            <FaHeart style={styles.valueIcon} />
            <strong>Passion:</strong> We love movies—and we want you to love them too!
          </li>
        </ul>
      </section>

      <section style={styles.aboutSection}>
        <h2 style={styles.sectionTitle}>
          <FaUsers style={{ marginRight: "8px", color: "#2980b9" }} />
          Join Us
        </h2>
        <p style={styles.sectionText}>
          Whether you’re a casual viewer or a film aficionado, JigneshFlix is here for you.
          Explore, connect, and be part of our growing community!
        </p>
        <button style={styles.aboutBtn}>Start Exploring</button>
      </section>
    </main>
  );
};
