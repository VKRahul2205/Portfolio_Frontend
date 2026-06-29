import "../styles/ProjectDetails.css";
import { useParams, Link } from "react-router-dom";

function ProjectDetails() {
  const { id } = useParams();

  const projects = {
    carpooling: {
      title: "Car Pooling Platform",
      overview:
        "A ride-sharing application built using Java, Spring Boot, React, and PostgreSQL.",
    },
    ecommerce: {
      title: "Online Shopping E-Commerce",
      overview:
        "An online shopping platform with secure authentication and payment integration.",
    },
    healthcare: {
      title: "Healthcare Management System",
      overview:
        "A healthcare application for managing patients, appointments, and medical records.",
    },
  };

  const project = projects[id];

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
  <div className="project-details">
    <div className="project-header">
      <h1>Project: {project.title}</h1>
    </div>

    <div className="project-content">
      <section className="project-section">
        <h2>Project Overview</h2>
        <p>{project.overview}</p>
      </section>

      <Link to="/" className="back-btn">
        ← Back to Portfolio
      </Link>
    </div>
  </div>
);
}

export default ProjectDetails;