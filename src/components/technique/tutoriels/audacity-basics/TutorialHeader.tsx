import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const TutorialHeader = () => {
  return (
    <div className="flex items-center mb-6">
      <Button variant="ghost" size="sm" asChild className="mr-2">
        <Link to="/technique/tutoriels">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Retour aux tutoriels
        </Link>
      </Button>
      <h1 className="text-3xl font-bold">Audacity - Les bases</h1>
    </div>
  );
};

export default TutorialHeader;