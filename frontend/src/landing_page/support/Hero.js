import React from 'react'
function Hero() {
    return (
        <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="media\img\card3.jpg"  class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h2>Support Portal</h2>
        <h3>Stoxie Team Online for Anykind of Help.</h3>
      </div>
    </div>
    <div class="carousel-item">
      <img src="media\img\card3.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h2>Features</h2>
        <h3>Zero-cost investing. ₹20 smart trades. One ultra-modern platform.</h3>
      </div>
    </div>
    <div class="carousel-item">
      <img src="media\img\card3.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h2>Stoxie Service</h2>
        <h3>At Stoxie, we believe that knowledge is as valuable as capital.</h3>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
    <span class="visually-hidden">Next</span>
  </button>
</div>
    );
}

export default Hero;
