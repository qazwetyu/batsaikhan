import Link from "next/link";
import Layout from "@/components/layout/Layout";

const infoItems = [
  {
    label: "Утас",
    value: "+976 9907 0200",
    href: "tel:+97699070200",
    icon: "fas fa-phone-alt",
  },
  {
    label: "И-мэйл",
    value: "batsaikhan3040@yahoo.com",
    href: "mailto:batsaikhan3040@yahoo.com",
    icon: "fas fa-envelope",
  },
  {
    label: "Хаяг",
    value: "Улаанбаатар хот, Монгол Улс",
    href: "#contact-map",
    icon: "fas fa-map-marker-alt",
  },
];

export default function Contact() {
  return (
    <Layout headerStyle={6}>
      <section className="contact-soft-hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-main">
              <span className="chip">Холбоо барих</span>
              <h1>Төслөө бидэнтэй эхлүүлэх уу</h1>
              <p>
                Сантехник, шугам сүлжээний ажлын үнийн санал болон техникийн
                зөвлөгөөг нэг цэгээс авч, цаг хэмнээрэй.
              </p>
              <div className="hero-actions">
                <Link href="tel:+97699070200" className="btn-primary-soft">
                  <i className="fas fa-phone-alt" /> Шууд залгах
                </Link>
                <Link href="#contact-map" className="btn-ghost-soft">
                  Байршил харах
                </Link>
              </div>
            </div>
            <div className="hero-card">
              <p className="hero-card-label">Ажлын цаг</p>
              <p className="hero-card-line">Даваа – Баасан · 09:00 – 18:00</p>
              <p className="hero-card-line muted">Бямба · 10:00 – 16:00</p>
              <div className="hero-card-foot">
                <span>Яаралтай дуудлага</span>
                <strong>24/7</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-py-140 contact-body">
        <div className="container">
          <div className="row g-4">
            {infoItems.map((item) => (
              <div className="col-lg-4 col-md-6" key={item.label}>
                <Link href={item.href} className="info-box">
                  <div className="info-icon-wrap">
                    <i className={item.icon} />
                  </div>
                  <div>
                    <span>{item.label}</span>
                    <h4>{item.value}</h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="form-shell">
            <div className="row">
              <div className="col-lg-5">
                <h3>Хүсэлт илгээх</h3>
                <p>
                  Объектын төрөл, ажлын хүрээ, хүссэн хугацаагаа товч бичээрэй.
                  Бид 1 ажлын өдөрт дотор танд хариу өгнө.
                </p>
              </div>
              <div className="col-lg-7">
                <form action="#" className="contact-form-min">
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" placeholder="Таны нэр" required />
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Утасны дугаар" required />
                    </div>
                    <div className="col-12">
                      <textarea rows="5" placeholder="Ажлын товч мэдээлэл" />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn-primary-soft">
                        Хүсэлт илгээх
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-area">
        <div className="container">
          <div id="contact-map" className="map-shell">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2517.565014621367!2d106.92038747011303!3d47.903560202133825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693e393c4b51b%3A0x908a66fe8cec94db!2z0JPQu9C-0LHQsNC7INCi0LDRg9C9!5e0!3m2!1sen!2smn!4v1690176626593!5m2!1sen!2smn"
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Зөвшан ХХК байршил"
            />
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Сайтын үндсэн өнгө: public/assets/css/style.css :root --tg-* */
        .contact-soft-hero {
          padding: 120px 0 80px;
          background: var(--tg-gradient-color);
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr minmax(260px, 320px);
          gap: 40px;
          align-items: start;
        }
        .hero-main {
          max-width: 620px;
        }
        .chip {
          display: inline-block;
          color: var(--tg-primary-color);
          background: var(--tg-secondary-background);
          border: 1px solid color-mix(in srgb, var(--tg-primary-color) 32%, transparent);
          padding: 8px 16px;
          font-size: 13px;
          letter-spacing: 0.02em;
          font-weight: 600;
          margin-bottom: 18px;
          border-radius: 999px;
        }
        .contact-soft-hero h1 {
          font-family: var(--tg-heading-font-family);
          color: var(--tg-heading-font-color);
          font-size: clamp(2rem, 4vw, 2.75rem);
          line-height: var(--tg-heading-line-height);
          margin-bottom: 16px;
          font-weight: 400;
          letter-spacing: -0.02em;
        }
        .hero-main > p {
          color: var(--tg-paragraph-color);
          max-width: 540px;
          margin-bottom: 26px;
          font-size: 1.05rem;
          line-height: 1.65;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
        }
        .btn-primary-soft {
          background: var(--tg-primary-color);
          color: var(--tg-white);
          border: none;
          border-radius: 12px;
          padding: 14px 22px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 10px 28px color-mix(in srgb, var(--tg-secondary-color) 14%, transparent);
          transition: transform 0.15s ease, filter 0.15s ease, box-shadow 0.15s ease;
        }
        .btn-primary-soft:hover {
          transform: translateY(-1px);
          filter: brightness(1.06);
          color: var(--tg-white);
        }
        .btn-ghost-soft {
          color: var(--tg-primary-color);
          background: var(--tg-body-background-color);
          border: 1px solid color-mix(in srgb, var(--tg-primary-color) 45%, transparent);
          border-radius: 12px;
          padding: 14px 20px;
          font-weight: 600;
          transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
        }
        .btn-ghost-soft:hover {
          background: var(--tg-secondary-background);
          border-color: var(--tg-primary-color);
          color: var(--tg-secondary-color);
        }
        .hero-card {
          background: var(--tg-body-background-color);
          border-radius: 16px;
          padding: 26px 24px;
          box-shadow: 0 8px 36px color-mix(in srgb, var(--tg-secondary-color) 8%, transparent);
          border: 1px solid var(--tg-gray);
        }
        .hero-card-label {
          margin: 0 0 12px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--tg-silver);
        }
        .hero-card-line {
          margin: 0 0 8px;
          color: var(--tg-heading-font-color);
          font-size: 15px;
          line-height: 1.5;
        }
        .hero-card-line.muted {
          color: var(--tg-body-font-color);
          font-size: 14px;
        }
        .hero-card-foot {
          margin-top: 18px;
          padding-top: 16px;
          border-top: 1px solid var(--tg-gray);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .hero-card-foot span {
          font-size: 13px;
          color: var(--tg-body-font-color);
        }
        .hero-card-foot strong {
          color: var(--tg-primary-color);
          font-size: 15px;
        }
        .contact-body {
          background: var(--tg-secondary-background);
        }
        .info-box {
          background: var(--tg-body-background-color);
          border: 1px solid var(--tg-gray);
          border-radius: 14px;
          padding: 22px 20px;
          display: flex;
          gap: 16px;
          align-items: center;
          min-height: 100px;
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
          box-shadow: 0 4px 20px color-mix(in srgb, var(--tg-secondary-color) 5%, transparent);
        }
        .info-box:hover {
          border-color: color-mix(in srgb, var(--tg-primary-color) 40%, var(--tg-gray));
          box-shadow: 0 12px 32px color-mix(in srgb, var(--tg-secondary-color) 10%, transparent);
        }
        .info-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: color-mix(in srgb, var(--tg-primary-color) 14%, var(--tg-secondary-background));
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }
        .info-box i {
          color: var(--tg-primary-color);
          font-size: 18px;
        }
        .info-box span {
          color: var(--tg-body-font-color);
          font-size: 13px;
          display: block;
          margin-bottom: 4px;
        }
        .info-box h4 {
          margin: 0;
          font-size: 16px;
          color: var(--tg-heading-font-color);
          font-weight: 600;
          line-height: 1.4;
        }
        .form-shell {
          margin-top: 40px;
          background: var(--tg-body-background-color);
          border: 1px solid var(--tg-gray);
          border-radius: 16px;
          padding: 36px 40px;
          box-shadow: 0 8px 40px color-mix(in srgb, var(--tg-secondary-color) 7%, transparent);
        }
        .form-shell h3 {
          font-family: var(--tg-heading-font-family);
          margin-bottom: 12px;
          font-size: 1.65rem;
          color: var(--tg-heading-font-color);
          font-weight: 400;
          letter-spacing: -0.02em;
        }
        .form-shell p {
          color: var(--tg-paragraph-color);
          margin: 0;
          line-height: 1.65;
        }
        .contact-form-min input,
        .contact-form-min textarea {
          width: 100%;
          border: 1px solid var(--tg-gray);
          background: var(--tg-secondary-background);
          padding: 14px 16px;
          margin-bottom: 14px;
          border-radius: 10px;
          color: var(--tg-heading-font-color);
          font-size: 15px;
          font-family: var(--tg-body-font-family);
          transition: border-color 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
        }
        .contact-form-min input:focus,
        .contact-form-min textarea:focus {
          outline: none;
          border-color: var(--tg-primary-color);
          background: var(--tg-body-background-color);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--tg-primary-color) 22%, transparent);
        }
        .contact-form-min button {
          margin-top: 4px;
        }
        .map-shell {
          border-radius: 16px;
          margin-bottom: 140px;
          overflow: hidden;
          border: 1px solid var(--tg-gray);
          box-shadow: 0 10px 40px color-mix(in srgb, var(--tg-secondary-color) 10%, transparent);
        }
        #contact-map iframe {
          width: 100%;
          min-height: 420px;
          display: block;
        }
        @media (max-width: 991px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }
          .form-shell {
            padding: 28px 22px;
          }
        }
      `}</style>
    </Layout>
  );
}
