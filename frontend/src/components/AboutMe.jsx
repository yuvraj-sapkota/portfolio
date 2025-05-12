import { FaRegCircleCheck } from "react-icons/fa6";

const AboutMe = () => {
  return (
    <>
      <div className="max-w-[1300px] mx-auto mt-18 px-4">
        <div className=" bg-[#FD853A] flex flex-col md:flex-row items-center justify-center gap-4  py-12 px-4">
          <div className="  bg-white rounded-2xl p-4  md:p-8 flex items-center  flex-col gap-4">
            <div className=" bg-[#FD853A] rounded-full w-48 h-48 flex items-center justify-center text-white flex-col">
              <p className="text-8xl font-extrabold ">2+</p>
              <p className="text-lg">Years of Experience</p>
            </div>
            <div>
              <button className="bg-[#FD853A] rounded-full px-4 py-2 text-white text-2xl font-medium">
                Download CV
              </button>
            </div>
          </div>
          <div className="   flex flex-col  gap-4 max-w-[400px]">
            <div className="bg-white rounded-2xl py-6 px-4 flex items-start  flex-col gap-4">
              <h1 className="text-3xl font-bold">About Me</h1>
              <p className="flex items-center justify-start gap-1 text-green-500">
                <FaRegCircleCheck />
                Open to work
              </p>
              <p className="text-sm font-serif text-black">
              👋 Hi, I’m a web developer & tech content creator based in Nepal. I build real-world apps using MERN stack, and I love solving everyday problems with code.


              </p>
              <p className="text-sm font-serif text-black">
               📚 I’m currently pursuing my BCA and constantly learning new tech.


              </p>
              <p className="text-sm font-serif text-black">🎥 I also share coding tips & tutorials on Instagram through daily reels — helping others grow while growing myself.</p>
            </div>
            <div className="bg-white rounded-2xl   py-6 px-4">
                <ul className="flex flex-col gap-4 text-sm font-serif text-black">
                    <li>Name: Yuvraj Sapkota</li>
                    <li>Email:sharmayuvraj034@gmail.com</li>
                    <li>Date of Birth:2058-06-02</li>
                    <li>From:Chitwan, Nepal</li>
                </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="h-96"></div>
    </>
  );
};

export default AboutMe;
