import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import { ReactNode } from "react";
import AuthProvider from "./context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });
// const roboto = Roboto({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Insightful Reads",
  description: "Insightful reads created by Oussema Heni",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
