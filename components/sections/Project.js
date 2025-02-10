import Link from "next/link";

export default function Project() {
  return (
    <>
      <section className="project-area section-py-140">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center mb-60">
                <span className="sub-title">Төслүүд</span>
                <h2 className="title">
                  Бидний хийсэн болон хийж гүйцэтгэж буй төслүүдтэй танилцана уу
                </h2>
              </div>
            </div>
          </div>
          <div className="project-item-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="project-item">
                  <div className="project-thumb">
                    <Link href="project-details">
                      <img src="/assets/img/project/project_img01.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="project-content">
                    <h3 className="title">
                      <Link href="project-details">Буянт од Хотхон</Link>
                    </h3>
                    <span>ОД ХХК</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="project-item">
                  <div className="project-thumb">
                    <Link href="project-details">
                      <img src="/assets/img/project/project_img02.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="project-content">
                    <h3 className="title">
                      <Link href="project-details">
                        {" "}
                        Мянганы төгөл Цогцолбор{" "}
                      </Link>
                    </h3>
                    <span> “Мянганы төгөл” ХХК</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="project-item">
                  <div className="project-thumb">
                    <Link href="project-details">
                      <img src="/assets/img/project/project_img03.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="project-content">
                    <h3 className="title">
                      <Link href="project-details">
                        Содон Стандарт хороолол
                      </Link>
                    </h3>
                    <span>Тесо Проперти</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="project-item">
                  <div className="project-thumb">
                    <Link href="project-details">
                      <img src="/assets/img/project/project_img04.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="project-content">
                    <h3 className="title">
                      <Link href="project-details">GS 13</Link>
                    </h3>
                    <span>Герман стандарт ХХК</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="view-all-btn text-center">
              <Link href="project" className="btn transparent-btn">
                <div className="btn_m">
                  <div className="btn_c">
                    <div className="btn_t1">Бүгдийг харах</div>
                    <div className="btn_t2">Бүгдийг харах</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
