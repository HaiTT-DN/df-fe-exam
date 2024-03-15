import { wrapper } from "@/redux/store";
import { connect } from "react-redux";
import "@/app/globals.css";
import "@/assets/scss/main.scss";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";
import { ThemeProvider } from "@/app/theme-provider";

function App({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Component {...pageProps} />
      </ThemeProvider>
    </I18nextProvider>
  );
}

const mapDispatchToProps = () => ({});

const withConnect = connect(null, mapDispatchToProps);

export default wrapper.withRedux(withConnect(App));
