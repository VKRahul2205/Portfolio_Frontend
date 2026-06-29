import "../styles/Skills.css";

function Skills() {
  const skills = [
    "Java Full Stack",
    "Spring Boot",
    "MySQL",
    "PostgreSQL",
    "AWS",
  ];

  return (
    <section className="skills">
      <h2>Technical Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;