import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';

export default function AdminAuth({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    checkUser();
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });
    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  async function checkUser() {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
    setLoading(false);
  }

  async function handleLogin(e) {
    e.preventDefault();
    setError('');
    
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: 'admin@bootbrokers.co',
        password: password,
      });
      
      if (error) throw error;
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push('/');
  }

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <p>Loading...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #2d2a26 0%, #3d3832 100%)',
        padding: '20px'
      }}>
        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '8px',
          maxWidth: '400px',
          width: '100%'
        }}>
          <h1 style={{ marginTop: 0, fontFamily: '"Bebas Neue", sans-serif', fontSize: '2rem' }}>
            Blog Admin Login
          </h1>
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>
                Admin Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '1rem'
                }}
                required
              />
            </div>
            {error && (
              <div style={{ 
                padding: '12px', 
                background: '#fee', 
                border: '1px solid #fcc',
                borderRadius: '4px',
                marginBottom: '16px',
                color: '#c00'
              }}>
                {error}
              </div>
            )}
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                background: '#B08968',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Login
            </button>
          </form>
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <a href="/" style={{ color: '#B08968', textDecoration: 'none' }}>
              ? Back to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{
        background: '#2d2a26',
        color: 'white',
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ margin: 0, fontFamily: '"Bebas Neue", sans-serif', fontSize: '1.5rem' }}>
          Blog Admin
        </h1>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>
            {user.email}
          </span>
          <button
            onClick={handleLogout}
            style={{
              padding: '8px 16px',
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}
          >
            Logout
          </button>
        </div>
      </div>
      {children}
    </div>
  );
}
