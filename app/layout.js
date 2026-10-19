import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font",
  display: "swap",
});

export const metadata = {
  title: "Hammad Ahmad | Writer and Content Specialist",
  description: "Portfolio of Hammad Ahmad, writer, copywriter and virtual assistant based in Islamabad, Pakistan.",
};

export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={font.variable}>
      <body>{children}</body>
    </html>
  );
}
