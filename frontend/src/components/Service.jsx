import { CiGlobe } from "react-icons/ci";
const Service = () => {
  return (
    <>
      <div className="max-w-[1300px] px-4 mx-auto mt-20">
        <div>
          <p className="text-6xl font-bold text-center font-serif text-[#FD853A]">
            service
          </p>
          <p className="text-4xl font-bold text-center font-serif">
            I can help you with
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="flex items-center gap-4 flex-col px-4 py-2">
              <CiGlobe size={80} className="text-[#FD853A]" />
              <h1 className="text-3xl font-bold">Frontend Development</h1>
              <p className="">
                I craft clean, responsive, and interactive user interfaces using
                HTML, CSS, JavaScript, and React. My focus is on creating
                seamless user experiences with modern design principles.
              </p>
            </div>
            <div className="flex items-center gap-4 flex-col px-4 py-2">
              <CiGlobe size={80} className="text-[#FD853A]" />
              <h1 className="text-3xl font-bold">Backend Development</h1>
              <p className="">
                I build secure, scalable, and high-performance backend systems
                using Node.js, Express, and databases. I specialize in creating
                RESTful APIs and handling server-side logic effectively.
              </p>
            </div>
            <div className="flex items-center gap-4 flex-col px-4 py-2">
              <CiGlobe size={80} className="text-[#FD853A]" />
              <h1 className="text-3xl font-bold">Responsive Design</h1>
              <p className="">
                I design layouts that adapt beautifully to all screen sizes —
                mobile, tablet, and desktop. Your website will look professional
                and function flawlessly on any device.
              </p>
            </div>
            <div className="flex items-center gap-4 flex-col px-4 py-2">
              <CiGlobe size={80} className="text-[#FD853A]" />
              <h1 className="text-3xl font-bold">Software Development</h1>
              <p className="">
                I develop full-fledged web applications tailored to business
                needs and user goals. From idea to deployment, I focus on clean
                code, functionality and performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-96"></div>
    </>
  );
};

export default Service;
