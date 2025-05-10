import React, { ReactNode } from "react";

interface Step {
  title: string;
  content: ReactNode;
  image?: string;
}

interface StepListProps {
  steps: Step[];
  className?: string;
}

const StepList = ({ steps, className = "" }: StepListProps) => {
  return (
    <div className={`space-y-8 ${className}`}>
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0 flex items-start">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">
              {index + 1}
            </div>
          </div>
          <div className="flex-grow space-y-3">
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <div className="text-muted-foreground">{step.content}</div>
            {step.image && (
              <img 
                src={step.image} 
                alt={`Illustration pour ${step.title}`} 
                className="rounded-lg mt-4 max-w-full md:max-w-md"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepList;