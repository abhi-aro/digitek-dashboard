import Menu from "../Components/Menu/Menu";
import "./globals.css";
import { Inter } from "next/font/google";
import Services from "../Components/Services/Services";
import Header from "../Components/Header/Header";
import Provider from "./context/client-provider";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DigiTek Dashboard",
  description: "",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(options);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider session={session}>
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
        </Provider>
      </body>
    </html>
  );
}
