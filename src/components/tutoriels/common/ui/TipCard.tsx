import React, { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LightbulbIcon } from "lucide-react";

interface TipCardProps {
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
  variant?: "tip" | "warning" | "info";
}

const TipCard = ({
  title,
  icon,
  children,
  variant = "tip"
}: TipCardProps) => {
  // Configuration des styles selon le variant
  const variantStyles = {
    tip: {
      borderColor: "border-amber-300 dark:border-amber-700",
      bgColor: "bg-amber-50 dark:bg-amber-950/30",
      titleColor: "text-amber-800 dark:text-amber-300",
      defaultIcon: <LightbulbIcon className="h-5 w-5 text-amber-600 dark:text-amber-400" />,
      defaultTitle: "Conseil"
    },
    warning: {
      borderColor: "border-red-300 dark:border-red-700",
      bgColor: "bg-red-50 dark:bg-red-950/30",
      titleColor: "text-red-800 dark:text-red-300",
      defaultIcon: <LightbulbIcon className="h-5 w-5 text-red-600 dark:text-red-400" />,
      defaultTitle: "Attention"
    },
    info: {
      borderColor: "border-blue-300 dark:border-blue-700",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      titleColor: "text-blue-800 dark:text-blue-300",
      defaultIcon: <LightbulbIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
      defaultTitle: "Information"
    }
  };

  const styles = variantStyles[variant];
  const displayTitle = title || styles.defaultTitle;
  const displayIcon = icon || styles.defaultIcon;

  return (
    <Card className={`border-l-4 ${styles.borderColor} ${styles.bgColor}`}>
      {displayTitle && (
        <CardHeader className="pb-2 pt-4">
          <CardTitle className={`text-lg flex items-center gap-2 ${styles.titleColor}`}>
            {displayIcon}
            {displayTitle}
          </CardTitle>
        </CardHeader>
      )}
      <CardContent className="pt-2">
        {children}
      </CardContent>
    </Card>
  );
};

export default TipCard;