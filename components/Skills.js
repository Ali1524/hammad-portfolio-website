import { skills } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="alt">
      <div className="w">
        <h2 className="rv">My <span className="ac">Skills</span></h2>
        <p className="sub rv">Tools and strengths I use every day.</p>
        <div className="sk rv">
          {skills.map((s) => (
            <div key={s.name}>
              {s.name}<span>{s.level}%</span>
              <div className="bar"><i data-w={s.level}></i></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
