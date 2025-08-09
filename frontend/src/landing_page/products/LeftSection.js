import React from "react";
import "../stylesheet.css"
function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 text-center">
          <img src={imageURL} style={{borderRadius:"20%", width:"80%" }} />
        </div>
        <div className="col-6 p-5 mtx alink">
          <h1>{productName}</h1>
          <p className="text-fade2">{productDesription}</p>
          <div>
            <a  className="text-fade2" href={tryDemo}>Try Demo</a>
            <a className="text-fade2" href={learnMore} style={{ marginLeft: "50px" , }}>
              Learn More
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/img/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img
                src="media/img/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
