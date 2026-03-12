// import { Link, useNavigate } from 'react-router';
import { ShoppingCart, Package, LogOut, User, Shield } from 'lucide-react';
import { Button } from '../ui/button';
// import { useCart } from '../../context/CartContext';
// import { supabase } from '../../lib/supabase';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { toast } from 'sonner';

export default function Header() {
  // const { cartCount } = useCart();
  // const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setUser(session?.user || null);
  //   });

  //   const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
  //     setUser(session?.user || null);
  //   });

  //   return () => subscription.unsubscribe();
  // }, []);

  // useEffect(() => {
  //   if (user) {
  //     checkAdmin();
  //   } else {
  //     setIsAdmin(false);
  //   }
  // }, [user]);

  // const checkAdmin = async () => {
  //   try {
  //     const { data: { session } } = await supabase.auth.getSession();
  //     if (!session) return;

  //     const response = await fetch(
  //       `https://mksodtnoxxavuxjbbmrs.supabase.co/functions/v1/make-server-45d60bc3/check-admin`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${session.access_token}`,
  //         },
  //       }
  //     );
  //     const data = await response.json();
  //     setIsAdmin(true);
  //   } catch (error) {
  //     setIsAdmin(true);
  //     console.error('Error checking admin status:', error);
  //   }
  // };

  // const handleLogout = async () => {
  //   await supabase.auth.signOut();
  //   setUser(null);
  //   setIsAdmin(false);
  //   toast.success('Logged out successfully');
  //   navigate('/');
  // };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 backdrop-blur-lg bg-[#1b263b]/80 border-b border-[#415a77]"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Package className="w-8 h-8 text-[#778da9]" />
            <div>
              <h1 className="text-xl font-bold text-[#e0e1dd]">MPS</h1>
              <p className="text-xs text-[#778da9]">Mavon Printing Service</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <div className="text-[#e0e1dd] hover:text-[#778da9] transition-colors">
              Home
            </div>
            <div className="text-[#e0e1dd] hover:text-[#778da9] transition-colors">
              Products
            </div>
            {/* {user && (
              <Link to="/my-orders" className="text-[#e0e1dd] hover:text-[#778da9] transition-colors">
                My Orders
              </Link>
            )} */}
          </nav>

          <div className="flex items-center gap-3">
            {user ? (
              <>
                {isAdmin && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigate('/admin')}
                    className="hidden md:flex gap-2"
                  >
                    <Shield className="w-4 h-4" />
                    Admin
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative"
                  onClick={() => navigate('/cart')}
                >
                  <ShoppingCart className="w-5 h-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#778da9] text-[#0d1b2a] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Button>
                <Button variant="ghost" size="icon" onClick={handleLogout}>
                  <LogOut className="w-5 h-5" />
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative"
                  onClick={() => navigate('/cart')}
                >
                  <ShoppingCart className="w-5 h-5" />
                  {/* {cartCount > 0 && ( */}
                    <span className="absolute -top-1 -right-1 bg-[#778da9] text-[#0d1b2a] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {/* {cartCount} */}2
                    </span>
                  {/* )} */}
                </Button>
                <Button onClick={() => navigate('/login')}>Login</Button>
              </>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {/* <nav className="md:hidden flex items-center gap-4 mt-4 pt-4 border-t border-[#415a77]">
          <Link to="/" className="text-[#e0e1dd] hover:text-[#778da9] transition-colors text-sm">
            Home
          </Link>
          <Link to="/products" className="text-[#e0e1dd] hover:text-[#778da9] transition-colors text-sm">
            Products
          </Link>
          {user && (
            <Link to="/my-orders" className="text-[#e0e1dd] hover:text-[#778da9] transition-colors text-sm">
              My Orders
            </Link>
          )}
          {user && isAdmin && (
            <Link to="/admin" className="text-[#e0e1dd] hover:text-[#778da9] transition-colors text-sm">
              Admin
            </Link>
          )}
        </nav> */}
      </div>
    </motion.header>
  );
}
