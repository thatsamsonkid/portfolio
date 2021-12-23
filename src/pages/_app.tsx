import { AppProps } from "next/app";
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap-utilities.min.css";
// import "../../node_modules/bootstrap/dist/css/bootstrap-reboot.css";
import "../styles/main.css";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { GlobalStyle } from "../styles/_styles";
import MainPageLayout from "../shared/layouts/PageLayouts";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <ThemeProvider theme={theme}>
        <MainPageLayout>
          <Component {...pageProps} />
        </MainPageLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
