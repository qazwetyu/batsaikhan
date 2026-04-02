import Link from "next/link";
import Layout from "@/components/layout/Layout";
import Services from "@/components/sections/Services";

export default function ServicePage() {
  return (
    <Layout headerStyle={6}>
      <section className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content">
                <h2 className="title">Үйлчилгээ</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Нүүр</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Үйлчилгээ
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />

      {/* Work Process Section */}
      <section className="work-process-area section-py-140 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center mb-50">
                <span className="sub-title">Бид хэрхэн ажилладаг вэ?</span>
                <h2 className="title">Ажлын процесс</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="process-item text-center">
                <div className="icon">
                  <span>01</span>
                  <i className="fas fa-drafting-compass"></i>
                </div>
                <h4 className="title">Зураг төсөл, Төсөв</h4>
                <p>Төслийн шаардлагатай танилцаж, зураг болон төсөв боловсруулна.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="process-item text-center">
                <div className="icon">
                  <span>02</span>
                  <i className="fas fa-file-signature"></i>
                </div>
                <h4 className="title">Гэрээ байгуулах</h4>
                <p>Ажлын нөхцөл, хугацаагаа тохиролцон гэрээ байгуулж баталгаажуулна.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="process-item text-center">
                <div className="icon">
                  <span>03</span>
                  <i className="fas fa-cogs"></i>
                </div>
                <h4 className="title">Угсралт, Гүйцэтгэл</h4>
                <p>Төлөвлөгөөний дагуу мэргэжлийн баг талбай дээр угсралтын ажлыг гүйцэтгэнэ.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="process-item text-center">
                <div className="icon">
                  <span>04</span>
                  <i className="fas fa-clipboard-check"></i>
                </div>
                <h4 className="title">Тест, Хүлээлгэн өгөх</h4>
                <p>Даралтын болон ажиллагааны тест хийж, захиалагчид бүрэн хүлээлгэн өгнө.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Brands Section */}
      <section className="materials-area section-py-140">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="materials-content">
                <div className="section-title mb-40">
                  <span className="sub-title">Чанарын баталгаа</span>
                  <h2 className="title">Олон улсын стандартад нийцсэн материал</h2>
                </div>
                <p>
                  Бид чанартай үйлчилгээний гол үндэс нь сайн материал гэж үздэг. Тиймээс барилгын шугам сүлжээ, сантехникийн угсралтад олон улсад хүлээн зөвшөөрөгдсөн тэргүүлэгч брэндүүдийн (ОХУ, Европ, БНСУ зэрэг) тоног төхөөрөмж, холбох хэрэгслийг ашигладаг.
                </p>
                <ul className="materials-list mt-4">
                  <li><i className="fas fa-check"></i> Удаан эдэлгээтэй, баталгаат шугам хоолой</li>
                  <li><i className="fas fa-check"></i> Өндөр хүчин чадалтай насос, төхөөрөмжүүд</li>
                  <li><i className="fas fa-check"></i> Найдвартай ажиллагаатай хаалт, арматур</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="materials-img text-center">
                {/* Placeholders for material or brand collage */}
                <div className="row g-3">
                  <div className="col-6">
                    <img src="/assets/img/project/project_img12.jpg" alt="Материал" className="img-fluid rounded" />
                  </div>
                  <div className="col-6">
                    <img src="/assets/img/project/h2_project_img02.jpg" alt="Тоног төхөөрөмж" className="img-fluid rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .bg-light {
          background-color: var(--tg-secondary-background);
        }
        .process-item {
          margin-bottom: 30px;
        }
        .process-item .icon {
          position: relative;
          width: 100px;
          height: 100px;
          margin: 0 auto 20px;
          border-radius: 50%;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 35px;
          color: var(--tg-primary-color);
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
        .process-item .icon span {
          position: absolute;
          top: -5px;
          right: -5px;
          width: 35px;
          height: 35px;
          background: var(--tg-primary-color);
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
        }
        .materials-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .materials-list li {
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .materials-list li i {
          color: var(--tg-primary-color);
        }
      `}</style>
    </Layout>
  );
}
