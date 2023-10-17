const Banner = () => {

// https://www.sonypictures.com/sites/default/files/styles/max_1300x1300/public/banner-images/2023-06/dumbmoney_banner_2572x1100_copyright-1-Recovered.jpg?itok=1t1ym8B3

//https://i.ibb.co/3vWpPCB/Mountain-Forest-Background.jpg

  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/JCY76TL/bannerimage.jpg)' }}>
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl lg:text-7xl text-red-600 font-bold">FUNFLIX</h1>
            <p className="mb-5 text-xl lg:text-2xl">Have Fun While You Can</p>
            <button className="btn btn-info">Explore</button>
        

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;