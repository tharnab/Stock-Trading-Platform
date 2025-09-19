import { Link } from 'react-router-dom'

function Hero() {
    return ( 
        <div className="container p-hero">
            <div className="products-padding">
                <div className="row text-center p-b">
                <h1 className="p-h1">
                    Zerodha Products
                </h1>

                <p className="p-h ">Sleek, modern, and intuitive trading platforms</p>

                <p className="p2-h">Check out our <Link to="/tobebuild" className="products-link">investment offerings →</Link></p>
            </div>
            </div>
            
        </div>
     );
}

export default Hero;