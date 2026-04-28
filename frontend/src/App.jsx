import { lazy, Suspense, useCallback, useState } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { CodeStartupIntro } from "./components/CodeStartupIntro";
import { LoadingState } from "./components/LoadingState";

const AdminLayout = lazy(() => import("./admin/AdminLayout").then((module) => ({ default: module.AdminLayout })));
const Dashboard = lazy(() => import("./admin/Dashboard").then((module) => ({ default: module.Dashboard })));
const Login = lazy(() => import("./admin/Login").then((module) => ({ default: module.Login })));
const MessagesAdmin = lazy(() => import("./admin/MessagesAdmin").then((module) => ({ default: module.MessagesAdmin })));
const ProjectForm = lazy(() => import("./admin/ProjectForm").then((module) => ({ default: module.ProjectForm })));
const ProjectsAdmin = lazy(() => import("./admin/ProjectsAdmin").then((module) => ({ default: module.ProjectsAdmin })));
const ServicesAdmin = lazy(() => import("./admin/ServicesAdmin").then((module) => ({ default: module.ServicesAdmin })));
const SettingsAdmin = lazy(() => import("./admin/SettingsAdmin").then((module) => ({ default: module.SettingsAdmin })));
const PublicLayout = lazy(() => import("./components/PublicLayout").then((module) => ({ default: module.PublicLayout })));
const About = lazy(() => import("./pages/About").then((module) => ({ default: module.About })));
const Contact = lazy(() => import("./pages/Contact").then((module) => ({ default: module.Contact })));
const Home = lazy(() => import("./pages/Home").then((module) => ({ default: module.Home })));
const Process = lazy(() => import("./pages/Process").then((module) => ({ default: module.Process })));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails").then((module) => ({ default: module.ProjectDetails })));
const Projects = lazy(() => import("./pages/Projects").then((module) => ({ default: module.Projects })));
const Services = lazy(() => import("./pages/Services").then((module) => ({ default: module.Services })));

export function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showIntro, setShowIntro] = useState(() => !window.location.pathname.startsWith("/admin"));
  const finishIntro = useCallback(
    (goHome = false) => {
      setShowIntro(false);
      if (goHome && location.pathname !== "/") navigate("/");
    },
    [location.pathname, navigate]
  );

  return (
    <>
      {showIntro && <CodeStartupIntro onFinish={finishIntro} />}
      <div className={showIntro ? "pointer-events-none opacity-0" : "opacity-100 transition-opacity duration-700"}>
        <Suspense fallback={<div className="section container"><LoadingState /></div>}>
          <Routes>
            <Route element={<PublicLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/servicos" element={<Services />} />
              <Route path="/projetos" element={<Projects />} />
              <Route path="/projetos/:slug" element={<ProjectDetails />} />
              <Route path="/processo" element={<Process />} />
              <Route path="/contato" element={<Contact />} />
            </Route>

            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Navigate to="/admin/dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="projetos" element={<ProjectsAdmin />} />
              <Route path="projetos/novo" element={<ProjectForm />} />
              <Route path="projetos/editar/:id" element={<ProjectForm />} />
              <Route path="servicos" element={<ServicesAdmin />} />
              <Route path="mensagens" element={<MessagesAdmin />} />
              <Route path="configuracoes" element={<SettingsAdmin />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </>
  );
}
