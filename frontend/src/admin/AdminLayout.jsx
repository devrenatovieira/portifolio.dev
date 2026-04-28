import { Navigate, Outlet } from "react-router-dom";
import { AdminSidebar } from "./AdminSidebar";
import { useAuth } from "../context/AuthContext";

export function AdminLayout() {
  const { user, loading } = useAuth();

  if (loading) return <div className="grid min-h-screen place-items-center bg-ink text-slate-300">Carregando...</div>;
  if (!user) return <Navigate to="/admin/login" replace />;

  return (
    <div className="min-h-screen bg-ink text-slate-100 lg:grid lg:grid-cols-[17rem_1fr]">
      <AdminSidebar />
      <main className="relative overflow-hidden p-4 md:p-8">
        <div className="tech-grid pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative">
        <Outlet />
        </div>
      </main>
    </div>
  );
}
