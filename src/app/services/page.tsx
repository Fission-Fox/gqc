import BackgroudImage from "@/assets/images/bg/1.jpg";
import car from "@/assets/images/car/black-car.webp";
import Image from "next/image";
import LanguageIcon from "@mui/icons-material/Language";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";

export default function Services() {
  return (
    <>
      {/* Start */}
      <section className="py-24 w-full table relative h-[60vh] ">
        <Image
          src={BackgroudImage}
          alt="Background Image"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0px",
          }}
        />
        <div className="absolute inset-0 bg-[slategray] opacity-90"></div>
        <div className="mx-auto md:!mx-36 relative flex flex-col justify-center h-full">
          <div className="grid grid-cols-1 mt-12 border-b-2 border-[#C50017] w-[70%] md:w-96 m-auto md:m-0">
            <h4 className="text-black lg:text-[80px] text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">
              Services
            </h4>
          </div>
        </div>
      </section>

      <div className="flex items-center w-4/5 m-auto gap-8  flex-col lg:flex-row  ">
        <div className="w-[90%]  md:w-[600px] h-auto md:h-[500px] mt-6 ">
          <img
            className="rounded-lg  w-full h-full"
            src="https://mkjapan.org/wp-content/uploads/2023/09/large-cargo-ship-with-containers-port-generative-ai-1024x683.jpg"
            alt=""
          />
        </div>
        <div className="w-full md:w-1/2 my-8 md:my-32  ">
          <div className="font-bold  text-[40px] ml-50 ">
            Exporting Automobiles
          </div>
          <br />
          <div className="text-[20px] text-current text-bold font-light">
            Global Quality Cars are working on exporting pre-owned Japanese
            vehicles from Japan, the USA, the UK, Thailand, Russia, Zimbabwe,
            etc., to other parts of the world. Because of the quality of our
            work and trustworthy car dealings, we've earned a stellar reputation
            in the automotive industry. We have now expanded worldwide to offer
            a variety of vehicles that not only include Compact SUVs but also
            all the machinery, trucks, and luxury vehicles. Having open lines of
            communication between all links in the supply chain is crucial.
            <br /> <br />
            Therefore, we offer containerized and break-bulk shipping and
            roll-on/roll-off services. We take every precaution to ensure a
            secure shipment and transaction with our clients. To do so, Global
            Quality Cars maintains open lines for interactions with all parties
            involved to ensure the finest level of service. We also communicate
            with our vendors and clients and take their input sincerely.
            Therefore, choosing our exporting service of automobiles will
            benefit you as we promise that our services will not let our vendors
            and customers down.{" "}
          </div>
        </div>
      </div>
      <div className="flex items-center w-4/5 m-auto gap-8  flex-col lg:flex-row  ">
        <div className="w-full md:w-1/2 my-8 md:my-32  ">
          <div className="font-bold  text-[40px] ml-50 ">Auto-Parts Export</div>
          <br />
          <div className="text-[20px] text-current text-bold font-light">
            Global Quality Cars also exports spare parts of Japanese automobiles
            from Japan, Africa, Korea, Russia, and other parts of the world.
            Vehicle components extend from compact to commercial and include
            bumpers, wheels, seats, carpets, AC units, circuit breakers, lights,
            engines, parts for machines, power sources, mud flaps, doors, side
            sections, side mirrors, metal roofing, etc. Lubricants and oils of
            every variety are also among the many exports.
            <br /> <br />
            The auto parts are the most critical factor in ensuring that cars
            run smoothly. Therefore, it holds great importance and value in
            automobile export. With a profound understanding of auto parts and a
            commitment to excellence, we pride ourselves on our unmatched
            expertise and dedication to maintaining customer satisfaction. We
            not only deliver top-notch automotive components but also provide
            comprehensive knowledge and support to our clients, ensuring their
            needs are met with precision and care. Our unwavering focus on
            quality, coupled with our global reach, makes us the preferred
            choice for businesses seeking reliable and knowledgeable partners in
            the automotive parts export sector.
          </div>
        </div>
        <div className="w-[90%] md:w-[600px] h-auto md:h-[500px] mt-6 ">
          <img
            className="rounded-lg w-full h-full"
            src="https://mkjapan.org/wp-content/uploads/2023/09/aerial-view-cargo-ship-cargo-container-harbor-1024x683.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="flex items-center w-4/5 m-auto gap-8  flex-col lg:flex-row  ">
        <div className="w-[90%] md:w-[600px] h-auto md:h-[500px] mt-6 ">
          <img
            className="rounded-lg w-full h-full"
            src="https://mkjapan.org/wp-content/uploads/2023/09/industrial-designers-working-3d-model-1024x683.jpg"
            alt=""
          />
        </div>
        <div className="w-full md:w-1/2 my-8 md:my-32  ">
          <div className="font-bold  text-[40px] ml-50 ">
            Consultant Services for Auctions
          </div>
          <br />
          <div className="text-[20px] text-current text-bold font-light">
            Auction consulting is another service offered by Global Quality
            Cars. Optimizing a car for one's specific needs is time-consuming
            and labour-intensive. Every consumer has unique preferences and
            requirements determined by their circumstances and available
            resources.
            <br /> <br />
            However, our agents recommend the whole range of the car's sales
            records, auction history, and facilities, and they explain the
            problematic details to the customers by making them as simple as
            possible. To ensure that our clients get the most possible value for
            their money, our sales representatives carefully evaluate their
            needs and financial constraints before providing recommendations on
            suitable automobiles. Everybody, from first-time automobile buyers
            to large corporations, can benefit from our auction services. We
            intend to assist clients until all their needs are met and they are
            content with our services.
          </div>
        </div>
      </div>
      <div className="flex items-center w-4/5 m-auto gap-8  flex-col lg:flex-row  ">
        <div className="w-full md:w-1/2 my-8 md:my-32  ">
          <div className="font-bold  text-[40px] ml-50 ">
            Customs Clearance and Shipping Service
          </div>
          <br />
          <div className="text-[20px] text-current text-bold font-light">
            We facilitate our clients in every detailed manner, from exporting
            automobiles to custom clearance and shipping of the vehicles. Global
            Quality Cars have a firm grip on the customs clearance of all import
            and export vehicles with no delays or disturbance at the port. When
            your shipment is on its way, we'll update you to let you know it's
            almost there, and we'll be there to help you clear customs and get
            your PRC and passports. For a smooth operation, we will gather any
            specific information required. We firmly commit to this duty and are
            knowledgeable and prepared to carry it out. We use a system parallel
            to tax and duty laws enacted by the government. Giving clear
            guidance is necessary to the clients to avoid any future troubles.
            <br /> <br />
            Moreover, we also provide logistics support services to our clients
            and vendors. Our freight forwarding brokers arrange economical auto
            shipping to distribution centres after booking the shipments. On the
            client's behalf, they handle all necessary paperwork and legal
            formalities. They finish the process to the client's satisfaction
            and according to the law. Due to all these facilities, the
            customer's mind becomes tension-free, and we receive satisfied
            customer feedback.
          </div>
        </div>
        <div className="w-[90%] md:w-[600px] h-auto md:h-[500px] mt-6 ">
          <img
            className="rounded-lg w-full h-full"
            src="https://mkjapan.org/wp-content/uploads/2023/09/close-up-customer-with-business-person-car-dealership-scaled.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="font-bold text-[30px] sm:text-[50px] md:text-[60px]  text-center mt-14">
        Business Growth
      </div>
      <div className="flex flex-row justify-center flex-wrap mt-12 gap-40 mb-10 ">
        <div className="flex flex-col items-center">
          <div className="rounded  flex justify-center items-center text-[white] bg-blue-900 w-[150px] h-[150px]">
            <LanguageIcon sx={{ fontSize: "100px" }} />
          </div>
          <div className="font-bold  text-[20px]  mt-[50px] items-center ">
            Dealing in 100+ countries
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded flex justify-center items-center text-[white] bg-blue-900  w-[150px] h-[150px]">
            <SendOutlinedIcon sx={{ fontSize: "100px" }} />
          </div>
          <div className="font-bold  text-[20px]  mt-[50px] ">
            Monthly 1000+ sales worldwide
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded flex justify-center items-center text-[white] bg-blue-900  w-[150px] h-[150px]">
            <Diversity3OutlinedIcon sx={{ fontSize: "100px" }} />
          </div>
          <div className="font-bold  text-[20px] mt-[50px] ">
            Dealing in 100+ countries
          </div>
        </div>
      </div>
    </>
  );
}
