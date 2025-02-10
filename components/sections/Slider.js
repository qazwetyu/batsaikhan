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
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              minHeight: '100vh'
            }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10 col-md-12">
                  <div className="banner-content text-center">
                    <h3
                      className="title"
                      data-animation="fadeInUp"
                      data-delay=".6s"
                      style={{
                        '@media (max-width: 768px)': {
                          fontSize: '24px',
                          lineHeight: '1.3',
                          marginBottom: '15px'
                        },
                        '@media (max-width: 480px)': {
                          fontSize: '20px',
                          marginBottom: '10px',
                          padding: '0 10px'
                        }
                      }}
                    >
                      Сантехникийн
                    </h3>
                    <p 
                      data-animation="fadeInUp" 
                      data-delay=".6s"
                      style={{
                        '@media (max-width: 768px)': {
                          fontSize: '16px',
                          lineHeight: '1.5',
                          padding: '0 20px',
                          marginBottom: '20px'
                        },
                        '@media (max-width: 480px)': {
                          fontSize: '14px',
                          padding: '0 15px',
                          marginBottom: '15px'
                        }
                      }}
                    >
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
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              minHeight: '100vh'
            }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10 col-md-12">
                  <div className="banner-content text-center">
                    <h2
                      className="title"
                      data-animation="fadeInUp"
                      data-delay=".2s"
                      style={{
                        '@media (max-width: 768px)': {
                          fontSize: '24px',
                          lineHeight: '1.3',
                          marginBottom: '15px'
                        },
                        '@media (max-width: 480px)': {
                          fontSize: '20px',
                          marginBottom: '10px',
                          padding: '0 10px'
                        }
                      }}
                    >
                      Шийдэл
                    </h2>
                    <p 
                      data-animation="fadeInUp" 
                      data-delay=".6s"
                      style={{
                        '@media (max-width: 768px)': {
                          fontSize: '16px',
                          lineHeight: '1.5',
                          padding: '0 20px',
                          marginBottom: '20px'
                        },
                        '@media (max-width: 480px)': {
                          fontSize: '14px',
                          padding: '0 15px',
                          marginBottom: '15px'
                        }
                      }}
                    >
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

      <div 
        className="banner-scroll-down"
        style={{
          '@media (max-width: 768px)': {
            bottom: '20px'
          }
        }}
      >
        <Link href="#about" className="section-link">
          <span />
          <span />
          <span />
        </Link>
      </div>
    </>
  );
}
