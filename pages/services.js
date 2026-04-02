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
    </Layout>
  );
}
