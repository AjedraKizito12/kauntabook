"use client";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

type faqProps = {
  title: string;
  description: string;
  isExpanded: boolean;
  handleToggle: any;
};

const FaqItem = ({
  title,
  description,
  isExpanded,
  handleToggle,
}: faqProps) => {
  return (
    <div className="flex flex-col w-full p-4 items-center bg-white rounded-lg lg:rounded-lg">
      <div
        className="flex justify-between items-center w-full cursor-pointer"
        onClick={handleToggle}
      >
        <h6 className="text-slate-800 regular-18">{title}</h6>
        <FaChevronRight
          className={`text-slate-400 transition-all ${
            isExpanded ? "rotate-90" : ""
          }`}
          size={18}
        />
      </div>
      {isExpanded && (
        <div className="mt-2 regular-14 text-gray-600 border-t pt-2 w-full text-left">
          {description}
        </div>
      )}
    </div>
  );
};

export default FaqItem;
