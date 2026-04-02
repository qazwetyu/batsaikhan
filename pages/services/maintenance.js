import Link from "next/link";
import Layout from "@/components/layout/Layout";

export default function MaintenancePage() {
  return (
    <Layout headerStyle={6}>
      <section className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content">
                <h2 className="title">Засвар үйлчилгээ</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Нүүр</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link href="/services">Үйлчилгээ</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Засвар үйлчилгээ
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
                <img src="/assets/img/images/services_03.png" alt="Засвар үйлчилгээ" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title mb-35">
                  <span className="sub-title">Үйлчилгээ</span>
                  <h2 className="title">Засвар үйлчилгээ</h2>
                </div>
                <p>
                  Ашиглалтад орсон системүүдийн төлөвлөгөөт үзлэг, алдааны
                  оношилгоо, түргэн шуурхай засварыг мэргэжлийн баг хариуцна.
                </p>
                <p>
                  Гэнэтийн эвдрэл саатлыг богино хугацаанд шийдвэрлэж, системийн
                  хэвийн ажиллагааг хадгалахад шаардлагатай зөвлөмж, урьдчилан
                  сэргийлэх төлөвлөгөөг давхар санал болгоно.
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
