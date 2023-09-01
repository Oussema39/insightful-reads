import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import SignInMethod from "@/components/SignInMethod";
import { Box, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const SignIn = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");

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
          <SignInMethod />
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
            },
          }}
        ></Grid>
      </Grid>
    </Box>
  );
};

export default SignIn;
