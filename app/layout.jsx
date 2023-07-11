import Menu from "@/Components/Menu/Menu";
import "./globals.css";
import { Inter } from "next/font/google";
import Services from "@/Components/Services/Services";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DigiTek Dashboard",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="layoutWrapper">
          <Menu />
          <div className="layoutContent">{children}</div>
          <Services />
        </div>
      </body>
    </html>
  );
}
