import Link from "next/link"

export default function Services() {
    return (
        <>
            <section className="services-area section-pt-140 section-pb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8">
                            <div className="section-title text-center mb-55">
                                <span className="sub-title">Үйлчилгээ</span>
                                <h2 className="title">Манай үндсэн чиглэлүүд</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item">
                                <div className="services-thumb">
                                    <Link href="#"><img src="/assets/img/images/services_01.png" alt="" /></Link>
                                </div>
                                <div className="services-content">
                                    <h2 className="title"><Link href="/services/interior-plumbing">Дотор сантехникийн угсралт</Link></h2>
                                    <p>Барилгын дотор шугам сүлжээ, тоноглолын суурилуулалт, шалгалт тохируулгыг стандартын дагуу гүйцэтгэнэ.</p>
                                    <Link href="/services/interior-plumbing" className="text-btn">Дэлгэрэнгүй</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item">
                                <div className="services-thumb">
                                    <Link href="#"><img src="/assets/img/images/services_02.png" alt="" /></Link>
                                </div>
                                <div className="services-content">
                                    <h2 className="title"><Link href="/services/external-network">Гадна шугам сүлжээ</Link></h2>
                                    <p>Цэвэр, бохир ус болон дулааны гадна шугамын угсралт, өргөтгөл шинэчлэлтийг инженерийн шийдэлтэйгээр хийж гүйцэтгэнэ.</p>
                                    <Link href="/services/external-network" className="text-btn">Дэлгэрэнгүй</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-10">
                            <div className="services-item">
                                <div className="services-thumb">
                                    <Link href="#"><img src="/assets/img/images/services_03.png" alt="" /></Link>
                                </div>
                                <div className="services-content">
                                    <h2 className="title"><Link href="/services/maintenance">Засвар үйлчилгээ</Link></h2>
                                    <p>Ашиглалтад орсон системүүдийн төлөвлөгөөт үзлэг, алдааны оношилгоо, түргэн шуурхай засварыг мэргэжлийн баг хариуцна.</p>
                                    <Link href="/services/maintenance" className="text-btn">Дэлгэрэнгүй</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
