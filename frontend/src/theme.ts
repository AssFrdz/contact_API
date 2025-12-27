import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const baseTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0B3D91",
      light: "#2F5FB8",
      dark: "#072B66",
      contrastText: "#F7F8FB",
    },
    secondary: {
      main: "#D6A756",
      dark: "#B4863C",
    },
    background: {
      default: "#F5F3EE",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#0B1B2A",
      secondary: "#4C5C6B",
    },
  },
  shape: {
    borderRadius: 18,
  },
  typography: {
    fontFamily: "'Manrope', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    h1: {
      fontFamily: "'Playfair Display', 'Times New Roman', serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: "'Playfair Display', 'Times New Roman', serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontFamily: "'Playfair Display', 'Times New Roman', serif",
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h4: {
      fontFamily: "'Playfair Display', 'Times New Roman', serif",
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: "0.01em",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingLeft: 20,
          paddingRight: 20,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 22,
        },
      },
    },
  },
});

const theme = responsiveFontSizes(baseTheme);

export default theme;
