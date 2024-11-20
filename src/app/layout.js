import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { constructMetadata } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: {
//     default:"Rocket Blogs Homepage",
//     template:"%s | Rocket Blogs"
//   },
//   // title:"Homepage",
//   description: "Rocket Blogs app description",
// };
// const metadataParams = {
//   title: "Rocket Blogs Homepage",
//   description: "Rocket Blogs app description",
//   image: "post.img",
//   noIndex: false,
//   icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
// };
// export const metadata=constructMetadata({params:metadataParams})
// export const metadata=constructMetadata()
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ClientSideProviderTest> */}
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        {/* </ClientSideProviderTest> */}
      </body>
    </html>
  );
}
