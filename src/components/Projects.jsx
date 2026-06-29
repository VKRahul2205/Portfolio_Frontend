import { Link } from "react-router-dom";
import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      id: "carpooling",
      image: "/project01.jpg",
      title: "Car Pooling Platform",
      description:
        "A ride-sharing application built using Java, Spring Boot, React, and PostgreSQL.",
    },
    {
      id: "ecommerce",
      image: "/project02.jpg",
      title: "Online Shopping E-Commerce",
      description:
        "An online shopping platform with secure authentication and payment integration.",
    },
    {
      id: "healthcare",
      image: "/project03.png",
      title: "Healthcare Management System",
      description:
        "A healthcare application for managing patients, appointments, and medical records.",
    },
  ];

  return (
    <section className="projects">
      <h2 className="project-heading">Projects</h2>

      <div className="project-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <Link to={`/projects/${project.id}`} className="know-more-btn">
                Know More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;