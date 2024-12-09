import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import { Toaster } from "react-hot-toast";
import CompleteProfiles from "./pages/CompleteProfiles";
import Home from "./pages/Home";
import NOtFound from "./pages/NOtFound";
import AppLayout from "./pages/AppLayout";
import OwnerDashboard from "./pages/OwnerDAshboard";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import OwnerLayout from "./features/owner/OwnerLayout";
import FreeLancerLayout from "./features/freelancer/FreeLancerLayout";
import FreeLancerDashboard from "./pages/FreeLancerDashboard";
import Proposals from "./pages/Proposals";
import SubmitedProject from "./pages/SubmitedProject";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedRoute from "./ui/ProtectedRoute";
import AdminLayout from "./features/admin/AdminLayout";
import Users from "./pages/Users";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <>
      <Toaster />
      <ReactQueryDevtools initialIsOpen={false} />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/complete-profile" element={<CompleteProfiles />} />
        <Route
          path="/owner"
          element={
            <ProtectedRoute>
              <OwnerLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<OwnerDashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<Project />} />
        </Route>
        <Route
          path="/freelancer"
          element={
            <ProtectedRoute>
              <FreeLancerLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<FreeLancerDashboard />} />
          <Route path="proposals" element={<Proposals />} />
          <Route path="projects" element={<SubmitedProject />} />
        </Route>
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="projects" element={<SubmitedProject />} />
          <Route path="proposals" element={<Proposals />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NOtFound />} />
      </Routes>
    </>
  );
}

export default App;
