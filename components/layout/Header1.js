import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { MAIN_NAV_LINKS } from "@/components/layout/navLinks";

export default function Header1({ handleMobileMenu, scroll }) {
  return (
    <>
      <header>
        <div
          id="sticky-header"
          className={`menu-area transparent-header ${
            scroll ? "sticky-menu" : ""
          }`}
        >
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <i className="fas fa-bars" />
                </div>
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="row align-items-center flex-nowrap flex-xl-wrap gy-2 header1-row">
                      <div className="col-auto d-none d-lg-block header1-brand">
                        <Link href="/" className="header1-logo-link">
                          <img
                            src="/assets/img/logo/logo.png"
                            alt="Зөвшан ХХК"
                            className="header1-logo-img"
                          />
                        </Link>
                      </div>
                      <div className="col col-lg header1-nav-col">
                        <div className="navbar-wrap main-menu d-none d-lg-flex header1-nav-inner">
                          <ul className="navigation header1-nav-list mb-0">
                            {MAIN_NAV_LINKS.map((item) => (
                              <li key={item.href}>
                                <Link href={item.href}>{item.label}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="col-auto d-none d-lg-block text-end header1-phone">
                        <div className="header-contact">
                          <Link href="tel:+97699070200">+976 9907-0200</Link>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
                <div className="mobile-menu">
                  <nav className="menu-box">
                    <div className="close-btn" onClick={handleMobileMenu}>
                      <i className="fas fa-times" />
                    </div>
                    <div className="nav-logo">
                      <Link href="/">
                        <img
                          src="/assets/img/logo/logo02.png"
                          alt="Зөвшан ХХК"
                        />
                      </Link>
                    </div>
                    <div className="menu-outer">
                      <MobileMenu />
                    </div>
                    <div className="social-links">
                      <ul className="clearfix list-wrap">
                        <li>
                          <Link href="/#">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link href="/#">
                            <i className="fab fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href="/#">
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link href="/#">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                        <li>
                          <Link href="/#">
                            <i className="fab fa-youtube" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="menu-backdrop" onClick={handleMobileMenu} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <style jsx>{`
        .header1-row {
          min-height: 72px;
        }
        .header1-logo-img {
          max-height: 48px;
          width: auto;
          display: block;
        }
        .header1-nav-inner {
          justify-content: center;
        }
        .header1-nav-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 0.15rem 1.25rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .header1-nav-list li {
          margin: 0;
        }
        @media (min-width: 1200px) {
          .header1-nav-inner {
            justify-content: flex-start;
          }
          .header1-nav-list {
            justify-content: center;
            flex: 1;
          }
        }
      `}</style>
    </>
  );
}
