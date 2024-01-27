import { useState } from "react";

const Contact = () => {
  const [isTransformed, setIsTransformed] = useState(false);

  return (
    <section className="p-4 bg-slate-100">
      <div className="w-full max-w-6xl mx-auto shadow-lg flex flex-col-reverse lg:flex-row rounded-lg overflow-hidden">
        <form className="p-8 w-full text-white transition-colors duration-[750ms] bg-violet-600">
          <h3 className="text-4xl font-bold mb-6">Contact Us</h3>
          <div className="mb-6">
            <label className="text-2xl mb-2">Hi 👋! My name is...</label>
            <input
              className="bg-violet-700 transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0"
              id="name"
              type="text"
              placeholder="Your name..."
              required
            />
          </div>
          <div className="mb-6">
            <label className="text-2xl mb-2">and I represent...</label>
            <div className="border-[1px] rounded border-white overflow-hidden font-medium w-fit">
              <button className="text-violet-600 text-sm px-3 py-1.5 transition-colors duration-[750ms] relative">
                <span className="relative z-10">An individual</span>
              </button>
              <button
                className={`text-white text-sm px-3 py-1.5 transition-colors transform  duration-300 ${
                  isTransformed ? "translate-x-0.5" : ""
                } duration-[750ms] relative`}
                onClick={() => setIsTransformed(!isTransformed)}
              >
                <span className="relative z-10">A school</span>
                <div className="absolute inset-0 bg-white z-0"></div>
              </button>
            </div>
          </div>
          <div className="mb-6">
            <label className="text-2xl mb-2">
              I&apos;d love to ask about...
            </label>
            <textarea
              placeholder="Whatever your heart desires :)"
              className="bg-violet-700 transition-colors duration-[750ms] min-h-[150px] resize-none placeholder-white/70 p-2 rounded-md w-full focus:outline-0"
            />
          </div>
          <button
            type="submit"
            className="bg-white text-violet-600 transition-colors duration-[750ms] text-lg text-center rounded-lg w-full py-3 font-semibold"
          >
            submit
          </button>
        </form>
        <div className="bg-white relative overflow-hidden w-full min-h-[100px]">
          <div className="absolute inset-0 bg-slate-200"></div>
          <div className="absolute inset-0 bg-slate-200"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
