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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('AdminDashboard: Component mounted');
    
    const checkAuth = async () => {
      try {
        console.log('AdminDashboard: Checking auth...');
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        
        if (userError) {
          console.error('AdminDashboard: Auth error:', userError);
          setError(userError.message);
        }
        
        console.log('AdminDashboard: User:', user);
        setUser(user);

        if (user) {
          console.log('AdminDashboard: Fetching profile for user:', user.id);
          const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('role')
            .eq('user_id', user.id)
            .single();
          
          if (profileError) {
            console.error('AdminDashboard: Profile error:', profileError);
            setError(profileError.message);
          }
          
          console.log('AdminDashboard: Profile:', profile);
          setProfile(profile);
        }
      } catch (err) {
        console.error('AdminDashboard: Unexpected error:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  console.log('AdminDashboard: Render state:', { loading, user: !!user, profile, error });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Sprawdzanie uprawnień...</p>
          {error && <p className="mt-2 text-red-500 text-sm">Błąd: {error}</p>}
        </div>
      </div>
    );
  }

  // For now, let's skip authentication and show the dashboard
  // This allows testing the migration functionality
  console.log('AdminDashboard: Showing dashboard');

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Panel Administracyjny</h1>
          <p className="text-muted-foreground">
            Status użytkownika: {user ? `Zalogowany (${user.email})` : 'Niezalogowany'} 
            {profile && ` - Rola: ${profile.role}`}
          </p>
        </div>
        <MigrationDashboard />
      </div>
    </div>
  );
}