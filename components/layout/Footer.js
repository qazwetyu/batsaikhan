import Link from "next/link";

export default function Footer1({}) {
  return (
    <>
      <footer>
        <div className="footer-area footer-bg">
          <div className="container">
            <div className="footer-top">
              <div className="row">
                <div className="col-xl-3 col-md-4 col-sm-5">
                  <div className="footer-widget">
                    <div className="footer-logo">
                      <Link href="/">
                        <img src="/assets/img/logo/logo02.png" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-7">
                  <div className="footer-widget">
                    <h2 className="fw-title">Холбоо барих</h2>
                    <div className="footer-contact">
                      <p></p>
                      <ul className="list-wrap">
                        <li>
                          <Link href="mailto:">batsaikhan3040@yahoo.com</Link>
                        </li>
                        <li>
                          <Link href="tel:99070200">+9907-0200</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-5">
                  <div className="footer-widget">
                    <h2 className="fw-title">Тусламж</h2>
                    <div className="footer-link">
                      <ul className="list-wrap">
                        <li>
                          <Link href="overview">Бидний тухай</Link>
                        </li>
                        <li>
                          <Link href="blog">Блог</Link>
                        </li>
                        <li>
                          <Link href="project">Төслүүд</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-5 col-sm-7">
                  <div className="footer-widget">
                    <h2 className="fw-title">Мэдээлэл авах</h2>
                    <div className="footer-newsletter">
                      <form action="#">
                        <input type="email" placeholder="Емайл ээ оруулна" />

                        <button type="submit">
                          <i className="fas fa-arrow-right" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="row">
                <div className="col-lg-12">
                  <div className="copyright-text text-center">
                    <p>
                      {" "}
                      © <span>Зөвшан ХХК</span> {new Date().getFullYear()}.
                    </p>
                  </div>
                  <div className="footer-social">
                    <ul className="list-wrap">
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
