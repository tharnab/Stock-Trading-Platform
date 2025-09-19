import Signup from "./Signup";
import Investment from './Investment'
import OpenAccount from "../OpenAccount";
import DematAccount from "./DematAccount";

import  "../styles/Signup.css";
function SignUpPage() {
    return ( 
        <>
        <Signup />
        <Investment />
        <DematAccount />
        <OpenAccount />
        </>
     );
}

export default SignUpPage;