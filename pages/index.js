import Layout from "@/components/layout/Layout";
import About from "@/components/sections/About";
import Blog from "@/components/sections/Blog";
import Brand from "@/components/sections/Brand";
import Features from "@/components/sections/Features";
import Newsletter from "@/components/sections/Newsletter";
import Project from "@/components/sections/Project";
import Slider from "@/components/sections/Slider";
import dynamic from "next/dynamic";
const CounterUp = dynamic(() => import("@/components/elements/CounterUp"), {
  ssr: false,
});
export default function Home1() {
  return (
    <>
      <Layout headerStyle={1}>
        <Slider />
        <About />
        <Brand />
        <div className="counter-area section-pt-140 section-pb-110">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <div className="counter-item-wrap">
                  <div className="row">
                    <div className="col-md-3 col-sm-6 col-6">
                      <div className="counter-item">
                        <CounterUp count={+20} time={2} />
                        <p>
                          Төсөл амжилттай аюул осолгүй
                          <span>гүйцэтгэсэн</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6">
                      <div className="counter-item">
                        <CounterUp count={980} time={2} />
                        <p>
                          айлын <span>орон сууц</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6">
                      <div className="counter-item">
                        <CounterUp count={200000} time={2} />
                        <p>
                          Аюулгүй ажиллагааны гүйцэтгэл{" "}
                          <span> (хүн цаг LTI Free)</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-6">
                      <div className="counter-item">
                        <CounterUp count={12} time={1} />
                        <p>
                          Чадварлаг <span>ажилчид</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Project />
        <Blog />
      </Layout>
    </>
  );
}
