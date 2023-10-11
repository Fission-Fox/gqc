import LogoLight from "@/assets/images/logo-light.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/*  Start Footer  */}
      <footer className="py-8 bg-slate-800 dark:bg-gray-900 mt-auto">
        <div className="container">
          <div className="grid md:grid-cols-12 items-center">
            <div className="md:col-span-3">
              <Link href="#" className="logo-footer">
                <Image src={LogoLight} className="md:ms-0 mx-auto" alt="" />
              </Link>
            </div>

            <div className="md:col-span-5 md:mt-0 mt-8">
              <div className="text-center">
                <p className="text-gray-400">
                  © {new Date().getFullYear()} Upwind. Design & Develop with{" "}
                  <i className="mdi mdi-heart text-orange-700"></i> by{" "}
                  <Link
                    href="https://shreethemes.in/"
                    target="_blank"
                    className="text-reset"
                  >
                    Shreethemes
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="md:col-span-4 md:mt-0 mt-8">
              <ul className="list-none foot-icon md:text-end text-center">
                <li className="inline ms-1">
                  <Link
                    href="https://1.envato.market/upwind-react"
                    target="_blank"
                    className="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 text-gray-400 hover:text-white"
                  >
                    <i
                      className="uil uil-shopping-cart align-middle"
                      title="Buy Now"
                    ></i>
                  </Link>
                </li>
                <li className="inline ms-1">
                  <Link
                    href="https://dribbble.com/shreethemes"
                    target="_blank"
                    className="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 text-gray-400 hover:text-white"
                  >
                    <i
                      className="uil uil-dribbble align-middle"
                      title="dribbble"
                    ></i>
                  </Link>
                </li>
                <li className="inline ms-1">
                  <Link
                    href="https://www.behance.net/shreethemes"
                    target="_blank"
                    className="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 text-gray-400 hover:text-white"
                  >
                    <i className="uil uil-behance" title="Behance"></i>
                  </Link>
                </li>
                <li className="inline ms-1">
                  <Link
                    href="http://linkedin.com/company/shreethemes"
                    target="_blank"
                    className="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 text-gray-400 hover:text-white"
                  >
                    <i className="uil uil-linkedin" title="Linkedin"></i>
                  </Link>
                </li>
                <li className="inline ms-1">
                  <Link
                    href="https://www.facebook.com/shreethemes"
                    target="_blank"
                    className="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 text-gray-400 hover:text-white"
                  >
                    <i
                      className="uil uil-facebook-f align-middle"
                      title="facebook"
                    ></i>
                  </Link>
                </li>
                <li className="inline ms-1">
                  <Link
                    href="https://www.instagram.com/shreethemes/"
                    target="_blank"
                    className="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 text-gray-400 hover:text-white"
                  >
                    <i
                      className="uil uil-instagram align-middle"
                      title="instagram"
                    ></i>
                  </Link>
                </li>
                <li className="inline ms-1">
                  <Link
                    href="https://twitter.com/shreethemes"
                    target="_blank"
                    className="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 text-gray-400 hover:text-white"
                  >
                    <i
                      className="uil uil-twitter align-middle"
                      title="twitter"
                    ></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- End Footer --> */}

      {/* <!-- Back to top --> */}
      <Link
        href="home"
        id="back-to-top"
        className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-orange-600 text-white leading-9"
      >
        <i className="uil uil-arrow-up"></i>
      </Link>
      {/* <!-- Back to top --> */}
    </>
  );
}
