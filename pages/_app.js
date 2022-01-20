import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import { Provider } from "react-redux";
import store from "../redux/store.js";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
