import "../styles/main.scss";
import Header from "../components/Header/Header";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <div id="site">
      <Header />
      <div id="main">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
