import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h3>Hello, I'm     </h3>

          <h1>Kyathi Rahul Veeranki</h1>

          <h2>Java Full Stack Developer</h2>

          
          <p>
            I'm a passionate Java Full Stack Developer with a strong foundation in Java, Spring Boot, React, REST APIs, and SQL databases. Through academic projects and research, I've developed scalable web applications and enjoy solving real-world problems with clean and efficient code. I'm eager to contribute, learn, and grow in a professional software development environment.
          </p>

          <div className="hero-buttons">
            <a
              href="/V.K.Rahul_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary"
            >
              View Resume
            </a>

            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src="/Profilephoto.jpg" alt="Kyathi Rahul Veeranki" />
        </div>
      </div>
    </section>
  );
}

export default Hero;