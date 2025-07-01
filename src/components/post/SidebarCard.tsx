import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SidebarCardProps {
  title: string;
  children: React.ReactNode;
}

export const SidebarCard = ({ title, children }: SidebarCardProps) => {
  return (
    <Card className="shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', height: '210px' }}>
      <CardHeader>
        <CardTitle className="text-lg flex items-center" style={{ color: '#333333' }}>
          <img 
            src="/lovable-uploads/ae91d7af-623f-450d-a983-ade57324b3db.png" 
            alt="bullet point" 
            className="w-4 h-4 mr-2"
          />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};