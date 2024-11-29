import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Components/Navbar";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Inventory Management",
  description: "Donate me some money so that you may earn your akhirah through it",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className="">

<Navbar/>

       

         


            {children}

          
        

       
      </body>
    </html>
  );
}
