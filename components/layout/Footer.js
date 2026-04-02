import Link from "next/link";
import { MAIN_NAV_LINKS } from "@/components/layout/navLinks";

export default function Footer1() {
  return (
    <footer>
      <div className="footer-area footer-bg">
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-xl-4 col-md-6">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <Link href="/">
                      <img src="/assets/img/logo/logo02.png" alt="Зөвшан ХХК лого" />
                    </Link>
                  </div>
                  <div className="footer-contact">
                    <p>
                      ЗӨВШАН ХХК нь сантехник, шугам сүлжээний угсралт болон засвар
                      үйлчилгээний чиглэлээр тогтвортой, найдвартай шийдэл
                      хэрэгжүүлдэг.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="footer-widget">
                  <h2 className="fw-title">Цэс</h2>
                  <div className="footer-link">
                    <ul className="list-wrap">
                      {MAIN_NAV_LINKS.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="footer-widget">
                  <h2 className="fw-title">Холбоо барих</h2>
                  <div className="footer-contact">
                    <ul className="list-wrap">
                      <li>
                        <Link href="mailto:batsaikhan3040@yahoo.com">
                          batsaikhan3040@yahoo.com
                        </Link>
                      </li>
                      <li>
                        <Link href="tel:+97699070200">+976 9907 0200</Link>
                      </li>
                      <li>Улаанбаатар хот, Монгол Улс</li>
                    </ul>
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
                    © <span>ЗӨВШАН ХХК</span> {new Date().getFullYear()}. Бүх эрх
                    хуулиар хамгаалагдсан.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
