import { FaQuoteLeft } from "react-icons/fa";
import me from "../assets/images/me.png";
import { MdOutlineStarPurple500 } from "react-icons/md";

const HeaderSection = () => {
  return (
    <>
      <div className="mx-auto max-w-[900px] px-4   flex flex-col items-center justify-center gap-2 mb-4 md:mb-[40px] ">
        <div className="border py-[8px] px-[24px] rounded-full font-bold">
          <p>Hello!</p>
        </div>
        <div className="text-center text-[55px] md:text-[70px] lg:text-[85px] font-extralight font-serif tracking-tighter leading-16 md:leading-22">
          <p>
            I'm <span className="text-[#FD853A]">Yuvraj</span>
          </p>
          <p>Web Developer </p>
        </div>
      </div>

      <div className="max-w-[1300px] px-4 mx-auto flex  flex-col md:flex-row md:items-start justify-between items-center gap-4">
        {/* quotes  */}
        <div className="order-2 md:order-1 ">
          <div className="mb-6">
            <FaQuoteLeft />
          </div>
          <p className="md:max-w-[280px] -tracking-tighter font-serif">
            Jenny’s Exceptional product design ensure our website’s success.
            Highly Recommended
          </p>
        </div>
        {/* image  */}
        <div className="w-[350px] md:w-[400px] h-[350px] md:h-[400px] rounded-full bg-[#FD853A] overflow-hidden object-cover order-1 md:order-2">
          <img src={me} alt="" />
        </div>

        {/* experience  */}
        <div className="order-3 mt-6 md:mt-0">
          <div className="flex items-center">
            <MdOutlineStarPurple500 className="text-[#FD853A]" />
            <MdOutlineStarPurple500 className="text-[#FD853A]" />
            <MdOutlineStarPurple500 className="text-[#FD853A]" />
            <MdOutlineStarPurple500 className="text-[#FD853A]" />
          </div>
          <p className="font-bold text-2xl text-end font-serif">
            2 Years plus <br />{" "}
            <span className="font-normal text-sm text-end"> Experience </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
