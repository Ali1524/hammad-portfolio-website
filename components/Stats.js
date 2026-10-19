import { stats } from "@/data/content";

export default function Stats() {
  return (
    <div className="stats">
      {stats.map((s) => (
        <div className="stat" key={s.label}>
          <b data-c={s.value} data-s={s.suffix}>0</b>
          <small>{s.label}</small>
        </div>
      ))}
    </div>
  );
}
