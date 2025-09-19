function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="products-padding">
        <div className="row ps-4">
          <div className="col">
            <img src={imageURL} />
          </div>
          <div className="col ls-lc">
            <h2 className="ls-pn">{productName}</h2>

            <p className="ls-pd">{productDescription}</p>
            <div className="mt-2">
              <a href={tryDemo} className="products-link ls-p">
                Try demo →
              </a>
              <a href={learnMore} className="products-link">
                Learn more →
              </a>
            </div>

            <div className="mt-4">
              <a href={googlePlay}>
                <img
                  src="/media/images/google-play-badge.svg"
                  alt="Play store"
                />
              </a>
              <a href={appStore}>
                <img src="/media/images/appstore-badge.svg" alt="App store" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
