import "../styles/globals.css";
import BaseLayout from "../components/layout/base";

const ClientUI = ({ Component, pageProps }) => {
  return (
    // <BaseLayout>
    <Component {...pageProps} />
    // </BaseLayout>
  );
};

export default ClientUI;
