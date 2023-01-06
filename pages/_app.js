import GlobalStyles from "../styles/global/Global";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import theme from "../styles/theme/Theme";
import store from "../context/store";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyles />
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
