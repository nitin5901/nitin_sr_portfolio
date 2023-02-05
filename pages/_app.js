import '../styles/globals.css';
import PortfolioLayout from "../Components/portfolioLayout";

function MyApp({ Component, pageProps }) {
  return(
          <PortfolioLayout>
              <Component {...pageProps} />
          </PortfolioLayout>
      );
}

export default MyApp;
