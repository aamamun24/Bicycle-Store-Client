import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";
// @ts-ignore
import "swiper/css/autoplay";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";

const Banner = () => {
  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-[400px] md:h-[600px]"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-full w-full bg-cover bg-center flex flex-col justify-center items-center text-center text-white"
            style={{ backgroundImage: `url(${banner1})` }}
          >
            <div className="bg-black/50 p-6 rounded-lg">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                Discover Your Next Adventure
              </h2>
              <p className="text-lg md:text-2xl mb-6">
                Explore our premium bicycles for every terrain.
              </p>
              <button className="bg-[#FD661F] hover:bg-[#ff8c42] text-white px-6 py-3 rounded-full text-lg font-semibold transition">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-full w-full bg-cover bg-center flex flex-col justify-center items-center text-center text-white"
            style={{ backgroundImage: `url(${banner2})` }}
          >
            <div className="bg-black/50 p-6 rounded-lg">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                Ride with Confidence
              </h2>
              <p className="text-lg md:text-2xl mb-6">
                High-performance bicycles for every journey.
              </p>
              <button className="bg-[#2E8B57] hover:bg-[#256D46] text-white px-6 py-3 rounded-full text-lg font-semibold transition">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="h-full w-full bg-cover bg-center flex flex-col justify-center items-center text-center text-white"
            style={{ backgroundImage: `url(${banner3})` }}
          >
            <div className="bg-black/50 p-6 rounded-lg">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                Unleash Your Potential
              </h2>
              <p className="text-lg md:text-2xl mb-6">
                Join our community of passionate riders.
              </p>
              <button className="bg-[#FD661F] hover:bg-[#ff8c42] text-white px-6 py-3 rounded-full text-lg font-semibold transition">
                Get Started
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
