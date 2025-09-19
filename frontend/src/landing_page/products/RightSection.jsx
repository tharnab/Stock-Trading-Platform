function RightSection({
  imageURL,
  productName,
  productDescription,
  newLink,
  newLinkName,
  
}) {
  return (
    <div className="container rs-con">
      <div className="products-padding">
        <div className="row">
          <div className="col rs-para">
            <h2 className="ls-pn">{productName}</h2>

            <p className="ls-pd">{productDescription}</p>
            <div className="">
              <a href={newLink} className="products-link">
                {newLinkName} →
              </a>
            </div>
          </div>

          <div className="col text-center rs-img">
            <img src={imageURL} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
