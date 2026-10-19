import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section className="hero">
      <div className="w">
        <div>
          <span className="hi">{profile.greeting}</span>
          <h1>Writer and <span className="ac">Content</span> Specialist</h1>
          <p>{profile.intro}</p>
          <a className="btn" href="#works">View my work</a>{" "}
          <a className="btn o" href="#resume">View my resume</a>
        </div>
        {/* To use your photo: put it in /public (for example me.jpg) and replace the line below with <img src="/me.jpg" alt={profile.name} /> */}
        <div className="pic"><span>H</span></div>
      </div>
    </section>
  );
}
