import Footer from "./(site)/common/Footer";
import Navbar from "./(site)/common/Navbar";
import "./globals.css";
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Shop",
  description: "An You & Me Shop app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jost.className} antialiased text-primary bg-white font-jost`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
