export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-title">
          <p>MY SKILLS</p>
          <h2>Technologies I Learn.</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={skill}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
