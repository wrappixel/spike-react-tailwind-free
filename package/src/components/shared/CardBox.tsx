import { Card, CardContent } from 'src/components/ui/card';
import React from 'react';

interface MyAppProps {
  children: React.ReactNode;
  className?: string;
}
const CardBox: React.FC<MyAppProps> = ({ children, className }) => {
  return (
    <Card className={`card shadow-md border-0 bg-card ring-0 h-full ${className}`}>
      <CardContent className="p-6">
        {children}
      </CardContent>
    </Card>
  );
};
export default CardBox;
