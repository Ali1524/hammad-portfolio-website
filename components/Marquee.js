import { marquee } from "@/data/content";

export default function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <div className="mq">
      <div>
        {items.map((t, i) => (
          <span key={i}>{t}<span>*</span></span>
        ))}
      </div>
    </div>
  );
}
