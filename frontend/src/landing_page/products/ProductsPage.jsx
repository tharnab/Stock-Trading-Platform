import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import RightSectionLanding from './RightSectionLanding'
import ZerodhaTech from "./ZerodhaTech";
import Universe from "./Universe";
import Hero from "./Hero";

import "../styles/ProductsPage.css";


function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="/media/images/products-kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        nameLink1=""
        nameLink2=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightSection 
        imageURL="/media/images/products-console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        newLink=""
        newLinkName="Learn more"
      />

      <LeftSection
        imageURL="/media/images/products-coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <RightSectionLanding
        imageURL="/media/images/products-landing.svg"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        newLink=""
        newLinkName="Kite connect"
      />

      <LeftSection
        imageURL="/media/images/products-varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <ZerodhaTech />

      <Universe />
    </>
  );
}

export default ProductsPage;
