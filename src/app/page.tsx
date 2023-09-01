import SignIn from "./auth/signin/page";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import Home from "./home/_page";
import { Button } from "@mui/material";
import { signIn } from "next-auth/react";
import Link from "next/link";

const Index = async () => {
  const session = (await getServerSession(authOptions)) as Session;

  return (
    <main>
      <Home user={session.user} />
    </main>
  );
};

export default Index;
