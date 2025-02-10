import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Contact() {
  return (
    <>
      <Layout headerStyle={6}>
        {/* breadcrumb-area */}
        <section className="breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-content">
                  <h2 className="title">Холбогдох</h2>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link href="/">Үндсэн</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Холбогдох
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb-area-end */}
        {/* contact-info */}
        <section className="contact-info pb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="contact-info-item">
                  <span className="sub-title ">Зөвшан</span>
                  <h2 className="title"></h2>
                  <ul className="list-wrap">
                    <li>
                      <Link href="mailto:batsaikhan3040@yahoo.com">
                        batsaikhan3040@yahoo.com{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="tel:99070200">+99070200</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact-info-end */}
        {/* contact-map */}
        <div className="map-area">
          <div className="container">
            <div id="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2517.565014621367!2d106.92038747011303!3d47.903560202133825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693e393c4b51b%3A0x908a66fe8cec94db!2z0JPQu9C-0LHQsNC7INCi0LDRg9C9!5e0!3m2!1sen!2smn!4v1690176626593!5m2!1sen!2smn"
                width="600"
                height="450"
              ></iframe>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
