"use client";
import Button from "./Button";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <section
      id="home-section"
      className="max-container padding-container py-10 pb-20 mt-20"
    >
      <div className="relative  flex flex-col items-center">
        <Fade
          direction={"down"}
          delay={200}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <h1 className="bold-32 lg:bold-52 text-green-50 text-center max-w-[1440px] xl:max-w-[744px]">
            Kauntabook System for your financial solution
          </h1>
        </Fade>
        <Fade
          direction={"up"}
          delay={400}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <p className="regular-16 mt-6 text-gray-30 xl:max-w-[1200px] text-center">
            Record keeping, also known as bookkeeping, is the process of
            recording business transactions and events in a manual or digital
            ledger.
          </p>
        </Fade>

        <div className="flex w-full gap-3 sm:flex-row justify-center pt-5 mt-20">
          <Button
            type="button"
            title="Download App"
            link="https://drive.google.com/file/d/1fhuwHasLryo05RNEOoqzxe-vxqEQIKAg/view?usp=drivesdk"
            variant="btn_green"
          />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
