"use client";

import { TESTIMONIES } from "@/constants";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { Fade } from "react-awesome-reveal";

const Testimonials: React.FC = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerWidth = containerRef.current?.clientWidth || 0;
    const itemWidth = 350; // Adjust this based on your item width

    setItemsToShow(Math.floor(containerWidth / itemWidth));
  }, [containerRef]);

  const handleScroll = (direction: "left" | "right") => {
    const newIndex =
      direction === "left"
        ? Math.max(scrollIndex - 1, 0)
        : Math.min(scrollIndex + 1, TESTIMONIES.length - itemsToShow);
    setScrollIndex(newIndex);
  };

  return (
    <section id="testimonials" className="overflow-hidden">
      <div className="max-w-6xl px-5 mx-auto mt-20 text-center">
        <Fade
          direction={"up"}
          delay={400}
          cascade
          damping={1e-1}
          // triggerOnce={true}
        >
          <h2 className="relative bold-32 lg:bold-40 text-center">
            What&rsquo;s different about Kauntabook?
          </h2>
        </Fade>

        <div
          ref={containerRef}
          className="flex flex-row items-center mt-20 space-x-4 overflow-hidden"
        >
          {scrollIndex > 0 && (
            <button onClick={() => handleScroll("left")}>{"<"}</button>
          )}
          {TESTIMONIES.slice(scrollIndex, scrollIndex + itemsToShow).map(
            (item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 space-y-2 rounded-lg bg-gray-10 md:w-1/3"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={64}
                  height={64}
                />

                <h5 className="text-lg font-bold">{item.name}</h5>
                <p className="text-sm text-darkGreyishBlue">
                  {item.description}
                </p>
              </div>
            )
          )}
          {scrollIndex < TESTIMONIES.length - itemsToShow && (
            <button onClick={() => handleScroll("right")}>{">"}</button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
