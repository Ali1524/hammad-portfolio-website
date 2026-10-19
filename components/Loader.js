"use client";
import { useEffect, useState } from "react";

export default function Loader() {
  const [off, setOff] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setOff(true), 700);
    return () => clearTimeout(t);
  }, []);
  return <div id="ld" className={off ? "off" : ""}>L O A D I N G</div>;
}
