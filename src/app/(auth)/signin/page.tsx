"use client";
import { signIn } from "next-auth/react";

type Props = {};

const SignIn = (props: Props) => {
  const handleSignIn = async () => {
    signIn("github", { callbackUrl: "http://localhost:3000" });
  };

  return <div onClick={handleSignIn}>SignIn</div>;
};

export default SignIn;
