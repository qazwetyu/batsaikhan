import Link from "next/link";

export default function About() {
  return (
    <>
      <section id="about" className="about-area section-pt-135 section-pb-140">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-35">
                <span className="sub-title">Бидний Тухай</span>
                <h2 className="title">
                  Сантехникийн салбар дахь 20 жилийн туршлага
                </h2>
              </div>
              <div className="about-content text-center">
                <p>
                  "ЗӨВ ШАН" ХХК нь 2009 онд барилгын засвар, засал чимэглэл,
                  гадаад худалдаа, газар тариалан, аялал жуулчлалын чиглэлээр
                  анх байгуулагдаж байсан бол одоо барилга засвар, сантехникийн
                  угсралт болон усан халаалтын тогоо угсрах, гадна цэвэр бохир
                  ус, гадна дулааны шугам, дотор сантехникийн угсралт, засвар,
                  салхивч агаар сэлгэлт угсралтын ажил эрхэлдэг.
                </p>
                <Link href="contact" className="btn transparent-btn">
                  <div className="btn_m">
                    <div className="btn_c">
                      <div className="btn_t1">Холбогдох</div>
                      <div className="btn_t2">Холбогдох</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
