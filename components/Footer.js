import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer>
      <div className="w">
        <span>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        <span>Services. Works. Resume. Skills.</span>
      </div>
    </footer>
  );
}
