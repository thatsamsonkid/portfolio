import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import MainPageLayout from "../shared/layouts/PageLayouts";

// Style Imports
import "../styles/main.scss";
import { theme } from "../styles/theme";
import { GlobalStyle } from "../styles/_styles";

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
