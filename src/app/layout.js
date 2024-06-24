import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hera Portfolio",
  description: "Created by hera",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" flex">
          <Sidebar />
          <div className="w-full">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
