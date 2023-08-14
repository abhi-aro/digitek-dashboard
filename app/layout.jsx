import Menu from "../Components/Menu/Menu";
import "./globals.css";
import { Inter } from "next/font/google";
import Services from "../Components/Services/Services";
import Header from "../Components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DigiTek Dashboard",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="layoutWrapper">
          <div className="layoutMenu">
            <Menu />
          </div>
          <div className="layoutContent">{children}</div>
          <div className="layoutServices">
            <Services />
          </div>
        </div>
      </body>
    </html>
  );
}
