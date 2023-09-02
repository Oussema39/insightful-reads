"use client";
import { Box, Typography, TypographyOwnProps } from "@mui/material";
import React, { ReactNode, forwardRef } from "react";

interface TextProps extends TypographyOwnProps {
  maxLines?: number;
}

const Text =
  // eslint-disable-next-line react/display-name
  forwardRef<HTMLDivElement, TextProps>(
    ({ children, maxLines, ...props }, ref) => (
      <Box
        ref={ref}
        component="div"
        sx={{ maxHeight: "3rem", lineHeight: "1.5rem", overflow: "hidden" }}
      >
        <Typography
          maxWidth="50px"
          lineHeight="inherit"
          component="p"
          variant="body2"
          textOverflow="ellipsis"
          //   display="-webkit-box"
          sx={
            {
              // "-webkit-box-orient": "vertical",
              // WebkitLineClamp: 3,
              // wordWrap: "break-word",
            }
          }
          {...props}
        >
          {children}
        </Typography>
      </Box>
    )
  );

export default Text;
