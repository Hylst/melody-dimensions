import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface HeaderProps {
  title: string;
  description: string;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <>
      <div className="mb-6">
        <Button variant="outline" size="sm" asChild>
          <Link to="/technique/tutoriels" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Retour aux tutoriels
          </Link>
        </Button>
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </>
  );
};

export default Header;