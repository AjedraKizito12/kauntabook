"use client";
import { Fade } from "react-awesome-reveal";
import { FEATURES } from "@/constants";
import Image from "next/image";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section
      id="features-section"
      className="max-containter padding-container flexCenter flex-col overflow-hidden bg-feature-bg bg-center bg-no-repeat py-10"
    >
      <div className="relative w-full flex justify-end">
        {/* LEFT */}

        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        {/* RIGHT */}
        <div className=" flex w-full flex-col lg:w-[60%]">
          <Fade
            direction={"up"}
            delay={400}
            cascade
            damping={1e-1}
            // triggerOnce={true}
          >
            <h2 className="relative bold-32 lg:bold-40">Kauntabook features</h2>
          </Fade>
          <Fade cascade direction="right" triggerOnce>
            <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20 ">
              {FEATURES.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  title={feature.title}
                  icon={feature.icon}
                  description={feature.description}
                />
              ))}
            </ul>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Features;
