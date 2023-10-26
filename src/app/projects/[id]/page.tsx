"use client";
import BackgroudImage from "@/assets/images/bg/1.jpg";
import Image from "next/image";
interface Props {
  params: {
    id: string;
  };
}
export default function Page({ params }: Props) {
  console.log(params.id);
  const getData = () => {
    switch (params?.id) {
      case "Empowering":
        return (
          <div className="w-[80%] m-auto relative py-20 flex gap-5">
            <div className="w-full md:w-[60%]">
              <p className="text-[22px] text-[#C50017] font-bold mt-5 underline">
                Empowering Vendors with Great Deals
              </p>
              <p className="text-[32px] font-bold mb-3">Overview</p>
              <p>
                For these deals, we work directly with suppliers to negotiate
                exceptional discounts on premium automobiles. We aim to provide
                companies with market-based pricing to offer their customers
                great deals. Everything we do reflects our commitment to
                innovation and excellence in the automotive industry.
              </p>
              <p className="text-[32px] font-bold mb-3">Challenges Faced</p>
              <p>
                {" "}
                Negotiating favorable conditions with automakers and keeping up
                with the ever-changing car market is challenging. Adapting to
                the varying needs of supplier’s demand, careful planning and
                quick decision-making to maximize profits for all parties.
              </p>
              <div className="w-full flex gap-6 my-6">
                <div className="py-24 w-[45%] table relative h-auto md:h-[350px] rounded-lg overflow-hidden">
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
                </div>
                <div className="py-24 w-[45%] table relative h-auto md:h-[350px] rounded-lg overflow-hidden">
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
                </div>
              </div>
              <p className="text-[32px] font-bold mb-3">Solution Given</p>
              <p>
                {" "}
                With in-depth market research and careful bargaining tactics,
                our professional team is able to form fruitful collaborations
                with major automakers. Our broad understanding of the market and
                extensive network of contacts allow us to negotiate advantageous
                contracts for our suppliers, allowing them to expand their
                product lines and reach a wider audience.
              </p>
              <p className="text-[32px] font-bold mb-3"> Results Achieved</p>
              <p>
                {" "}
                Our vendors' revenue and satisfaction levels have already
                skyrocketed due to these efforts. According to vendor partners,
                their revenue streams increased significantly, reinforcing their
                positions in the market. In addition, we increased consumer
                loyalty and trust in our suppliers by providing them access to
                high-quality automobiles at incomparable pricing.
              </p>
            </div>
            <div className="hidden md:!flex flex-col w-[25%]">
              <p className="text-[32px] font-bold mb-3 mt-5 ">
                Project Information
              </p>
              <p className="font-semibold">CLIENT:</p>
              <p className="mt-2">The Sixmothers Group</p>
              <p className="font-semibold mt-5">LOCATION:</p>
              <p className="mt-2">Philadelphia, United States</p>
              <p className="font-semibold mt-5">DATE:</p>
              <p className="mt-2">February 14, 2021</p>
              <p className="font-semibold mt-5">WEBSITE:</p>
              <p className="mt-2">www.clientwebsite.com</p>
            </div>
          </div>
        );
      case "Elevating":
        return (
          <div className="w-[80%] m-auto relative py-20 flex gap-5">
            <div className="w-full md:w-[60%]">
              <p className="text-[22px] text-[#C50017] font-bold mt-5 underline">
                Elevating the Car-Buying Experience
              </p>
              <p className="text-[32px] font-bold mb-3">Overview</p>
              <p>
                With this project, we aim to provide our customers with a better
                car-buying experience. We intend to simplify the buying
                procedure by emphasizing openness, comfort, and individualized
                attention to each customer
              </p>
              <p className="text-[32px] font-bold mb-3">Challenges Faced</p>
              <p>
                {" "}
                Difficulties arise when we try to accommodate various customer
                tastes and maintain consistency from the online to the real
                world. Integrating cutting-edge technologies with customer
                service approaches that put people first is essential for
                success.
              </p>
              <div className="w-full flex gap-6 my-6">
                <div className="py-24 w-[45%] table relative h-auto md:h-[350px] rounded-lg overflow-hidden">
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
                </div>
                <div className="py-24 w-[45%] table relative h-auto md:h-[350px] rounded-lg overflow-hidden">
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
                </div>
              </div>
              <p className="text-[32px] font-bold mb-3">Solution Given</p>
              <p>
                {" "}
                We have updated our online platform, including simple user
                interfaces and advanced search functions. Our staff of devoted
                professionals is accessible continuously to assist clients,
                giving extensive information and direction. Additionally, our
                dealership facilities are also improved to create a friendly
                setting for vendors, boosting their overall experience.
              </p>
              <p className="text-[32px] font-bold mb-3"> Results Achieved</p>
              <p>
                {" "}
                Increases in client satisfaction is one of the project's most
                noticeable outcomes. Customers love how simple it is to make a
                purchase on our website, how helpful our customer service
                representatives are, and how quickly their orders are processed.
                Our dedication to providing first-rate service has been
                strengthened, and Global Quality Cars' standing in the industry
                has been boosted, thanks to the favorable responses we've
                received till now.
              </p>
            </div>
            <div className="hidden md:!flex flex-col w-[25%]">
              <p className="text-[32px] font-bold mb-3 mt-5 ">
                Project Information
              </p>
              <p className="font-semibold">CLIENT:</p>
              <p className="mt-2">The Sixmothers Group</p>
              <p className="font-semibold mt-5">LOCATION:</p>
              <p className="mt-2">Philadelphia, United States</p>
              <p className="font-semibold mt-5">DATE:</p>
              <p className="mt-2">February 14, 2021</p>
              <p className="font-semibold mt-5">WEBSITE:</p>
              <p className="mt-2">www.clientwebsite.com</p>
            </div>
          </div>
        );
      case "Looking":
        return (
          <div className="w-[80%] m-auto relative py-20 flex gap-5">
            <div className="w-full md:w-[60%]">
              <p className="text-[32px] font-bold mb-3 mt-5">
                Looking Ahead: Future Projects
              </p>
              <p>
                Since we have been receiving such great results with our prior
                initiatives, we've decided to try new things. Our research
                focuses on sustainable automotive solutions, innovative
                technologies, and productive partnerships as we define the
                automotive sector's future.
              </p>
              <p>
                At Global Quality Cars, we're committed to always doing our very
                best work. Please read on to find out what we have in store and
                what new discoveries we have made in this area.
              </p>
              <div className="w-full flex gap-6 my-6">
                <div className="py-24 w-[45%] table relative h-auto md:h-[350px] rounded-lg overflow-hidden">
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
                </div>
                <div className="py-24 w-[45%] table relative h-auto md:h-[350px] rounded-lg overflow-hidden">
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
                </div>
              </div>
              <p className="text-[32px] font-bold mb-3">Special Orders</p>
              <p>
                {" "}
                We are planning a special-order approach for our clients and
                suppliers for the near future. Simply describe the vehicle you
                want, and we will locate it for you. Fans of Japanese Domestic
                Market automobiles usually get what they want. We also can
                locate it for enthusiasts of European and American makes,
                including BMW, Ferrari, Rolls Royce, Mercedes Benz, Ford, and
                Chevrolet. Additionally, we will help you with the exportation
                and transportation of your automobile
              </p>
            </div>
            <div className="hidden md:!flex flex-col w-[25%]">
              <p className="text-[32px] font-bold mb-3 mt-5 ">
                Project Information
              </p>
              <p className="font-semibold">CLIENT:</p>
              <p className="mt-2">The Sixmothers Group</p>
              <p className="font-semibold mt-5">LOCATION:</p>
              <p className="mt-2">Philadelphia, United States</p>
              <p className="font-semibold mt-5">DATE:</p>
              <p className="mt-2">February 14, 2021</p>
              <p className="font-semibold mt-5">WEBSITE:</p>
              <p className="mt-2">www.clientwebsite.com</p>
            </div>
          </div>
        );

      default:
        break;
    }
  };
  return <>{getData()}</>;
}
