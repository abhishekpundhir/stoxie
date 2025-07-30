import React from "react";

function Stats() {
  return (
    <div className="container p-">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4">Client first Service</h2>
          <p className="text-muted mb-5">
            That's why 20+ crore clients trust Stoxie with ~ ₹16 lakh crores of equity investments, making us Worlds largest broker , contributing to 19% of daily retail exchange volumes Globally.
          </p>
          <h2 className="fs-4">No spam or Gimmicks</h2>
          <p className="text-muted mb-5">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="fs-4">Stoxie Empire</h2>
          <p className="text-muted mb-5">
            Not just an app, but a whole ecosystem. Our investments in 300+ fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted  mb-5">
            With initiatives like <b>Nudge</b> and<b> Kill Switch</b>   , we don't just facilitate transactions, but actively help you do better with your money.
          </p>
        </div>
        <div className="col-6 p-5">
          <img src="media/img/ecosystem.png" style={{ width: "114%" }} />
          <div className="text-center">
            <a href="#" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Try Kite demo{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;