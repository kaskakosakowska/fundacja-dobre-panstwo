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
        <AdminContentManager />
      </main>

      <Footer />
    </div>
  );
};

export default AdminDashboard;