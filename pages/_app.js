import Page from "../components/page/Page";
// import App from "next/app";

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />

      <style jsx="true" global>{`
        @import url("https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap");
        font-family: "Montserrat", sans-serif;
        font-weight: bold;
        font-style: normal;
        font-display: swap;
      `}</style>
    </Page>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
