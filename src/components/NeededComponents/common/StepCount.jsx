import React from "react";


export const StepCount = ({ step, titleText }) => {
  return (
    <div className="flex flex-col">
      <p className="pt-5">
        <span className="text-2xl">&rarr;</span>
        <span className="text-2xl font-bold text-html2"> Step {step}: </span>
        <span className="text-2xl">{titleText}</span>
      </p>
    </div>
  );
};
