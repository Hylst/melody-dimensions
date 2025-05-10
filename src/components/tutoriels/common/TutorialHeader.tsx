import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface TutorialHeaderProps {
  title: string;
  backLink?: string;
  backText?: string;
}

const TutorialHeader = ({
  title,
  backLink = "/technique/tutoriels",
  backText = "Retour aux tutoriels"
}: TutorialHeaderProps) => {
  return (
    <div className="mb-6">
      <Link to={backLink} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-2">
        <ArrowLeft className="h-4 w-4" /> {backText}
      </Link>
      <h1 className="text-3xl font-bold">{title}</h1>
    </div>
  );
};

export default TutorialHeader;