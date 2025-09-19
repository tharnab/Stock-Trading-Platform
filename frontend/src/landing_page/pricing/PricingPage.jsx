import Brokerage from "./Brokerage";
import Hero from "./Hero";
import OpenAccount from "../OpenAccount"

import '../styles/PricingPage.css'

function PricingPage() {
    return ( 
        <>
            <Hero />
            <Brokerage />
            <OpenAccount />
        </>
     );
}

export default PricingPage;