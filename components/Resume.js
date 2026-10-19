import { experience, education, certifications } from "@/data/content";

export default function Resume() {
  return (
    <section id="resume">
      <div className="w two">
        <div>
          <h2 className="rv">My <span className="ac">Experience</span></h2>
          {experience.map((e) => (
            <div className="it rv" key={e.title + e.date}>
              <small>{e.date}</small>
              <h3>{e.title}</h3>
              <b>{e.org}</b>
              <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          ))}
        </div>
        <div>
          <h2 className="rv">My <span className="ac">Education</span></h2>
          {education.map((e) => (
            <div className="it rv" key={e.title}>
              <small>{e.date}</small>
              <h3>{e.title}</h3>
              <b>{e.org}</b>
            </div>
          ))}
          <h2 className="rv" style={{ marginTop: 56 }}>Certi<span className="ac">fications</span></h2>
          {certifications.map((c) => (
            <div className="it rv" key={c.title + c.org}>
              <h3>{c.title}</h3>
              <b>{c.org}</b>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
