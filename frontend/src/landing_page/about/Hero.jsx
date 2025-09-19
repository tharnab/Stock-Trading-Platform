import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="conatainer hero-con">
      <div className="about-padding">
        <div className="row text-center hero-f-row">
          <h2>
            We pioneered the discount broking model in India.
            <br />
            Now, we are breaking ground with our technology.
          </h2>
        </div>

        <div className="row hero-s-row">
          <div className="col">
            <p className="hero-a-page l-p">
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>

            <p className="hero-a-page l-p">
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>

            <p className="hero-a-page l-p">
              Over 1.6+ crore clients place billions of orders every year
              through our powerful ecosystem of investment platforms,
              contributing over 15% of all Indian retail trading volumes.
            </p>
          </div>

          <div className="col">
            <p className="hero-a-p l-p">
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
            </p>

            <p className="hero-a-p l-p">
              <Link className="a-link" to="/tobebuild">
                Rainmatter
              </Link>
              , our fintech fund and incubator, has invested in several fintech
              startups with the goal of growing the Indian capital markets.
            </p>

            <p className="hero-a-p l-p">
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our{" "}
              <Link className="a-link" to="/tobebuild">
                blog
              </Link>{" "}
              or see what the media is{" "}
              <Link className="a-link" to="/tobebuild">
                saying about us{" "}
              </Link>
              or learn more about our business and product
              <Link className="a-link" to="/tobebuild">
                {" "}
                philosophies
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
