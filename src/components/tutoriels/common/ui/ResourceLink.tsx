import React, { ReactNode } from "react";
import { ExternalLink } from "lucide-react";

interface ResourceLinkProps {
  href: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  type?: "article" | "video" | "outil" | "documentation" | "autre";
}

const ResourceLink = ({
  href,
  title,
  description,
  icon,
  type = "autre"
}: ResourceLinkProps) => {
  // Configuration des styles selon le type de ressource
  const typeStyles = {
    article: "border-blue-200 hover:border-blue-300 dark:border-blue-800 dark:hover:border-blue-700",
    video: "border-red-200 hover:border-red-300 dark:border-red-800 dark:hover:border-red-700",
    outil: "border-green-200 hover:border-green-300 dark:border-green-800 dark:hover:border-green-700",
    documentation: "border-purple-200 hover:border-purple-300 dark:border-purple-800 dark:hover:border-purple-700",
    autre: "border-gray-200 hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700"
  };

  // Icônes par défaut selon le type
  const defaultIcons = {
    article: <ExternalLink className="h-4 w-4" />,
    video: <ExternalLink className="h-4 w-4" />,
    outil: <ExternalLink className="h-4 w-4" />,
    documentation: <ExternalLink className="h-4 w-4" />,
    autre: <ExternalLink className="h-4 w-4" />
  };

  const displayIcon = icon || defaultIcons[type];

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`block p-4 border rounded-lg ${typeStyles[type]} transition-colors hover:bg-gray-50 dark:hover:bg-gray-900`}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-1">
          {displayIcon}
        </div>
        <div>
          <h4 className="font-medium flex items-center gap-1">
            {title}
          </h4>
          {description && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
        </div>
      </div>
    </a>
  );
};

export default ResourceLink;