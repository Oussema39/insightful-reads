import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import AuthProvider from "./context/AuthProvider";
import MUIThemeProvider from "./context/MUIThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reads",
  description: "Insightful reads created by Oussema Heni",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <MUIThemeProvider>
          <AuthProvider>{children}</AuthProvider>
        </MUIThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
