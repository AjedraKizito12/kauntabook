"use client";

import React, { useState } from "react";
import FaqItem from "./faq/item";
import { FAQ_LIST } from "@/constants";
import { Fade } from "react-awesome-reveal";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section
      id="faq-section"
      className="relative  rounded-md max-containter padding-container py-10 pb-20"
    >
      <div className="bg-gray-100  flex w-full flex-col pt-10 pb-10 lg:pt-20 rounded-lg">
        <div className="mx-10 pt-10 lg:mx-20">
          <div className="flex flex-col items-center sm:text-center pb-10 ">
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              // triggerOnce={true}
            >
              <h2 className="relative bold-32 lg:bold-40 text-center ">
                Frequently Asked Questions
              </h2>
            </Fade>

            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              // triggerOnce={true}
            >
              <p className="text-slate-800 text-center max-w-md">
                Need help using Kauntabook? Find answers to frequently asked
                questions here
              </p>
            </Fade>
          </div>

          <ul className="flex flex-col items-center gap-4 text-gray-30">
            {FAQ_LIST.map((faq, index) => (
              <FaqItem
                key={index}
                title={faq.title}
                description={faq.description}
                isExpanded={openIndex === index}
                handleToggle={() => handleToggle(index)}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
