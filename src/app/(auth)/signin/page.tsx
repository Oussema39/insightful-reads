"use client";
import GithubIcon from "@/icons/GithubIcon";
import GoogleIcon from "@/icons/GoogleIcon";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { signIn } from "next-auth/react";

const SignIn = () => {
  const handleSignIn = async () => {
    signIn("github", { callbackUrl: "http://localhost:3000" });
  };

  return (
    <Box
      height="100vh"
      padding={{
        xs: 4,
        md: 12,
      }}
      bgcolor={grey["200"]}
    >
      <Grid container direction="row" bgcolor="white" height="100%">
        <Grid item container xs={12} md={6} justifyContent="center">
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
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          bgcolor="white"
          sx={{
            backgroundImage: "url(/assets/images/reads-cover.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            position: "relative",
            isolation: "isolate",
            "&::after": {
              content: `''`,
              background: "rgb(128, 128, 128,0.1)",
              position: "absolute",
              inset: 0,
              // backdropFilter: "blur(2px)",
            },
          }}
        ></Grid>
      </Grid>
    </Box>
  );
};

export default SignIn;
