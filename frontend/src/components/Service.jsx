import { CiGlobe } from "react-icons/ci";
const Service = () => {
  return (
    <>
      <div className="max-w-[1300px] mx-auto mt-20">
        <div>
          <p className="text-6xl font-bold text-center font-serif text-[#FD853A]">
            service
          </p>
          <p className="text-4xl font-bold text-center font-serif">
            I can help you with
          </p>

          <div>
             <div>
                <CiGlobe size={80} className="text-[#FD853A]"/>
<h1>Website Development</h1>
             </div>
          </div>
        </div>
      </div>

      <div className="h-96"></div>
    </>
  );
};

export default Service;
