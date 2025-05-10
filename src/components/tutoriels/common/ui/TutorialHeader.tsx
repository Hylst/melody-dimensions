import React from "react";

export interface TutorialHeaderProps {
  title: string;
  description?: string;
}

const TutorialHeader = ({ title, description }: TutorialHeaderProps) => {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold">{title}</h1>
      {description && (
        <p className="text-muted-foreground">{description}</p>
      )}
    </div>
  );
};

export default TutorialHeader;