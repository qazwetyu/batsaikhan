import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "@/components/layout/Layout";
import projectData from "@/util/project.json";

const projectDetails = {
  1: {
    subtitle: "Орон сууцны цогцолбор",
    overview:
      "Буянт Од хотхон нь Улаанбаатарын зүүн бүсэд баригдаж буй орон сууцны төсөл бөгөөд орчин цагийн инженерийн шийдэл, олон айлын тав тухтай амьдрах орчинг бүрдүүлэх зорилготой. ЗӨВШАН ХХК энэ төсөл дээр сантехник, шугам сүлжээний мэргэжлийн ажлыг гүйцэтгэсэн.",
    bodyParagraphs: [
      "Төслийн үндсэн үзүүлэлтийн хувьд 7 давхар, 16 блок бүхий орон сууц бүрэн баригдаж байна. Гэр бүл бүрийн хэрэгцээнд нийцсэн олон төрлийн байрны сонголт, цогц дэд бүтцийн шийдэл бүтээнэ.",
      "Барилгын чанар, аюулгүй байдалд онцгой анхаарч, орчин үеийн стандартын сантехник, цахилгаан, усны системийн угсралт хийгддэг. Ойролцоох сургууль, цэцэрлэг, худалдаа, нийтийн тээвэрт гарцтай байршлыг сонгосон төлөвлөлттэй.",
    ],
    scope: "7 давхар, 16 блок, орон сууцны цогцолбор",
    structure:
      "Төмөр бетон цутгамал хийц, инженерийн шугам сүлжээнд холбогдсон, орчин үеийн сантехникийн шийдэлтэй",
    highlights: [
      "7 давхар, 16 блоктой уян хатан орон сууцны төлөвлөлт",
      "Гэр бүлийн хэрэгцээнд тохирох байрны төрөл, сонголт",
      "Дэд бүтэц, инженерийн сүлжээнд нэгдсэн шийдэл",
      "Аюулгүй, чанартай усны болон дулааны систем",
      "Ойр орчны үйлчилгээ, сургууль, цэцэрлэгтой гарцтай байршил",
    ],
    note: "Нэмэлт танилцуулгыг доорх зар мэдээнээс үзэж болно.",
    sources: [{ label: "Barilga.mn — Буянт Од хотхон", url: "http://www.barilga.mn/a/324/" }],
  },
  2: {
    subtitle: "Гэр бүлийн амралт, жуулчны цогцолбор",
    overview:
      "Манай байгууллага 2007 онд үүсгэн байгуулагдсан. 2021 оноос эхлэн дөрвөн улиралд үйл ажиллагаа явуулж болох нөхцөл бүрдсэн. 60 хүний багтаамжтай, байгалийн сайхан орчинд гэр бүлийн амралт, жуулчны тохилог баазыг бүрэн ашиглалтад оруулж, дэд бүтэц болон халуун дулааны асуудлыг бүрэн шийдвэрлэсэн.",
    bodyParagraphs: [
      "Эрүүл агаарт үйлчлүүлэгч бүрт ая тухтай амрах, таатай орчин нөхцөлийг бүрдүүлэхийн төлөө ажиллаж байна.",
      "Хайртай дотны хүмүүстэйгээ байгалийн үзэсгэлэнт газар, цэвэр агаарт ирж тухлан амрахыг урьж байна.",
      "Хотын утаа, агаар хөрсний бохирдол, түгжрэл, стрессээс хэд хоног холдож тархи толгойгоо амрааж, эрүүл мэнддээ анхаарч амрахыг хүсвэл бидэнтэй холбоо барина уу.",
    ],
    scope: "60 хүний багтаамж, дөрвөн улирлын үйлчилгээ, бүрэн дэд бүтэц",
    structure: "Халуун дулааны шийдэлтэй, усан хангамж, инженерийн сүлжээнд зохистой тохиргоотой амралтын цогцолбор",
    highlights: [
      "2007 онд үүсгэн байгуулагдсан туршлагатай баг",
      "2021 оноос дөрвөн улиралд үйлчилгээ үзүүлдэг",
      "Гол, уул мод, Богд хан уулын энгэр — байгаль дундах байршил",
      "Дулаан, ус, дэд бүтцийн асуудлыг бүрэн шийдсэн",
      "Гэр бүл, жуулчдад зориулсан амтат амралтын орчин",
    ],
    valuesBlock: [
      {
        label: "Алсын хараа",
        text: "Дотоод болон гадаадын амрагч, жуулчдын хэрэгцээ, шаардлагад нийцсэн үйлчилгээгээр хангаж ажиллана.",
      },
      { label: "Эрхэм зорилго", text: "Үйлчлүүлэгчийн тав тух, сэтгэл ханамж." },
      { label: "Уриа", text: "Таны гэр бүлийн халуун дулаан уур амьсгал." },
      {
        label: "Үнэт зүйлс",
        text: "Үйлчлүүлэгчийн сэтгэл ханамж бидний үнэт зүйлс.",
      },
    ],
    phones: [
      { label: "Захиалга, мэдээлэл", tel: "+97699882337", display: "9988-2337" },
      { label: "Утас", tel: "+97690882337", display: "9088-2337" },
    ],
    addressLine:
      "Хонхор Төр хурхын аманд, хөлийн голын хөвөөнд, Богд хан уулын энгэрт, ой модон дунд байрладаг.",
    galleryUrl:
      "https://huree.mn/listings/%D0%BC%D1%8F%D0%BD%D0%B3%D0%B0%D0%BD%D1%8B-%D1%82%D3%A9%D0%B3%D3%A9%D0%BB-%D1%86%D0%BE%D0%B3%D1%86%D0%BE%D0%BB%D0%B1%D0%BE%D1%80/",
    note: "Зургийн цомог, нэмэлт танилцуулгыг доорх Huree.mn хуудас болон дээрх утсаар лавлана уу.",
    sources: [
      {
        label: "Huree.mn — Мянганы төгөл цогцолбор (зураг, жагсаалт)",
        url: "https://huree.mn/listings/%D0%BC%D1%8F%D0%BD%D0%B3%D0%B0%D0%BD%D1%8B-%D1%82%D3%A9%D0%B3%D3%A9%D0%BB-%D1%86%D0%BE%D0%B3%D1%86%D0%BE%D0%BB%D0%B1%D0%BE%D1%80/",
      },
    ],
  },
  3: {
    subtitle: "Содон стандарт цогцолбор хороолол",
    overview:
      "«Тэсо констракшн» ХХК-ийн хэрэгжүүлсэн Содон стандарт цогцолбор хороолол нь Улаанбаатар хотод олон мянган өрхийн амьдралын чанарт нөлөөлсөн томоохон бүтээн байгуулалт юм. Доод давхартуудад үйлчилгээний талбайтай олон блок орон сууцыг цогц байдлаар хөгжүүлснээр иргэдэд таатай, зохистой орчныг бүрдүүлэхэд чиглэсэн.",
    bodyParagraphs: [
      "Төсөл нь нийт 6,7 га газрыг хамарсан, зоорьтой, 16 давхар, 15,5 блок, 31 орц бүхий 3520 өрхийг багтаасан орон сууц болон бусад байгууламжуудыг агуулсан иж бүрэн цогцолбор хороолол ажээ (Барилга.МН сэтгүүлд нийтлэгдсэн мэдээллээс).",
      "Улсын сургууль, цэцэрлэг, спортын цогцолборыг байгуулахаар төлөвлөсний дагуу 120 хүүхдийн цэцэрлэгийн барилгыг ашиглалтад өгсөн; цаашид нэмэлт блок орон сууц, 280 хүүхдийн цэцэрлэг зэрэг ажлууд үргэлжилсээр байсан — энэ нь оршин суугчдын нийгмийн үйлчилгээг бодитоор дэмжсэн алхам болжээ.",
      "Гаднах тоглоомын талбай, хөшөө баримал, мод, салхивч зэргээр ногоон, амьсгал сэлгэх боломжтой орчин бүрэлдүүлсэн. Сургууль, цэцэрлэг, спорт, кафе, ресторан, гоо сайхан, банк зэрэг өдөр тутмын үйлчилгээг нэг газраас авахуйц жинхэнэ «цогцолбор»-ын загварыг хэрэгжүүлсэн байна.",
    ],
    scope: "6,7 га талбай, 16 давхар, 15,5 блок, 31 орц, 3520 өрхийн орон сууцны цогцолбор",
    structure: "Бүрэн цутгамал хийц, зоорьтой, олон блок, доод давхарт үйлчилгээний талбайтай",
    highlights: [
      "Доод давхарт үйлчилгээ, олон блок орон сууц — бодит «цогцолборын» загвар",
      "3520 айлын орон сууц, 16 давхар, 31 орц — хотын хэмжээнд анхаарал татах төсөл",
      "120 болон 280 хүүхдийн цэцэрлэгийн төлөвлөлт, барилгын ажил (нийтлэл)",
      "Сургууль, спорт, кофе, ресторан, эмийн сан, банк гэх мэт цогц үйлчилгээ",
      "Ипотекийн зээл, урьдчилгаа, барьцааны уян хатан нөхцөл санал болгож байсан (дэлгэрэнгүйг эх сурвалжаас)",
    ],
    note: "Дэлгэрэнгүй ярилцлага, тоо баримтыг доорх Barilga.mn-ийн нийтлэлээс уншиж болно.",
    sources: [
      {
        label: "Barilga.mn — «Аз жаргалд хөтлөгч Содон хороолол»",
        url: "https://www.barilga.mn/n/9256/",
      },
      {
        label: "ECC — Содон стандарт хороолол (товч бүртгэл)",
        url: "http://ecc.mn/project/%D1%81%D0%BE%D0%B4%D0%BE%D0%BD-%D1%81%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82-%D1%85%D0%BE%D1%80%D0%BE%D0%BE%D0%BB%D0%BE%D0%BB/",
      },
    ],
  },
  4: {
    subtitle: "Герман стандарт ХХК-ийн орон сууц",
    overview:
      "GS 13 нь «Герман стандарт» ХХК-ийн төсөл бөгөөд Баянзүрх дүүргийн 6-р хорооны нутаг дэвсгэрт, Бөхийн өргөөний баруун урд орчимд байрладаг 12 давхар орон сууцны барилга юм. Дэлхийд нэр хүндтэй германы барилгын материал, тоноглолыг ашигласан, аюулгүй амьдралд тохирсон шийдэл бүхий төсөл гэж мэргэжлийн хэвлэлд танилцуулсан.",
    bodyParagraphs: [
      "Нийт 77 айлын орон сууцтай: давхар бүрт ойролцоогоор долоон айлын байрлалтай төлөвлөгдсөн гэж мэдээлэгддэг. В1, В2 давхруудад автомашины зогсоол, 1-р давхарт үйлчилгээний талбай байхаар төлөвлөгджээ.",
      "Сууцны төрөлд 2–4 өрөөний сонголт бий. Жишээ нь: 4 өрөө 95,3–120,6 м², 3 өрөө 72,4–75,5 м², 2 өрөө 47,5–63,2 м² гэх мэт хэмжээтэй төлөвлөлтүүдийг танилцуулсан байдаг.",
    ],
    scope: "12 давхар, 77 айлын орон сууц; 1-р давхар үйлчилгээ, доод давхар зогсоол",
    structure:
      "Цутгамал суурь, хөшүүн ханатай хийц; газар хөдлөлтийн 8 баллд тэсвэртэй гэж танилцуулагдсан",
    highlights: [
      "БЗД, 6-р хороо — Бөхийн өргөөний ойролцоо байршил",
      "12 давхар, 77 айл; 2–4 өрөөний төрөл",
      "В1, В2 — автомашины зогсоол, 1-р давхар — үйлчилгээний талбай",
      "Германы стандарт материал, тоноглолыг ашигласан гэж танилцуулсан",
      "Орчин үеийн интерьер, аюулгүй амьдрах нөхцөлд төвлөрсөн",
    ],
    note: "Илүү нарийн тодорхойлолтыг доорх News.mn-ийн нийтлэлээс уншиж болно.",
    sources: [{ label: "News.mn — GS 13 орон сууцны танилцуулга", url: "https://news.mn/r/111005/" }],
  },
};

