import { BsGraphUpArrow } from "react-icons/bs";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { MdOutlineAutoFixHigh } from "react-icons/md";
export default function OppositeContentTimeline() {
  return (
    <div className="grid grid-cols-1 mt-8">
      <div className="timeline relative">
        <div className="timeline-item">
          <div className="grid sm:grid-cols-2">
            <div className="">
              <div className="duration date-label-left ltr:float-right rtl:float-left md:me-7 relative text-black ">
                {/* <Image src={StrategyImage} className="h-64 w-64" alt="" /> */}
                {/* <CodingImage /> */}
                {/* <div className="h-64 w-64 bg-slate-300"> Image</div> */}
                <MdOutlineAutoFixHigh className="h-64 w-64 opacity-30" />
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="event event-description-right ltr:float-left rtl:float-right ltr:text-left rtl:text-right md:ms-7">
                <h5 className="text-lg dark:text-white mb-1 font-medium">
                  Our Strategy
                </h5>
                <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                  Quality, innovation, and customer involvement are at the heart
                  of Global Quality Cars' strategy, which allows us to adapt to
                  the dynamic nature of the automotive industry. We saw a
                  growing demand for reliable, eco-friendly, and tech-savvy
                  cars; thus, it helps us improve our strategies for future
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="timeline-item mt-5 pt-4">
          <div className="grid sm:grid-cols-2">
            <div className="md:order-1 order-2">
              <div className="event event-description-left ltr:float-left rtl:float-right ltr:text-right rtl:text-left md:me-7">
                <h5 className="text-lg dark:text-white mb-1 font-medium">
                  Development
                </h5>
                <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                  In the ever-changing automobile business, constant innovation
                  is crucial. Our goal is to improve our products and services
                  to the point where we far outpace the competition. Thus, we
                  aim to achieve success in the areas of car trading, research
                  and innovation, and technological advancement.
                </p>
              </div>
            </div>
            <div className="md:order-2 order-1">
              <div className="duration duration-right md:ms-7 relative text-black ">
                <GiGiftOfKnowledge className="h-64 w-64 opacity-30" />
              </div>
            </div>
          </div>
        </div>

        <div className="timeline-item mt-5 pt-4">
          <div className="grid sm:grid-cols-2">
            <div className="mt-4 mt-sm-0">
              <div className="duration date-label-left ltr:float-right rtl:float-left md:me-7 relative text-black">
                <BsGraphUpArrow className="h-64 w-64 opacity-30" />
              </div>
            </div>
            <div className="mt-4 mt-sm-0">
              <div className="event event-description-right ltr:float-left rtl:float-right ltr:text-left rtl:text-right md:ms-7">
                <h5 className="text-lg dark:text-white mb-1 font-medium">
                  Financial Tactics
                </h5>
                <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                  Global Quality Cars has consistently excellent financial
                  performance over the years. Thanks to the support of our
                  partners, we have been able to establish a solid financial
                  foundation, which in turn has help us improve our company’s
                  reputation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
