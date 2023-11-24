import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "src/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

import ResponsiveAppBar from "components/AppBar";

let darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    h1: {
      fontSize: "4.5rem",
    },
    h2: {
      fontWeight: 700,
      fontSize: "3rem",
    },
    h3: {
      fontSize: "2.625rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1.125rem",
      fontWeight: 400,
    },
    fontFamily: [
      '"Oxanium"',
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
darkTheme = responsiveFontSizes(darkTheme);

function MyApp({ Component, pageProps }) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <ResponsiveAppBar />

        <Container maxWidth="lg" sx={{ scrollBehavior: "smooth" }}>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
