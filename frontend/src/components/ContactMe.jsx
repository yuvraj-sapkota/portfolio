const ContactMe = () => {
  return (
    <>
      <div className="max-w-[1300px] mx-auto px-4 mt-20">
        <div className="max-w-[700px] mx-auto ">
          <div className="flex items-center justify-center flex-col">
            <h1 className="text-3xl font-bold ">Let's Design together</h1>
            <p className="tracking-tight text-center mt-4">
              I'm always excited to collaborate on new projects or ideas.
              Whether you have a question or just want to say hi, feel free to
              reach out!
            </p>
          </div>
          <div className="mt-12 flex items-center flex-col md:flex-row justify-center gap-3">
            <input
              type="text"
              placeholder="Enter you email"
              className="w-[400px] border border-[#FD853A] rounded-lg py-2 px-2 outline-none"
            />
            <button className="bg-[#FD853A] py-2 px-4 rounded-lg font-bold text-white  ">
              Contact Me
            </button>
          </div>
        </div>
      </div>
      <div className="h-96"></div>
    </>
  );
};

export default ContactMe;
