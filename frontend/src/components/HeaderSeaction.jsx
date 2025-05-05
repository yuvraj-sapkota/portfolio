const HeaderSection = () => {
  return (
    <>
      <div className="mx-auto max-w-[900px]   flex flex-col items-center justify-center gap-2">
      <div className="border py-[8px] px-[24px] rounded-full font-bold">
        <p>Hello!</p>
      </div>
      <div className="text-center text-4xl md:text-[48px] lg:text-[95px] font-semibold font-serif tracking-tighter ">
        <p>I'm <span className="text-[#FD853A]">Yuvraj</span> <br /> Web Developer</p>
      </div>
      </div>
    </>
  );
};

export default HeaderSection;
