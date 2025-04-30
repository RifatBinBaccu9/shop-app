import "./globals.css";
// import { Jost } from "next/font/google";



export const metadata = {
  title: "Shop",
  description: "An You & Me Shop app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
