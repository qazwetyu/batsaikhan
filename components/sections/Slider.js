import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },
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
              backgroundImage: 'url("/assets/img/banner/banner_img01.jpg")',
              backgroundPosition: "center",
              backgroundSize: "cover",
              minHeight: "100vh",
            }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10 col-md-12">
                  <div className="banner-content text-center">
                    <h2 className="title" data-animation="fadeInUp" data-delay=".4s">
                      Инженерийн найдвартай шийдэл
                    </h2>
                    <p data-animation="fadeInUp" data-delay=".6s">
                      ЗӨВШАН ХХК нь орон сууц, барилга байгууламжийн сантехник,
                      шугам сүлжээний угсралт, засвар үйлчилгээг чанарын өндөр
                      түвшинд гүйцэтгэнэ.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="single-slider slider-bg"
            style={{
              backgroundImage: 'url("/assets/img/banner/banner_right_img02.jpg")',
              backgroundPosition: "center",
              backgroundSize: "cover",
              minHeight: "100vh",
            }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10 col-md-12">
                  <div className="banner-content text-center">
                    <h2 className="title" data-animation="fadeInUp" data-delay=".4s">
                      Аюулгүй ажиллагаа, хугацааны сахилга бат
                    </h2>
                    <p data-animation="fadeInUp" data-delay=".6s">
                      Төсөл бүрийг төлөвлөлтөөс хүлээлгэн өгөх хүртэл хяналттай
                      удирдаж, захиалагчийн хэрэгцээнд нийцсэн бодит үнэ цэнтэй
                      үр дүнг бий болгодог.
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
