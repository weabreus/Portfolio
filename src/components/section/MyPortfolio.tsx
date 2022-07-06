import React from "react";
import {
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Competitive rates",
    description:
      "Consequuntur omnis dicta cumque, inventore atque ab dolores aspernatur tempora ab doloremque.",
    icon: GlobeAltIcon,
  },
  {
    name: "No hidden fees",
    description:
      "Corporis quisquam nostrum nulla veniam recusandae temporibus aperiam officia incidunt at distinctio ratione.",
    icon: ScaleIcon,
  },
  {
    name: "Instant transfers",
    description:
      "Omnis, illo delectus? Libero, possimus nulla nemo tenetur adipisci repellat dolore eligendi velit doloribus mollitia.",
    icon: LightningBoltIcon,
  },
  {
    name: "Reminder emails",
    description:
      "Veniam necessitatibus reiciendis fugit explicabo dolorem nihil et omnis assumenda odit? Quisquam unde accusantium.",
    icon: MailIcon,
  },
];
const MyPortfolio = () => {
  return (
    <section className="w-[50%] h-[50%]">
      <h1 className="mb-[30px] text-indigo-400 font-sans font-normal text-[1.5vw]">Hi, my name is</h1>
      <h2 className="m-0 text-[4vw] font-semibold text-lightest-slate leading-[1.1] font-sans">Wellington Abreu.</h2>
      <h3 className="m-0 text-[4vw] font-semibold text-slate leading-[1.1] font-sans">I build web experiences.</h3>
      <div>
        <p className="mt-[20px] max-w-[540px] block text-base text-slate font-extralight">
          I'm an industrial engineer by profession who decided to start from scratch. Currently, I'm looking to fully transition to web development while doing freelance development jobs for clients in my area.
        </p>
      </div>
    </section>
  );
};

export default MyPortfolio;
