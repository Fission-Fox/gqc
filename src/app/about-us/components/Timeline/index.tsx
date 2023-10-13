export default function OppositeContentTimeline() {
  return (
    <div className="grid grid-cols-1 mt-8">
      <div className="timeline relative">
        <div className="timeline-item">
          <div className="grid sm:grid-cols-2">
            <div className="">
              <div className="duration date-label-left ltr:float-right rtl:float-left md:me-7 relative">
                {/* <Image src={StrategyImage} className="h-64 w-64" alt="" /> */}
                {/* <CodingImage /> */}
                <div className="h-64 w-64 bg-slate-300"> Image</div>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="event event-description-right ltr:float-left rtl:float-right ltr:text-left rtl:text-right md:ms-7">
                <h5 className="text-lg dark:text-white mb-1 font-medium">
                  Strategy
                </h5>
                <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                  The generated injected humour, or non-characteristic words
                  etc. Cum sociis natoque penatibus et magnis dis parturient
                  montes, nascetur ridiculus mus. Donec quam felis,
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
                  The generated injected humour, or non-characteristic words
                  etc. Cum sociis natoque penatibus et magnis dis parturient
                  montes, nascetur ridiculus mus. Donec quam felis,
                </p>
              </div>
            </div>
            <div className="md:order-2 order-1">
              <div className="duration duration-right md:ms-7 relative">
                <div className="h-64 w-64 bg-slate-300"> Image</div>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline-item mt-5 pt-4">
          <div className="grid sm:grid-cols-2">
            <div className="mt-4 mt-sm-0">
              <div className="duration date-label-left ltr:float-right rtl:float-left md:me-7 relative">
                <div className="h-64 w-64 bg-slate-300"> Image</div>
              </div>
            </div>
            <div className="mt-4 mt-sm-0">
              <div className="event event-description-right ltr:float-left rtl:float-right ltr:text-left rtl:text-right md:ms-7">
                <h5 className="text-lg dark:text-white mb-1 font-medium">
                  Launch
                </h5>
                <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                  The generated injected humour, or non-characteristic words
                  etc. Cum sociis natoque penatibus et magnis dis parturient
                  montes, nascetur ridiculus mus. Donec quam felis,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
