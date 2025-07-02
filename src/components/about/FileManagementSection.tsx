import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileUpload } from "@/components/upload/FileUpload";
import { XmlProcessor } from "@/components/admin/XmlProcessor";

export const FileManagementSection = () => {
  return (
    <>
      {/* File Upload Section */}
      <section className="py-8">
        <Card className="border-0 shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <CardHeader>
            <CardTitle className="text-2xl font-serif font-medium" style={{ color: '#333333' }}>
              Przesyłanie dokumentów XML
            </CardTitle>
          </CardHeader>
          <CardContent>
            <FileUpload />
          </CardContent>
        </Card>
      </section>

      {/* XML Processing Section */}
      <section className="py-8">
        <Card className="border-0 shadow-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <CardHeader>
            <CardTitle className="text-2xl font-serif font-medium" style={{ color: '#333333' }}>
              Przetwarzanie archiwum WordPress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <XmlProcessor />
          </CardContent>
        </Card>
      </section>
    </>
  );
};