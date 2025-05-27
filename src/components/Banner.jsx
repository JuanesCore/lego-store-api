const Banner = () => {
  return (
    <div id="carouselExample" className="carousel slide mb-4" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://www.lego.com/cdn/cs/set/assets/blt0cbceba0ef5f27d5/Botanical_HP_2024.jpg" className="d-block w-100 banner" alt="LEGO 1" />
        </div>
        <div className="carousel-item">
          <img src="https://www.lego.com/cdn/cs/set/assets/blt8003a5b85e56dbf8/Theme-HP-Hero.jpg" className="d-block w-100 banner" alt="LEGO 2" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default Banner;
