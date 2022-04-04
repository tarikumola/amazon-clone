import React from 'react'
import "./Home.css"
import Product from "./Product";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel} from 'react-responsive-carousel';

function Home() {
  return (
    <div className="home">
    <div className="home__container">
    <Carousel
        showThumbs={false}
        infiniteLoop
        showArrows={true}
        interval={3000}
        autoPlay
        transitionTime={1500}
        stopOnHover={false}
        swipeable={true}
        emulateTouch
        showIndicators={false}
        showStatus={false}
      >
        
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

    <img
        className="home__image"
        src="https://business.amazon.com/assets/global/images/hero/AB-Homepage-Hero-Test-2.png.transform/1440x480/image.jpg"
        alt=""
      />

    <img
        className="home__image"
        src="https://business.amazon.com/assets/global/images/events/reshape-2022/heroes/1480-Reshape-AEM-Hero-Banner-Blog-Half-EN-2880x960.png.transform/1440x480/image.jpg"
        alt=""
      />

    <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/gateway-2015/amazonshop/Desktop_Banner_Recruitment_Website.jpg"
        alt=""
      />

      </Carousel>

      <div className="home__row">

      <Product
          id="23445930"
          title="2022 Acer Nitro AN517 17.3 144Hz FHD IPS Display Gaming Laptop - Intel i7-11800H 8 Cores - Nvidia RTX 3050 Ti 4GB - 32GB RAM DDR4 - 1TB M.2 SSD - WiFi 6 RJ-45 - Windows 11 Pro w/ 32GB USB Drive"
          price={1499.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/51IV62GorRL._AC_SY780_.jpg"
        />

        <Product
          id="70829334"
          title="Spyder Men's Leader GTX"
          price={199.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71Gku5VXOOL._AC_UL320_.jpg"
        />

        <Product
          id="12321341"
          title="Python All-in-One For Dummies (For Dummies (Computer/Tech))"
          price={29.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/61nT8IQBk8L._AC_SX296_SY426_FMwebp_QL65_.jpg"
        />
      </div>


      <div className="home__row">
        <Product
          id="4903850"
          title="Apple iPhone 12 Pro Max, 256GB, Pacific Blue - Unlocked (Renewed Premium)"
          price={1029.00}
          rating={5}
          image="https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_SY160_.jpg"
        />

        <Product
          id="3254354345"
          title="Whynter CUF-210SS Energy Star 2.1 cubic feet Upright Freezer Stainless Steel door with Security Lock with Reversible Door"
          price={3491.00}
          rating={5}
          image="https://m.media-amazon.com/images/I/71GJYx2pyqL._AC_SX296_SY426_FMwebp_QL65_.jpg"
        />

        <Product
          id="3254354345"
          title="CARD READER Micro SD Card Reader 3 in 1 Type C | Micro USB | Solar Sells Product Guarantee."
          price={6}
          rating={5}
          image="https://m.media-amazon.com/images/I/51jYhZCjjzS._AC_UL320_.jpg"
        />
      </div>


      <div className="home__row">

      <Product
        id="49538096"
        title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES Games"
        price={98.00}
        rating={5}
        image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UL320_.jpg"
      />

        <Product
          id="90829332"
          title="adidas Diablo Small Duffel Bag"
          price={24.00}
          rating={5}
          image="https://m.media-amazon.com/images/I/91TAe5Bj83L._AC_UL320_.jpg"
        />

        <Product
        id="49538094"
        title="Panasonic LUMIX FZ300 Long Zoom Digital Camera Features 12.1 Megapixel, 1/2.3-Inch Sensor, 4K Video, WiFi, Splash &amp; Dustproof Camera Body, LEICA DC 24X F2.8 Zoom Lens - DMC-FZ300K - (Black) USA"
        price={1948.00}
        rating={4}
        image="https://m.media-amazon.com/images/I/81xVbbwlqlL._AC_SX296_SY426_FMwebp_QL65_.jpg"
      />

      </div>
    </div>
  </div>
  );
}

export default Home;