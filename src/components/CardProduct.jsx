/* eslint-disable react/prop-types */
import { HeartIcon } from "@heroicons/react/24/outline";
import { StartItem } from "./StartItem";

export const CardProduct = ({ product }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<StartItem index={i} className={"text-[#04A904]"} />);
      } else {
        stars.push(<StartItem index={i} className={"text-gray-300"} />);
      }
    }
    return stars;
  };

  return (
    <div className="flex flex-col max-w-sm h-auto bg-white mx-auto gap-4">
      <div className="relative flex h-[404] w-[410] px-10 py-5 border border-gray-50 shadow-lg">
        <div className="absolute flex right-4 top-4 h-auto w-auto rounded-full bg-black p-2 hover:scale-125 duration-200 ease-in">
          <HeartIcon className="h-5 w-5 text-white" />
        </div>
        <div className="flex h-[267px] max-w-xs w-[302px] bg-[#D9D9D9] mx-auto mt-12 mb-4"></div>
      </div>
      <div className="flex flex-col p-2 gap-3 justify-start items-start">
        <div className="flex justify-between font-montserrat font-extrabold text-[18px] gap-1 w-full">
          <p>{product.title}</p>
          <span>${product.price}.00</span>
        </div>
        <p className="font-montserrat font-normal text-[14px]">{product.description}</p>
        <div className="flex items-center my-1">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {renderStars(product.stars)}
          </div>
          <span className="font-montserrat text-xs font-normal px-2.5">({product.likes})</span>
        </div>
        <button className="flex border border-black px-4 py-3 rounded-[52px] gap-2 justify-center items-center hover:bg-black hover:text-white hover:scale-[1.10] duration-200 ease-in">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4"
          >
            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
          </svg>

          <p className="font-montserrat text-xs">Add to Cart</p>
        </button>
      </div>
    </div>
  );
};
