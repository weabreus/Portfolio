import React from "react";

const MyPortfolio: React.FC<{hero: React.RefObject<HTMLElement>}> = ({hero}) => {
  return (
    <section ref={hero} className="sm:w-[80%] lg:w-[50%] sm:block sm:justify-start h-[50%] w-full flex justify-center">
      <div>
        <h1 className="mb-[30px] text-indigo-400 font-sans font-normal lg:text-[1.5vw] sm:text-[2.5vw] text-[4.5vw]">
          Hi, my name is
        </h1>
        <h2 className="m-0 lg:text-[4vw] sm:text-[5vw] text-[7vw] font-semibold text-lightest-slate leading-[1.1] font-sans">
          Wellington Abreu.
        </h2>
        <h3 className="m-0 lg:text-[4vw] sm:text-[5vw] text-[7vw] font-semibold text-slate leading-[1.1] font-sans">
          I build web experiences.
        </h3>
        <div>
          <p className="mt-[20px] max-w-[540px] block text-base text-slate font-extralight lg:text-[1.5vw] sm:text-[2.5vw] text-[4.5vw]">
            I'm an industrial engineer by profession who decided to start from
            scratch. Currently, I'm looking to fully transition to web
            development while doing freelance development jobs for clients in my
            area.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyPortfolio;
