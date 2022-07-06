import centinelaImage from "./img/carlos-muza-hpjSkU2UYSU-unsplash.jpg"

const MyProjects = () => {
  return (
    <section className="w-[50%] h-[80%]">
      <h2 className="numberedheading flex items-center relative mt-[10px] mb-[40px] mx-0 w-full text-[2vw] whitespace-nowrap text-lightest-slate leading-[1.1] font-semibold">
        Things I've Built
      </h2>

      <ul className="list-none p-0 m-0 block">
        {/* Centinela Project */}
        <li className="mb-[100px] relative grid gap-2.5 grid-cols-12 items-center">
          {/* Content */}
          <div className="  col-start-7 col-end-[-1] text-right relative row-start-1 row-end-[-1] z-50">
            <div>
              <p className="my-2.5 text-indigo-400 font-sans text-xs font-semibold">
                Latest Project
              </p>
              <h3 className="mb-[20px] text-lightest-slate text-[1vw] font-bold">
                Centinela Access Control
              </h3>
              <div className=" shadow-projectDesc relative z-2 p-[25px] rounded bg-light-navy text-light-slate text-xs">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam auctor massa non molestie imperdiet. Vestibulum
                  sollicitudin libero ultrices ullamcorper congue. Praesent ante
                  neque, pulvinar eget elit a, mollis vulputate tortor.
                </p>
              </div>
              {/* Project tech stack */}
              <ul className=" justify-end flex flex-wrap relative z-2 mt-[25px] mb-[10px] p-0 list-none text-xs text-light-slate">
                <li className="mb-[5px] ml-[20px]">React</li>
                <li className="mb-[5px] ml-[20px]">Typescript</li>
                <li className="mb-[5px] ml-[20px]">Firebase</li>
                <li className="mb-[5px] ml-[20px]">Tailwind CSS</li>
              </ul>
            </div>
          </div>
          {/* Project Image */}
          <div className=" col-start-1 col-end-8 shadow-projectDesc row-start-1 row-end-[-1] relative z-1 list-none block">
            <a className="w-full h-full bg-indigo-400 rounded align-middle relative z-1 inline-block no-underline" href="">
              <div className="rounded mix-blend-multiply filter w-full max-w-full h-full projectimage align-middle inline-block relative overflow-hidden">
                <div className="max-w-[700px] block">
                  <img className="" src={centinelaImage} alt="" />  
                </div>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default MyProjects;
