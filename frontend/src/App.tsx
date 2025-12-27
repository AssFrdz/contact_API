import { CssBaseline, ThemeProvider } from "@mui/material";
import AppRouter from "./router/AppRouter";
import theme from "./theme";

export default function App(){
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}
