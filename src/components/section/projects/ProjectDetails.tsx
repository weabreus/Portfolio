const ProjectDetails: React.FC<{
  projectName: string;
  projectDescription: string;
  projectTechStack: string[];
  projectImgPath: string;
  orientation: string;
}> = ({
  projectName,
  projectDescription,
  projectTechStack,
  projectImgPath,
  orientation,
}) => {

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <li className="mb-[25px] block lg:relative lg:grid lg:gap-2.5 lg:grid-cols-12 lg:items-center">
      {/* Content */}
      <div
        className={
          classNames(orientation === "left" ? "md:col-start-7 md:col-end-[-1] md:text-right": "col-start-1 col-end-7 text-left"," relative row-start-1 row-end-[-1] z-50")
        }
      >
        <div>
          <p className="my-2.5 text-indigo-400 font-sans sm:text-sm lg:text-xs font-semibold">
            Latest Project
          </p>
          <h3 className="mb-[20px] text-lightest-slate md:text-[1vw] text-[5vw] font-bold">
            {projectName}
          </h3>
          <div className="shadow-projectDesc relative z-2 p-[25px] rounded bg-light-navy text-light-slate text-xs">
            <p>{projectDescription}</p>
          </div>
          {/* Project tech stack */}
          <ul className={classNames(orientation === "left" ? "justify-end" : "justify-start"," flex flex-wrap relative z-2 mt-[25px] mb-[10px] p-0 list-none text-xs text-light-slate")}>
            {projectTechStack.map((tech) => (
              <li className={classNames(orientation === "left" ? "ml-[20px]" : "mr-[20px]", "mb-[5px]")}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* Project Image */}
      <div className={classNames(orientation === "left" ? "col-start-1 col-end-8" : "col-start-6 col-end-[-1]","shadow-projectDesc row-start-1 row-end-[-1] relative z-1 list-none block")}>
        <a
          className="w-full h-full bg-indigo-400 rounded align-middle relative z-1 inline-block no-underline"
          href=""
        >
          <div className="rounded mix-blend-multiply filter w-full max-w-full h-full projectimage align-middle inline-block relative overflow-hidden">
            <div className="max-w-[700px] block">
              <img className="" src={projectImgPath} alt="" />
            </div>
          </div>
        </a>
      </div>
    </li>
  );
};

export default ProjectDetails;
