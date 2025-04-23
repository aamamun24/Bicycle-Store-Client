// components/Banner/Banner.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Container from "../../components/Shared/Container/Container";

const Banner = () => {
  return (
    <section className="bg-black text-white py-10">
      <Container>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="h-[300px] md:h-[450px] flex flex-col justify-center items-center bg-gradient-to-r from-[#FD661F] to-[#ff8c42] rounded-lg p-8 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Unlock Your Potential
              </h2>
              <p className="text-lg md:text-xl">
                Explore our top-rated courses and level up your skills!
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="h-[300px] md:h-[450px] flex flex-col justify-center items-center bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] rounded-lg p-8 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Special Discount
              </h2>
              <p className="text-lg md:text-xl">
                Get up to 50% off on selected courses — limited time offer!
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="h-[300px] md:h-[450px] flex flex-col justify-center items-center bg-gradient-to-r from-[#ff4e50] to-[#f9d423] rounded-lg p-8 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Join Our Community
              </h2>
              <p className="text-lg md:text-xl">
                Thousands of learners. One mission — Success!
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};

export default Banner;
