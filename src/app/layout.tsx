import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DisneyPlus",
  description: "Checkpoint V",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <section
          id="Section-Home"
          className="flex flex-row w-screen items-center"
        >
          <div className="flex flex-col w-[500px]">
            <img className="w-[130px] shadow-inner-plus" src="/img/disneylogo.png" />
            <h1>Enjoy the greatest stories, all in one place.</h1>
            <button className="bg-[#6421ff] rounded-lg">
              <a className="p-4">GET DISNEY AND STAR PLUS</a>
            </button>
            <a href="https://www.disneyplus.com/identity/sign-up/enter-email?skuInterval=annual&toggle=shown">
              Desistir do Star+ e pegar o Disney+
            </a>
          </div>
          <aside>
            <img src="/img/background.png" />
          </aside>
        </section>
      </body>
    </html>
  );
}
