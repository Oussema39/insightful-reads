"use client";
import { Button, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
  // TODO : add catch all erros of dehydration
  useEffect(() => {
    console.log({ error });
  }, [error]);

  return (
    <Container>
      <Typography>Something went wrong</Typography>
      <Button variant="outlined" color="error" onClick={() => reset()}>
        Try again
      </Button>
    </Container>
  );
};

export default Error;
