import "../styles/globals.css";
//import type { AppProps } from "next/app";
import App from "next/app";
import { Provider } from "react-redux";
import React from "react";
import { createWrapper } from "next-redux-wrapper";
import store from "../redux/store";

class MyApp extends App {
  // static async getInitialProps({ Component, ctx }) {
  //   const appProps = Component.getInitalProps
  //     ? await Component.getInitialProps(ctx)
  //     : {};
  //   return { appProps: appProps };
  // }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}
const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />;
//     </Provider>
//   );
// }
// export default MyApp;
