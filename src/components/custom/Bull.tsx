import { Box } from "@mui/material";
import React from "react";

type BullProps = {
  color?: string;
  scale?: number;
};

const Bull = ({ color, scale }: BullProps) => {
  return (
    <Box
      component="span"
      sx={{
        color,
        display: "inline-block",
        mx: "2px",
        transform: `scale(${scale ?? 0.8})`,
      }}
    >
      •
    </Box>
  );
};

export default Bull;
