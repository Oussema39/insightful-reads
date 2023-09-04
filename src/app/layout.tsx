import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import AuthProvider from "./context/AuthProvider";
import MUIThemeProvider from "./context/MUIThemeProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reads",
  description: "Insightful reads created by Oussema Heni",
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <MUIThemeProvider>
          <AuthProvider>
            {session && <Navbar />}
            {children}
          </AuthProvider>
        </MUIThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
