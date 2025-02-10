import Link from "next/link";
import MobileMenu from "./MobileMenu";

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
                    <div className="row align-items-center">
                      <div className="col-xl-2">
                        <div className="header-mail">
                          <Link href="mailto:batsaikhan3040@yahoo.com">
                            batsaikhan3040@yahoo.com{" "}
                          </Link>
                        </div>
                      </div>
                      <div className="col-xl-8">
                        <div className="logo mobile-logo d-none">
                          <Link href="/">
                            <img src="/assets/img/logo/logo.png" alt="Logo" />
                          </Link>
                          <Link href="/" className="d-none sticky-logo">
                            <img src="/assets/img/logo/logo02.png" alt="Logo" />
                          </Link>
                        </div>
                        <div className="navbar-wrap main-menu d-none d-lg-flex">
                          <ul className="navigation">
                            <li className="active menu-item-has-children"></li>
                            <li className="menu-item-has-children">
                              <Link href="/overview">Бидний тухай</Link>
                            </li>
                            <li className="menu-item-has-children">
                              <Link href="/project">Төслүүд</Link>
                            </li>
                          </ul>
                          <div className="logo">
                            <Link href="/">
                              <img src="/assets/img/logo/logo.png" alt="Logo" />
                            </Link>
                          </div>
                          <div className="logo d-none">
                            <Link href="/">
                              <img
                                src="/assets/img/logo/logo02.png"
                                alt="Logo"
                              />
                            </Link>
                          </div>
                          <ul className="navigation right">
                            <li className="menu-item-has-children">
                              <Link href="/blog">Блог</Link>
                            </li>

                            <li>
                              <Link href="/contact">Холбогдох</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xl-2">
                        <div className="header-contact text-end">
                          <Link href="/tel:+97699070200">+976 9907-0200</Link>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                  <nav className="menu-box">
                    <div className="close-btn" onClick={handleMobileMenu}>
                      <i className="fas fa-times" />
                    </div>
                    <div className="nav-logo">
                      <Link href="/">
                        <img src="/assets/img/logo/logo02.png" alt="Logo" />
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
                {/* End Mobile Menu */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
