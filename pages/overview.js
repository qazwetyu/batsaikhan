import Link from "next/link";
import Layout from "@/components/layout/Layout";

export default function Overview() {
  return (
    <Layout headerStyle={6}>
      <section className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content">
                <h2 className="title">Бидний тухай</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Нүүр</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Бидний тухай
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
                <img src="/assets/img/images/about_img.jpg" alt="Компанийн танилцуулга" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title mb-40">
                  <span className="sub-title">ЗӨВШАН ХХК</span>
                  <h2 className="title">Сантехник, шугам сүлжээний найдвартай түнш</h2>
                </div>
                <p>
                  Манай компани барилгын дотор болон гадна сантехникийн угсралт,
                  шугам сүлжээний ажил, засвар үйлчилгээний чиглэлээр олон жилийн
                  туршлагатай. Төсөл бүр дээр чанар, аюулгүй ажиллагаа, хугацааны
                  сахилга батыг нэн тэргүүнд баримталдаг.
                </p>
                <p>
                  Бид захиалагчийн хэрэгцээнд нийцсэн инженерийн шийдлийг санал
                  болгож, зураг төсөл боловсруулах үе шатнаас хүлээлгэн өгөх хүртэл
                  мэргэжлийн баг хамт олноороо бүрэн дэмжлэг үзүүлдэг.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission-area section-pb-140">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="vm-box">
                <div className="vm-icon"><i className="fas fa-eye"></i></div>
                <h3 className="vm-title">Алсын хараа</h3>
                <p>Монгол улсын барилгын салбарт инженерийн шилдэг шийдэл, чанартай гүйцэтгэлээрээ тэргүүлэгч, найдвартай түнш компани болох.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-8">
              <div className="vm-box">
                <div className="vm-icon"><i className="fas fa-bullseye"></i></div>
                <h3 className="vm-title">Үнэт зүйлс</h3>
                <ul className="vm-list">
                  <li><i className="fas fa-check-circle"></i> Хөдөлмөрийн аюулгүй байдал нэгдүгээрт</li>
                  <li><i className="fas fa-check-circle"></i> Чанар ба Стандарт</li>
                  <li><i className="fas fa-check-circle"></i> Мэргэшсэн баг хамт олон</li>
                  <li><i className="fas fa-check-circle"></i> Хариуцлага ба Итгэлцэл</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licenses Section */}
      <section className="licenses-area section-py-140 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center mb-50">
                <span className="sub-title">Баталгаа</span>
                <h2 className="title">Тусгай зөвшөөрөл</h2>
                <p className="mt-3">Бид хууль тогтоомж, стандартын дагуу холбогдох эрх бүхий байгууллагуудаас олгосон тусгай зөвшөөрлийн хүрээнд үйл ажиллагаа явуулдаг.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="license-card">
                <div className="icon"><i className="fas fa-certificate"></i></div>
                <h4>Барилгын дотор сантехник</h4>
                <p>Ус хангамж, ариутгах татуурга, халаалт, салхивч угсралт</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="license-card">
                <div className="icon"><i className="fas fa-certificate"></i></div>
                <h4>Гадна шугам сүлжээ</h4>
                <p>Гадна цэвэр, бохир ус болон дулааны шугам сүлжээний угсралт</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-area section-py-140">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center mb-50">
                <span className="sub-title">Баг хамт олон</span>
                <h2 className="title">Мэргэшсэн инженерүүд</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="team-item text-center">
                <div className="team-icon-placeholder"><i className="fas fa-user-tie"></i></div>
                <div className="team-content mt-3">
                  <h4 className="title">Зөвлөх инженер</h4>
                  <span>20+ жилийн туршлага</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="team-item text-center">
                <div className="team-icon-placeholder"><i className="fas fa-hard-hat"></i></div>
                <div className="team-content mt-3">
                  <h4 className="title">Ахлах инженер</h4>
                  <span>15+ жилийн туршлага</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="team-item text-center">
                <div className="team-icon-placeholder"><i className="fas fa-hard-hat"></i></div>
                <div className="team-content mt-3">
                  <h4 className="title">Талбайн инженерүүд</h4>
                  <span>Мэргэшсэн зэрэгтэй</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="team-item text-center">
                <div className="team-icon-placeholder"><i className="fas fa-tools"></i></div>
                <div className="team-content mt-3">
                  <h4 className="title">Угсралтын баг</h4>
                  <span>Мэргэжлийн үнэмлэхтэй ажилчид</span>
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
        .vm-box {
          background: #fff;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
          height: 100%;
          margin-bottom: 30px;
        }
        .vm-icon {
          font-size: 40px;
          color: var(--tg-primary-color);
          margin-bottom: 20px;
        }
        .vm-title {
          font-size: 24px;
          margin-bottom: 15px;
        }
        .vm-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .vm-list li {
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .vm-list li i {
          color: var(--tg-primary-color);
        }
        .license-card {
          background: #fff;
          padding: 40px 30px;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
          height: 100%;
          margin-bottom: 30px;
          transition: 0.3s;
        }
        .license-card:hover {
          transform: translateY(-5px);
        }
        .license-card .icon {
          font-size: 45px;
          color: var(--tg-primary-color);
          margin-bottom: 20px;
        }
        .team-icon-placeholder {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: var(--tg-secondary-background);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          font-size: 45px;
          color: var(--tg-primary-color);
        }
      `}</style>
    </Layout>
  );
}