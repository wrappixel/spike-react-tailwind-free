import { Card, CardContent, CardHeader, CardTitle } from "src/components/ui/card";
import React from "react";

interface TitleCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  icon?: string;
  onDownload?: () => void;
}

const TitleCard: React.FC<TitleCardProps> = ({
  children,
  className,
  title,
}) => {
  return (
    <Card className={`card shadow-md border-0 bg-white dark:bg-dark overflow-hidden ${className}`}>
      <CardHeader className="flex flex-row justify-between items-center border-b border-gray-100 dark:border-white/5 px-6 py-4 space-y-0">
        <CardTitle className="text-xl font-semibold text-dark dark:text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {children}
      </CardContent>
    </Card>
  );
};

export default TitleCard;
