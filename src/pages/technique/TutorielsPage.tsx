
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import TutorielsContent from "@/components/technique/TutorielsContent";

const TutorielsPage = () => {
  return (
    <div className="container py-10">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="sm" asChild className="mr-2">
          <Link to="/technique">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Retour
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Tutoriels Audio Pratiques</h1>
      </div>
      
      <p className="text-muted-foreground mb-8">
        Apprenez les techniques d'édition audio, d'enregistrement, de mixage et de mastering avec des logiciels gratuits et open source.
      </p>
      
      <TutorielsContent />
    </div>
  );
};

export default TutorielsPage;
