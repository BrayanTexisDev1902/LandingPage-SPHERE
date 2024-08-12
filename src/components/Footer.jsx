import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/16/solid";
import logo from "../assets/logo.svg";

export const Footer = () => {
  return (
    <footer className="h-auto max-w-screen-2xl mx-auto">
      <div className="px-10 w-full p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between items-center gap-6">
          <div className="mb-6 md:mb-0 flex flex-col md:items-start items-center gap-8">
            <img src={logo} className="h-14 w-auto" alt="Logo" />
            <p className="font-montserrat text-[18px]">
              Lorem ipsum dolor sit amet consectetur.
              <div>Eleifend nec morbi tellus vitae leo nunc.</div>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-18 sm:gap-6 lg:grid-cols-3">
            <div className="mx-8">
              <h2 className="mb-3 text-[22px] font-extrabold font-montserrat text-black">
                Company
              </h2>
              <ul className="text-black font-montserrat">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Products Digita
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Customer Reviews
                  </a>
                </li>
              </ul>
            </div>
            <div className="mx-8">
              <h2 className="mb-3 text-[22px] font-extrabold font-montserrat text-black">
                Information
              </h2>
              <ul className="text-black font-montserrat">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Help Center
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Payment Methods
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Return & Refund
                  </a>
                </li>
              </ul>
            </div>
            <div className="mx-8">
              <h2 className="mb-3 text-[22px] font-extrabold font-montserrat text-black">
                Contact
              </h2>
              <ul className="text-black font-montserrat">
                <li className="mb-4 flex gap-2">
                  <PhoneIcon className="block h-6 w-6" />
                  <a href="#" className="hover:underline">
                    (+1) 123-456-7890
                  </a>
                </li>
                <li className="mb-4 flex gap-2">
                  <EnvelopeIcon className="block h-6 w-6" />
                  <a href="#" className="hover:underline">
                    email@youremail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
