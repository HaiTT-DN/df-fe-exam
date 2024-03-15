import { wrapper } from "@/redux/store";
import { connect } from "react-redux";
import "@/app/globals.css";
import "@/assets/scss/main.scss";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

const mapDispatchToProps = () => ({});

const withConnect = connect(null, mapDispatchToProps);

export default wrapper.withRedux(withConnect(App));
