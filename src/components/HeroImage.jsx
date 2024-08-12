import image1 from "../assets/image1.png";
import image2 from "../assets/iphoneImage.png";

export const HeroImage = () => {
  return (
    <section className="flex w-full bg-gray-200 h-[calc(100vh-128px)] flex-col lg:flex-row">
      <div className="flex flex-col h-full items-center lg:items-start justify-center w-full lg:w-1/2 gap-8 lg:pl-[200px]">
        <p className="font-prompt font-extrabold text-5xl lg:text-[74px] text-center lg:text-start">
          <div className="flex items-center justify-center lg:justify-start">
            <span className="relative z-10">Grab</span>
            <span className="inline-block rounded-[28px] px-8 py-2 bg-purple text-white text-5xl lg:text-[74px] -m-3 rotate-[-2deg] drop-shadow-xl">
              50%
            </span>
          </div>
          <div>Off Smartphone Collection</div>
        </p>
        <p className="font-montserrat  text-lg">
          Lorem ipsum dolor sit amet consectetur.
          <div>Eleifend nec morbi tellus vitae leo nunc.</div>
        </p>
        <div className="flex gap-6 items-center">
          <img alt="cellphone" src={image1} className="h-20 w-auto" />
          <p className="font-prompt font-semibold text-3xl">
            Xiphone 14
            <div>Edition</div>
          </p>
        </div>
      </div>
      <div className="relative w-1/2  justify-end items-end hidden lg:flex">
        <img alt="cellphone" src={image2} className="h-[95%] w-full px-10" />
        <div className="absolute bottom-[240px] left-[-20px] hidden lg:block">
          <span className="inline-block rounded-[28px] px-8 bg-white text-black text-[60px] rotate-[-2deg] drop-shadow-md font-semibold">
            Highest
          </span>
        </div>
        <div className="absolute bottom-[135px] left-[-20px] hidden lg:block">
          <span className="inline-block rounded-[28px] px-8 bg-yellow-300 text-black text-[60px] rotate-[2deg] drop-shadow-md font-semibold ml-2">
            Quality
          </span>
        </div>
      </div>
    </section>
  );
};
