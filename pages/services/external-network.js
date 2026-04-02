import Link from "next/link";
import Layout from "@/components/layout/Layout";

export default function ExternalNetworkPage() {
  return (
    <Layout headerStyle={6}>
      <section className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content">
                <h2 className="title">Гадна шугам сүлжээ</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Нүүр</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link href="/services">Үйлчилгээ</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Гадна шугам сүлжээ
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-area-two section-py-140">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img text-center">
                <img src="/assets/img/images/services_02.png" alt="Гадна шугам сүлжээ" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title mb-35">
                  <span className="sub-title">Үйлчилгээ</span>
                  <h2 className="title">Гадна шугам сүлжээ</h2>
                </div>
                <p>
                  Цэвэр, бохир ус болон дулааны гадна шугамын угсралт, өргөтгөл
                  шинэчлэлтийг инженерийн шийдэлтэйгээр хийж гүйцэтгэнэ.
                </p>
                <p>
                  Талбайн нөхцөлд тохирсон техникийн оновчтой шийдэл гаргаж, газар
                  шорооны ажил, угсралт, туршилт тохируулгыг нэг цэгээс зохион
                  байгуулна.
                </p>
                <Link href="/contact" className="btn transparent-btn">
                  <div className="btn_m">
                    <div className="btn_c">
                      <div className="btn_t1">Холбоо барих</div>
                      <div className="btn_t2">Холбоо барих</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
