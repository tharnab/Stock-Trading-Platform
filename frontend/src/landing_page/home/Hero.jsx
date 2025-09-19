import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="container p-5 mb-5 hero-mt ">
      <div className="row text-center">
        <img
          src="/media/images/HomeHero.png"
          alt="Hero home"
          className="img-fluid w-75 mb-4 mx-auto d-block"
        />
        <h2 className="mt-5 fs-2">Invest in everything</h2>
        <p className="fs-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <Link to="/signup">
          <button className="p-2 fs-5 button mt-4">Sign up for free</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
