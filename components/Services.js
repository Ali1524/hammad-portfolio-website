import { services } from "@/data/content";

export default function Services() {
  return (
    <section id="services">
      <div className="w">
        <h2 className="rv">My Quality <span className="ac">Services</span></h2>
        <p className="sub rv">Words that fit your brand, your audience and your deadline.</p>
        {services.map((s, i) => (
          <a className="sv rv" href="#contact" key={s.title}>
            <em>{String(i + 1).padStart(2, "0")}</em>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <u>&rarr;</u>
          </a>
        ))}
      </div>
    </section>
  );
}
