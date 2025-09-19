import '../styles/SupportPage.css'

function Hero() {
  return (
    <div className="container-fluid supp-con">
      <div className="support-padding-hero">
        <div className="row">
          <div className="col sp-gap">
            <div className="row mb-5">
              <h2 className="sp-h2 white">Support portal</h2>
            </div>

            <div className="row">
              <h3 className="sp-h3 white">
                Search for an answer or browse help topics to create a ticket
              </h3>

              <input
                className="text-center p-3 sp-input"
                placeholder="Eg: how do i activate F&Q, why is my order.."
              />

              <div className="mb-1">
                <a href="" className="me-4">Track account openings</a>
                <a href="">Track segment activation</a>
              </div>

              <div>
                <a href="" className="me-5">Intradex margins</a>
                <a href="" className="ms-4">Lite user manual</a>
              </div>
            </div>
          </div>
          <div className="col sp-secol">
            <div className="row  text-end">
              <button className="sup-button text-center p-2">Track tickets</button>
            </div>

            <div className="row">
              <h3 className="mb-4 white">Featured</h3>
              <ol className="ms-4">
                <li className="mb-1 white">
                  <a href="">Current takeovers and delisting - January 2025</a>
                </li>
                <li className="white">
                  <a href="">Latest intradey leverages - MIS & CO</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
