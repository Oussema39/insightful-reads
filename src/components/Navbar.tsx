import { Box, Container, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Image from "next/image";
import React from "react";
import UserAvatar from "./UserAvatar";
import Link from "next/link";

const Navbar = () => {
  return (
    <Box
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
        <Link href="/">
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
        </Link>
        <Box>
          <UserAvatar />
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
