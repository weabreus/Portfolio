import ProjectDetails from "./ProjectDetails";
import centinelaImage from "../img/Centinela.png";
import pimImage from "../img/PIM.png";

const MyProjects = () => {
  return (
    <section className="w-full h-fit sm:w-[80%] lg:w-[50%] sm:block sm:justify-start">
      <h2 className="numberedheading flex items-center relative mt-[10px] mb-[40px] mx-0 w-full md:text-[2vw] text-[6vw] whitespace-nowrap text-lightest-slate leading-[1.1] font-semibold">
        Things I've Built
      </h2>

      <ul className="list-none p-0 m-0 block">
        {/* Centinela Project */}
        <ProjectDetails
          projectName="Centinela Access Control"
          projectDescription="A web app to manage access control to living complexes. Manage
          complexes, buildings, units, residents, vehicles, authorized
          visitors and more."
          projectTechStack={["React", "Typescript", "Firebase", "Tailwind CSS"]}
          projectImgPath={centinelaImage}
          orientation="left"
        />

        {/* PIM Project */}
        <ProjectDetails
          projectName="Pruebas de Impacto Matematico"
          projectDescription="A web app to easily manage mathematic tests for the Department
          of Education in Puerto Rico. The application allows management of licenses, schools
          profiles, user profiles, question bank, test taking,
          automatic and assisted tests correction, and reporting of KPIS / Results."
          projectTechStack={["PHP", "Laravel", "MySQL", "Tailwind CSS"]}
          projectImgPath={pimImage}
          orientation="right"
        />
      </ul>
    </section>
  );
};

export default MyProjects;
