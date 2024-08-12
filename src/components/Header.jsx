import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.svg";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Events", href: "#" },
  { name: "Company", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Header = () => {
  return (
    <Disclosure as="nav" className="bg-white">
    <div className="max-w-full px-6 sm:px-6 lg:px-8 font-montserrat sm:mx-12">
      <div className="relative flex h-32 items-center justify-between">
        {/* Button for mobile menu */}
        <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>

        {/* Logo */}
        <div className="flex flex-shrink-0 items-center">
          <img alt="Your Company" src={logo} className="h-8 w-auto pl-16 md:pl-0 md:h-12" />
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-400 hover:text-black hover:font-extrabold transition delay-100 duration-300 ease-in hover:scale-110",
                "rounded-md px-3 py-2 text-base font-semibold uppercase"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-2">
          <a
            href="#"
            className="block px-4 py-2 text-gray-400 text-xs font-semibold uppercase md:text-base hover:underline hover:text-black hover:font-bold transition delay-100 duration-300 ease-in"
          >
            Login
          </a>
          <button className="flex gap-2 justify-center items-center rounded-full bg-black capitalize px-5 py-3 text-xs text-white shadow-lg md:text-base hover:opacity-85 duration-300 ease-in hover:scale-[1.10]">
            Sing up now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    {/* Mobile menu panel */}
    <DisclosurePanel className="md:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {navigation.map((item) => (
          <DisclosureButton
            key={item.name}
            as="a"
            href={item.href}
            aria-current={item.current ? "page" : undefined}
            className={classNames(
              item.current
                ? "bg-gray-900 text-white"
                : "text-gray-400 hover:bg-gray-700 hover:text-white",
              "block rounded-md px-3 py-2 text-base font-medium uppercase"
            )}
          >
            {item.name}
          </DisclosureButton>
        ))}
      </div>
    </DisclosurePanel>
  </Disclosure>
  );
};
