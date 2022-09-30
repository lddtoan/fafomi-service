import type { AppProps } from "next/app";
import "shared/i18n";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
