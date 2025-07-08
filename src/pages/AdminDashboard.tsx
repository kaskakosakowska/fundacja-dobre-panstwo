import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AdminContentManager } from "@/components/admin/AdminContentManager";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen font-sans flex flex-col" style={{
      backgroundColor: '#F6F4EF'
    }}>
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto max-w-6xl px-6 mb-4">
          <Link to="/" className="inline-flex items-center hover:opacity-70 transition-opacity">
            <ArrowLeft className="h-4 w-4 mr-2" style={{ color: '#666666' }} />
            <span style={{ color: '#666666' }}>Powrót na stronę główną</span>
          </Link>
        </div>
        <AdminContentManager />
      </main>

      <Footer />
    </div>
  );
};

export default AdminDashboard;