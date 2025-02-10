import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

    
  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Slider() {
  return (
    <>
      <section className="slider-area">
        <Swiper {...swiperOptions} className="slider-active">
          <SwiperSlide
            className="single-slider slider-bg"
            style={{
              backgroundImage: `url("/assets/img/banner/banner_img01.jpg")`,
            }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <div className="banner-content text-center">
                    <h2
                      className="title"
                      data-animation="fadeInUp"
                      data-delay=".6s"
                    >
                      Сантехникийн
                    </h2>
                    <p data-animation="fadeInUp" data-delay=".6s">
                      Зөвшөн компани нь ажиллаж буй төсөл бүрдээ хүнээ
                      дээдэлсэн, гэр бүл, хувь хүнд тав тухтай амьдралын хэв
                      маягийг бүрдүүлэн,
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="single-slider slider-bg"
            style={{
              backgroundImage: `url("assets/img/banner/banner_right_img02.jpg")`,
            }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <div className="banner-content text-center">
                    <h2
                      className="title"
                      data-animation="fadeInUp"
                      data-delay=".2s"
                    >
                      Шийдэл
                    </h2>
                    <p data-animation="fadeInUp" data-delay=".6s">
                      амьдралд үнэ цэн нэмэгдүүлэхийг эрхэмлэж, оршин суугчдын
                      тав тухын хэрэгцээ шаардлагыг бүрэн хангасан, эдийн
                      засгийн үр өгөөж бүхий төлөвлөлттэй шийдэл амжилттай
                      хэрэгжүүлдгээрээ давуу талтай.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <div className="banner-scroll-down">
        <Link href="#about" className="section-link">
          <span />
          <span />
          <span />
        </Link>
      </div>
    </>
  );
}
