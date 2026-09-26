export default function Skills() {
  const skills = [
    "Python",
    "HTML",
    "Supabase",
    "JavaScript",
    "Figma",
    "Next.js",
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        <div className="skills-title">
          <p>MY SKILLS</p>
          <h2>Technologies I Learn.</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <span>0{index + 1}</span>
              <h3>{skill}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}