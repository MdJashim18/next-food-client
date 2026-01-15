import Navbar from "@/Components/Navbar";
import "./globals.css";
import Footer from "@/Components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="bg-white text-black">
        <div className="sticky top-0 z-50">
          <Navbar></Navbar>
        </div>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
