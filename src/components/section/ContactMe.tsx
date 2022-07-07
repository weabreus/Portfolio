import { MailIcon, PhoneIcon } from "@heroicons/react/outline";

const ContactMe = () => {
  return (
    <div className="w-[45%] py-16 px-4 sm:py-24 sm:px-6 lg:px-8 rounded-3xl text-center">
      <h2 className="mb-2.5 font-semibold text-lightest-slate leading-none text-[2vw] text-center">
        Get In Touch
      </h2>
      <p className="m-0 mb-4 text-slate font-sans text-base font-extralight">
        I'm always looking for new opportunities, my inbox is always open. If
        you require any services or a team member for any of the following
        technologies, please feel free to reach out.
      </p>
      <a
        className="text-indigo-400 
        bg-transparent border border-solid
        border-indigo-400 rounded py-5 
        px-7 text-sm font-sans leading-none 
        no-underline cursor-pointer mt-12
         hover:bg-indigo-300/40"
        href="mailto:wellington.abreu@gmail.com"
      >
        Say hello!
      </a>
    </div>
  );
};

export default ContactMe;
