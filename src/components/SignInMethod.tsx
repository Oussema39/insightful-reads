"use client";
import GithubIcon from "@/icons/GithubIcon";
import { Stack, Typography, Button } from "@mui/material";
import React from "react";
import { signIn } from "next-auth/react";

const SignInMethod = () => {
  const handleSignIn = async () => {
    signIn("github", { callbackUrl: "http://localhost:3000" });
  };

  return (
    <Stack spacing={2} justifyContent="center">
      <Typography fontSize="24px" fontWeight={700} textAlign="center">
        Welcome back, Insightful
      </Typography>
      <Button
        onClick={handleSignIn}
        sx={{
          color: "black",
          textTransform: "none",
          "&::first-letter": { textTransform: "uppercase" },
        }}
        disableRipple
        variant="outlined"
        startIcon={<GithubIcon style={{ fontSize: "26px" }} />}
      >
        Log in with Github
      </Button>
    </Stack>
  );
};

export default SignInMethod;
