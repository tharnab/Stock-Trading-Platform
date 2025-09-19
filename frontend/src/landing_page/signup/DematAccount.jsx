function DematAccount() {
    return ( 
        <div className="container-fluid demat mb-5">
        <div className="row text-center">
          <h3 className='fs-4 mt-5 mb-5'>Steps to open a demat account with Zerodha</h3>
        </div>

        <div className="row dd mt-3">
            <div className="col">
                <img src='media/images/demat-sign.svg' alt='demat' className='' />
            </div>
            <div className="col mt-3">
                <div className="demat-upper d-flex">
                    <div className="demat-number">01</div>
                    <h3 className='fs-5 ms-3'>Enter the requested details</h3>
                </div> <hr />
                <div className="demat-upper d-flex">
                    <div className="demat-number">02</div>
                    <h3 className='fs-5 ms-3'>Complete e-sign & verification</h3>
                </div> <hr />
                <div className="demat-upper d-flex">
                    <div className="demat-number">03</div>
                    <h3 className='fs-5 ms-3'>Start investing!</h3>
                </div>
            </div>
        </div>
      </div>
     );
}

export default DematAccount;