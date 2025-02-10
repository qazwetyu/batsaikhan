import Link from "next/link";

export default function Blog() {
  return (
    <>
      <section className="blog-area section-pt-140 blog-pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-title mb-50">
                <span className="sub-title">Мэдээ Мэдээлэл</span>
                <h2 className="title">
                  Хамгийн сүүлийн үеийн мэдээ, зах зээлийн шинэчлэл, манай
                  багийн талаарх ойлголтыг олж аваарай.
                </h2>
                <Link href="blog" className="btn transparent-btn">
                  <div className="btn_m">
                    <div className="btn_c">
                      <div className="btn_t1">Бүгдийг үзэх</div>
                      <div className="btn_t2">Бүгдийг үзэх</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="blog-item-wrap">
                <div className="row">
                  <div className="col-md-6">
                    <div className="blog-item">
                      <div className="blog-thumb">
                        <Link href="blog-details">
                          <img src="/assets/img/blog/blog_img01.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="blog-content">
                        <h2 className="title">
                          <Link href="blog-details">
                            Барилгын материалын үнэ ханшийн мэдээлэл 2023 оны
                            7-р сар{" "}
                          </Link>
                        </h2>
                        <div className="blog-meta">
                          <ul className="list-wrap">
                            <li>May 19, {new Date().getFullYear()}</li>
                            <li>
                              <Link href="blog">Жаргал</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="blog-item">
                      <div className="blog-thumb">
                        <Link href="blog-details">
                          <img src="/assets/img/blog/blog_img02.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="blog-content">
                        <h2 className="title">
                          <Link href="blog-details">
                            Сантехник бол барилгын амин судас юм
                          </Link>
                        </h2>
                        <div className="blog-meta">
                          <ul className="list-wrap">
                            <li>January 10, {new Date().getFullYear()}</li>
                            <li>
                              <Link href="blog">Жаргал</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="blog-item">
                      <div className="blog-thumb">
                        <Link href="blog-details">
                          <img src="/assets/img/blog/blog_img03.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="blog-content">
                        <h2 className="title">
                          <Link href="blog-details">
                            Барилгын материалын үнэ ханшийн мэдээлэл 2023 оны
                            7-р сар{" "}
                          </Link>
                        </h2>
                        <div className="blog-meta">
                          <ul className="list-wrap">
                            <li>January 30, {new Date().getFullYear()}</li>
                            <li>
                              <Link href="blog">Жаргал</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="blog-item">
                      <div className="blog-thumb">
                        <Link href="blog-details">
                          <img src="/assets/img/blog/blog_img04.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="blog-content">
                        <h2 className="title">
                          <Link href="blog-details">Дэвшилтэт технологи</Link>
                        </h2>
                        <div className="blog-meta">
                          <ul className="list-wrap">
                            <li>November 29, {new Date().getFullYear()}</li>
                            <li>
                              <Link href="blog">Жаргал</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
