import { FaQuoteLeft } from "react-icons/fa";
import me from "../assets/images/me.png";
import { MdOutlineStarPurple500 } from "react-icons/md";

const HeaderSection = () => {
  return (
    <>
      <div className="mx-auto max-w-[900px]   flex flex-col items-center justify-center gap-2 mb-4 md:mb-[40px] ">
        <div className="border py-[8px] px-[24px] rounded-full font-bold">
          <p>Hello!</p>
        </div>
        <div className="text-center text-4xl md:text-[48px] lg:text-[85px] font-extralight font-serif tracking-tighter ">
          <p>
            I'm <span className="text-[#FD853A]">Yuvraj</span> <br /> Web
            Developer
          </p>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto flex md:items-start justify-between flex-col items-center gap-4">
        {/* quotes  */}
        <div className="border  border-black order-2">
          <div className="mb-6">
            <FaQuoteLeft />
          </div>
          <p className="max-w-[280px] -tracking-tighter ">
            Jenny’s Exceptional product design ensure our website’s success.
            Highly Recommended
          </p>
        </div>
        {/* image  */}
        <div className="w-[250px] h-[250px] rounded-full bg-[#FD853A] overflow-hidden object-cover border  border-black order-1">
          <img src={me} alt="" />
        </div>

        {/* experience  */}
        <div  className="border  border-black order-3">
          <div className="flex items-center">
            <MdOutlineStarPurple500 className="text-[#FD853A]" />
            <MdOutlineStarPurple500 className="text-[#FD853A]" />
            <MdOutlineStarPurple500 className="text-[#FD853A]" />
            <MdOutlineStarPurple500 className="text-[#FD853A]" />
          </div>
          <p className="font-bold text-2xl text-end">2 Years plus <br /> <span className="font-normal text-sm text-end"> Experience </span></p>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
