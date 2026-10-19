import { profile } from "@/data/content";

const links = [
  ["Services", "#services"],
  ["Works", "#works"],
  ["Resume", "#resume"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

export default function Header() {
  return (
    <header>
      <div className="w">
        <a className="logo" href="#top">{profile.logo}<i>.</i></a>
        <nav>
          {links.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <a className="btn" href="#contact">Hire me!</a>
      </div>
    </header>
  );
}
