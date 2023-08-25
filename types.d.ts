declare module "@mui/material/styles" {
  interface Theme {
    palette: {
      custom: string;
    };
  }
  interface ThemeOptions {
    palette?: {
      custom?: string;
    };
  }
}
