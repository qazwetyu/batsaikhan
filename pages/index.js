import dynamic from "next/dynamic";
import Layout from "@/components/layout/Layout";
import About from "@/components/sections/About";
import Project from "@/components/sections/Project";
import Services from "@/components/sections/Services";
import Slider from "@/components/sections/Slider";
import Features from "@/components/sections/Features";
import Brand from "@/components/sections/Brand";

const CounterUp = dynamic(() => import("@/components/elements/CounterUp"), {
  ssr: false,
});

export default function Home1() {
  return (
    <Layout headerStyle={1}>
      <Slider />
      <About />
      <Services />
      <div className="counter-area section-pt-140 section-pb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="counter-item-wrap">
                <div className="row">
                  <div className="col-md-3 col-sm-6 col-6">
                    <div className="counter-item">
                      <CounterUp count={20} time={2} />
                      <p>
                        Аюул осолгүй <span>хүлээлгэн өгсөн</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-6">
                    <div className="counter-item">
                      <CounterUp count={980} time={2} />
                      <p>
                        Орон сууцны <span>айл өрх</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-6">
                    <div className="counter-item">
                      <CounterUp count={200000} time={2} />
                      <p>
                        Аюулгүй ажиллагааны <span>хүн-цаг</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-6">
                    <div className="counter-item">
                      <CounterUp count={12} time={1} />
                      <p>
                        Мэргэшсэн <span>инженер, ажилтан</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <Project />
      <div className="section-pt-140 section-pb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-50">
                <span className="sub-title">Хамтын ажиллагаа</span>
                <h2 className="title">Харилцагч байгууллагууд</h2>
              </div>
            </div>
          </div>
        </div>
        <Brand />
      </div>
    </Layout>
  );
}
