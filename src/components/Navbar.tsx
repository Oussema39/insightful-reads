import { AppBar, Avatar, Box, Container, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Image from "next/image";
import React from "react";
import UserAvatar from "./UserAvatar";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "white",
        boxShadow: "none",
        borderBottom: `1px solid ${grey["200"]}`,
      }}
    >
      <Container
        sx={{ py: 0.75, display: "flex", justifyContent: "space-between" }}
      >
        <Box
          sx={{
            userSelect: "none",
            alignItems: "center",
            display: "flex",
            gap: 1,
          }}
        >
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={16}
            height={16}
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: "monospace",
              fontWeight: 600,
              letterSpacing: ".175rem",
            }}
          >
            READS
          </Typography>
        </Box>
        <Box>
          <UserAvatar />
        </Box>
      </Container>
    </AppBar>
  );
};

export default Navbar;