export default function ProjectDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const project = projectData.find((item) => String(item.id) === String(id));
  const detail = project ? projectDetails[project.id] : null;

  if (!project) {
    return (
      <Layout headerStyle={6}>
        <section className="section-py-140">
          <div className="container text-center">
            <h2>Төсөл олдсонгүй</h2>
            <Link href="/project" className="btn transparent-btn">
              <div className="btn_m">
                <div className="btn_c">
                  <div className="btn_t1">Төслүүд рүү буцах</div>
                  <div className="btn_t2">Төслүүд рүү буцах</div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout headerStyle={6}>
      <section className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content">
                <h2 className="title">{project.title}</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Нүүр</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link href="/project">Төслүүд</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {project.title}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-single-area section-py-140">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="project-single-main">
                <img
                  src={`/assets/img/project/${project.img}`}
                  alt={project.title}
                  className="project-main-image"
                />
                <div className="project-copy">
                  <span className="project-tag">{detail?.subtitle || "Төслийн мэдээлэл"}</span>
                  <h3>{project.title}</h3>
                  <p className="project-lead">
                    {detail?.overview || "Төслийн дэлгэрэнгүй мэдээлэл удахгүй нэмэгдэнэ."}
                  </p>
                  {(detail?.bodyParagraphs || []).map((para, idx) => (
                    <p className="project-body-p" key={idx}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="project-side-card">
                <h4>Үндсэн мэдээлэл</h4>
                <ul>
                  <li>
                    <span>Байршил</span>
                    <strong>{project.location}</strong>
                  </li>
                  <li>
                    <span>Төрөл</span>
                    <strong>{project.type}</strong>
                  </li>
                  <li>
                    <span>Төлөв</span>
                    <strong>{project.status}</strong>
                  </li>
                  <li>
                    <span>Хүрээ</span>
                    <strong>{detail?.scope || "Нэмэгдэж байна"}</strong>
                  </li>
                  <li>
                    <span>Хийцлэл</span>
                    <strong>{detail?.structure || "Нэмэгдэж байна"}</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {detail?.valuesBlock?.length ? (
            <div className="project-section-block project-values-grid">
              <h4>Зорилго, үнэт зүйлс</h4>
              <div className="row g-3">
                {detail.valuesBlock.map((row) => (
                  <div className="col-md-6" key={row.label}>
                    <div className="value-card">
                      <strong>{row.label}</strong>
                      <p>{row.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {(detail?.phones?.length || detail?.addressLine || detail?.galleryUrl) ? (
            <div className="project-section-block project-contact-strip">
              <h4>Холбоо барих / зураг</h4>
              <div className="row g-3">
                {detail?.phones?.length ? (
                  <div className="col-md-6">
                    <ul className="project-phone-list">
                      {detail.phones.map((ph) => (
                        <li key={ph.tel}>
                          <span>{ph.label}</span>
                          <Link href={`tel:${ph.tel.replace(/\s/g, "")}`}>{ph.display}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {detail?.addressLine ? (
                  <div className="col-md-6">
                    <p className="project-address">
                      <strong>Хаяг:</strong> {detail.addressLine}
                    </p>
                  </div>
                ) : null}
                {detail?.galleryUrl ? (
                  <div className="col-12">
                    <Link
                      href={detail.galleryUrl}
                      className="gallery-link-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Зургийн цомог, жагсаалт нээх (Huree.mn)
                    </Link>
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}

          <div className="project-section-block">
            <h4>Төслийн онцлогууд</h4>
            <div className="row g-4">
              {(detail?.highlights || []).map((item) => (
                <div className="col-md-6" key={item}>
                  <div className="highlight-item">
                    <i className="fas fa-check-circle" />
                    <p>{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="project-section-block">
            <h4>Тайлбар</h4>
            <p>{detail?.note || "Нэмэлт тайлбаргүй."}</p>
          </div>

          <div className="project-section-block">
            <h4>Эх сурвалж</h4>
            <ul className="source-list">
              {(detail?.sources || []).map((source) => (
                <li key={source.url}>
                  <Link href={source.url} target="_blank" rel="noopener noreferrer">
                    {source.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <style jsx>{`
        .project-main-image {
          width: 100%;
          border-radius: 10px;
          margin-bottom: 24px;
        }
        .project-copy h3 {
          font-family: var(--tg-heading-font-family);
          color: var(--tg-heading-font-color);
          font-size: 34px;
          margin: 12px 0 14px;
        }
        .project-copy .project-lead {
          color: var(--tg-paragraph-color);
          font-size: 1.05rem;
          line-height: 1.75;
          margin-bottom: 1rem;
        }
        .project-body-p {
          color: var(--tg-paragraph-color);
          line-height: 1.8;
          margin-bottom: 0.85rem;
        }
        .value-card {
          border: 1px solid var(--tg-gray);
          border-radius: 10px;
          padding: 18px 20px;
          height: 100%;
          background: var(--tg-secondary-background);
        }
        .value-card strong {
          display: block;
          color: var(--tg-primary-color);
          font-size: 14px;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .value-card p {
          margin: 0;
          color: var(--tg-paragraph-color);
          font-size: 15px;
          line-height: 1.65;
        }
        .project-phone-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .project-phone-list li {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          padding: 8px 0;
          border-bottom: 1px solid var(--tg-gray);
          flex-wrap: wrap;
        }
        .project-phone-list li:last-child {
          border-bottom: none;
        }
        .project-phone-list span {
          color: var(--tg-body-font-color);
          font-size: 14px;
        }
        .project-phone-list :global(a) {
          color: var(--tg-primary-color);
          font-weight: 600;
        }
        .project-address {
          margin: 0;
          color: var(--tg-paragraph-color);
          line-height: 1.7;
        }
        .project-address strong {
          color: var(--tg-heading-font-color);
        }
        .gallery-link-btn {
          display: inline-block;
          margin-top: 8px;
          padding: 12px 20px;
          background: var(--tg-primary-color);
          color: var(--tg-white);
          border-radius: 8px;
          font-weight: 600;
        }
        .gallery-link-btn:hover {
          filter: brightness(1.05);
          color: var(--tg-white);
        }
        .project-tag {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          color: var(--tg-white);
          background: var(--tg-primary-color);
          border-radius: 20px;
          padding: 6px 12px;
        }
        .project-side-card {
          border: 1px solid var(--tg-gray);
          border-left: 4px solid var(--tg-primary-color);
          border-radius: 10px;
          padding: 24px;
          background: var(--tg-body-background-color);
          box-shadow: 0 12px 28px color-mix(in srgb, var(--tg-secondary-color) 8%, transparent);
        }
        .project-side-card h4 {
          margin-bottom: 12px;
        }
        .project-side-card ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .project-side-card li {
          border-top: 1px solid var(--tg-gray);
          padding: 10px 0;
          display: flex;
          justify-content: space-between;
          gap: 12px;
        }
        .project-side-card li:first-child {
          border-top: 0;
        }
        .project-side-card span {
          color: var(--tg-body-font-color);
        }
        .project-side-card strong {
          text-align: right;
          color: var(--tg-heading-font-color);
          max-width: 65%;
          font-size: 14px;
        }
        .project-section-block {
          margin-top: 40px;
          border: 1px solid var(--tg-gray);
          border-radius: 10px;
          padding: 26px;
          background: var(--tg-body-background-color);
        }
        .project-section-block h4 {
          font-family: var(--tg-heading-font-family);
          color: var(--tg-heading-font-color);
        }
        .project-section-block p {
          color: var(--tg-paragraph-color);
        }
        .highlight-item {
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }
        .highlight-item i {
          color: var(--tg-primary-color);
          margin-top: 4px;
        }
        .highlight-item p {
          margin: 0;
        }
        .source-list {
          margin: 0;
          padding-left: 18px;
        }
        .source-list li {
          margin-bottom: 8px;
        }
        .source-list :global(a) {
          color: var(--tg-primary-color);
        }
        .source-list :global(a:hover) {
          color: var(--tg-secondary-color);
        }
      `}</style>
    </Layout>
  );
}
