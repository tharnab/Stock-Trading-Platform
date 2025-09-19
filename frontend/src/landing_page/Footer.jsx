import './styles/HomePage.css'

function Footer() {
  return (
    <footer className="f-main border-f">
      <div className="container pt-5 f-exmargin">
        <div className="more-padding">
            <div className="row">
          <div className="col">
            <img
              src="media/images/navbar-zerodha.svg"
              className="footer-logo"
              alt="logo"
            />

            <p className="f-bp">
              &copy; 2010 - 2025, Zerodha Broking Ltd.
              <br /> All rights reserved.
            </p>
          </div>
          <div className="col mx-4">
            <h4 className="fs-5 f-links-head">Account</h4>
            <a href="" className="f-links">Open demat account</a> 
            <a href="" className="f-links">Minor demat account</a> 
            <a href="" className="f-links">NRI demat account</a> 
            <a href="" className="f-links">Commodity</a> 
            <a href="" className="f-links">Dematerialisation</a> 
            <a href="" className="f-links">Fund transfer</a> 
            <a href="" className="f-links">MTF</a> 
            <a href="" className="f-links">Referral program</a> 
          </div>
          <div className="col">
            <h4 className="fs-5 f-links-head">Support</h4>
            <a href="" className="f-links">Contact us</a> 
            <a href="" className="f-links">Support portal</a> 
            <a href="" className="f-links">How to file a complaint?</a> 
            <a href="" className="f-links">Status of your complaints</a> 
            <a href="" className="f-links">Bulletin</a> 
            <a href="" className="f-links">Circular</a> 
            <a href="" className="f-links">Z-Connect blog</a> 
            <a href="" className="f-links">Downloads</a> 
          </div>
          <div className="col">
            <h4 className="fs-5 f-links-head">Company</h4>
            <a href="" className="f-links">About</a> 
            <a href="" className="f-links">Philosophy</a> 
            <a href="" className="f-links">Press & media</a> 
            <a href="" className="f-links">Careers</a> 
            <a href="" className="f-links">Zerodha Cares (CSR)</a> 
            <a href="" className="f-links">Zerodha.tech</a> 
            <a href="" className="f-links">Open source</a> 
          </div>
          <div className="col">
            <h4 className="fs-5 f-links-head">Quick links</h4>
            <a href="" className="f-links">Upcoming IPOs</a> 
            <a href="" className="f-links">Brokerage charges</a> 
            <a href="" className="f-links">Market holidays</a>
            <a href="" className="f-links">Economic claender</a> 
            <a href="" className="f-links">Calculators</a> 
            <a href="" className="f-links">Markets</a> 
            <a href="" className="f-links">Sectors</a> 
          </div>
        </div>

        <div className="row f-para text-muted mb-4 f-mr">
          <p className="f-para-col">
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI
            Registration no.: INZ000038238 Registered Address: Zerodha Broking
            Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
            School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
            For any complaints pertaining to securities broking please write to &nbsp;
            <a href="" className="stats-link">complaints@zerodha.com</a>, &nbsp; for DP related to &nbsp;
            <a href="" className="stats-link">dp@zerodha.com</a>. &nbsp;Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p className="f-para-col">
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p className="f-para-col" style={{color: "#387ed1"}}>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>

          <p className="f-para-col">
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p className="f-para-col">
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p className="f-para-col">
            India's largest broker based on networth as per NSE.&nbsp;
            <a href="" className="stats-link">NSE broker
            factsheet </a> &nbsp; 
          </p>

          <p className="f-para-col">
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.&nbsp;
            <a href="" className="stats-link">create a ticket here</a>. &nbsp;
          </p>
        </div>
        </div>
        

        {/* <div className="row row-f">
            <a href="" className="f-l col">NSE</a>
            <a href="" className="f-l col">BSE</a>
            <a href="" className="f-l col">MCX </a>
            <a href="" className="f-l col">Terms & conditions </a>
            <a href="" className="f-l col">Policies & procedures </a>
            <a href="" className="f-l col">Privacy policy </a>
            <a href="" className="f-l col">Disclosure </a>
            <a href="" className="f-l col">For investor's attention </a>
            <a href="" className="f-l col">Investor charter</a>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
