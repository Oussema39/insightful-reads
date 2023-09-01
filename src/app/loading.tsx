import { Box, CircularProgress } from "@mui/material";
import React from "react";

const loading = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default loading;
