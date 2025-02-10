import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Custom404() {
  return (
    <>
      <Layout headerStyle={6}>
        <section className="error-area">
          <div className="error-shape" />
          <div className="container">
            <div className="row">
              <div className="col-xl-10">
                <div className="error-content">
                  <h2 className="title">
                    Магадгүй энэ хуудас устсан байх 404 эррор шүү
                  </h2>
                  <Link href="/" className="btn">
                    <div className="btn_m">
                      <div className="btn_c">
                        <div className="btn_t1">Үндсэн цэс рүү буцах</div>
                        <div className="btn_t2">Үндсэн цэс рүү буцах</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-text">
            <p>
              Оюуны өмч © <span>Зөвшан</span> {new Date().getFullYear()}. Бүх
              эрх хуулиар хамгаалагдсан.
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
}
