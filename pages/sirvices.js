import ViodePopup from "@/components/elements/ViodePopup";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Service() {
  return (
    <>
      <Layout headerStyle={6}>
        {/* Крамб хэсэг */}
        <section className="breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-content">
                  <h2 className="title">Бидний хийх үйлчилгээ</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link href="/">Үндсэн</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Үйлчилгээ
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-area section-pt-140 section-pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8">
                <div className="section-title text-center mb-55">
                  <span className="sub-title">Бид юу хийдэг вэ?</span>
                  <h2 className="title">
                    Creating a great tomorrow for everyone
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="services-item">
                  <div className="services-thumb">
                    <Link href="#">
                      <img src="/assets/img/images/services_01.png" alt="" />
                    </Link>
                  </div>
                  <div className="services-content">
                    <h2 className="title">
                      <Link href="#">Residential Development</Link>
                    </h2>
                    <p>
                      Magni dolores eos qui ratione voluptatem sequi nesciunt.
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet sed quia
                    </p>
                    <Link href="#" className="text-btn">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="services-item">
                  <div className="services-thumb">
                    <Link href="#">
                      <img src="/assets/img/images/services_02.png" alt="" />
                    </Link>
                  </div>
                  <div className="services-content">
                    <h2 className="title">
                      <Link href="#">Commercial Development</Link>
                    </h2>
                    <p>
                      Magni dolores eos qui ratione voluptatem sequi nesciunt.
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet sed quia
                    </p>
                    <Link href="#" className="text-btn">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="services-item">
                  <div className="services-thumb">
                    <Link href="#">
                      <img src="/assets/img/images/services_03.png" alt="" />
                    </Link>
                  </div>
                  <div className="services-content">
                    <h2 className="title">
                      <Link href="#">Industrial Development</Link>
                    </h2>
                    <p>
                      Magni dolores eos qui ratione voluptatem sequi nesciunt.
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet sed quia
                    </p>
                    <Link href="#" className="text-btn">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
