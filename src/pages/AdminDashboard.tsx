import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { MigrationDashboard } from '@/components/admin/MigrationDashboard';
import { Navigate } from 'react-router-dom';
import { User } from '@supabase/supabase-js';

interface Profile {
  role: 'super_admin' | 'editor' | 'viewer';
}

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);

      if (user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('role')
          .eq('user_id', user.id)
          .single();
        
        setProfile(profile);
      }
      
      setLoading(false);
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Sprawdzanie uprawnień...</p>
        </div>
      </div>
    );
  }

  if (!user || !profile || !['super_admin', 'editor'].includes(profile.role)) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <MigrationDashboard />
    </div>
  );
}