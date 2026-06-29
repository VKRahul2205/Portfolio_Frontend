import "../styles/Skill1.css";

function Skill1() {
  const skills = [
    { name: "Java", level: 90 },
    { name: "Python", level: 70 },
    { name: "Spring Boot", level: 88 },
    { name: "MySQL", level: 85 },
    { name: "AWS", level: 75 },
    
  ];

  return (
    <section className="skill-section">
      <h2>Programming Skills</h2>

      <div className="skill-container">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <h3>{skill.name}</h3>

            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill1;