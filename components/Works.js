"use client";
import { useState } from "react";
import { works, workFilters } from "@/data/content";

export default function Works() {
  const [active, setActive] = useState("all");
  return (
    <section id="works" className="alt">
      <div className="w">
        <h2 className="rv">My Recent <span className="ac">Works</span></h2>
        <p className="sub rv">Selected writing and content projects. Replace these cards with your real samples in data/content.js.</p>
        <div className="fl rv">
          {workFilters.map((f) => (
            <button key={f.key} className={active === f.key ? "on" : ""} onClick={() => setActive(f.key)}>
              {f.label}
            </button>
          ))}
        </div>
        <div className="gr">
          {works.map((w, i) => (
            <div
              className="cd rv"
              key={w.title}
              data-n={String(i + 1).padStart(2, "0")}
              hidden={active !== "all" && w.type !== active}
            >
              <small>{w.tag}</small>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
