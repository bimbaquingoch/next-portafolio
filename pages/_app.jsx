import { ThemeProvider } from "next-themes";
import { PortafolioProvider } from "../context/PortafolioProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <PortafolioProvider>
      <ThemeProvider attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
    </PortafolioProvider>
  );
}

export default MyApp;
