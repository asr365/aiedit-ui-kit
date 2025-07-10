import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Pricing from "./pages/Pricing";
import Tools from "./pages/Tools";
import Features from "./pages/Features";
import About from "./pages/About";
import PDFToWord from "./pages/PDFToWord";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import { UserDashboardLayout } from "./components/UserDashboardLayout";
import { AdminDashboardLayout } from "./components/AdminDashboardLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/tools/pdf-to-word" element={<PDFToWord />} />
          
          {/* User Dashboard Routes */}
          <Route path="/dashboard/*" element={
            <UserDashboardLayout>
              <Routes>
                <Route index element={<Dashboard />} />
                <Route path="documents" element={<div className="p-8"><h1 className="text-2xl font-bold">Documents</h1></div>} />
                <Route path="ai-tools" element={<div className="p-8"><h1 className="text-2xl font-bold">AI Tools</h1></div>} />
                <Route path="analytics" element={<div className="p-8"><h1 className="text-2xl font-bold">Analytics</h1></div>} />
                <Route path="upload" element={<div className="p-8"><h1 className="text-2xl font-bold">Upload</h1></div>} />
                <Route path="settings" element={<div className="p-8"><h1 className="text-2xl font-bold">Settings</h1></div>} />
                <Route path="profile" element={<div className="p-8"><h1 className="text-2xl font-bold">Profile</h1></div>} />
                <Route path="billing" element={<div className="p-8"><h1 className="text-2xl font-bold">Billing</h1></div>} />
                <Route path="activity" element={<div className="p-8"><h1 className="text-2xl font-bold">Recent Activity</h1></div>} />
                <Route path="favorites" element={<div className="p-8"><h1 className="text-2xl font-bold">Favorites</h1></div>} />
                <Route path="help" element={<div className="p-8"><h1 className="text-2xl font-bold">Help Center</h1></div>} />
              </Routes>
            </UserDashboardLayout>
          } />
          
          {/* Admin Dashboard Routes */}
          <Route path="/admin/*" element={
            <AdminDashboardLayout>
              <Routes>
                <Route index element={<AdminDashboard />} />
                <Route path="users" element={<div className="p-8"><h1 className="text-2xl font-bold">User Analytics</h1></div>} />
                <Route path="performance" element={<div className="p-8"><h1 className="text-2xl font-bold">Performance</h1></div>} />
                <Route path="revenue" element={<div className="p-8"><h1 className="text-2xl font-bold">Revenue</h1></div>} />
                <Route path="user-management" element={<div className="p-8"><h1 className="text-2xl font-bold">User Management</h1></div>} />
                <Route path="content" element={<div className="p-8"><h1 className="text-2xl font-bold">Content Control</h1></div>} />
                <Route path="communications" element={<div className="p-8"><h1 className="text-2xl font-bold">Communications</h1></div>} />
                <Route path="reports" element={<div className="p-8"><h1 className="text-2xl font-bold">Reports</h1></div>} />
                <Route path="system" element={<div className="p-8"><h1 className="text-2xl font-bold">System Health</h1></div>} />
                <Route path="database" element={<div className="p-8"><h1 className="text-2xl font-bold">Database</h1></div>} />
                <Route path="security" element={<div className="p-8"><h1 className="text-2xl font-bold">Security</h1></div>} />
                <Route path="monitoring" element={<div className="p-8"><h1 className="text-2xl font-bold">Monitoring</h1></div>} />
                <Route path="settings" element={<div className="p-8"><h1 className="text-2xl font-bold">App Settings</h1></div>} />
                <Route path="features" element={<div className="p-8"><h1 className="text-2xl font-bold">Feature Flags</h1></div>} />
                <Route path="alerts" element={<div className="p-8"><h1 className="text-2xl font-bold">Alerts</h1></div>} />
                <Route path="config" element={<div className="p-8"><h1 className="text-2xl font-bold">Global Config</h1></div>} />
              </Routes>
            </AdminDashboardLayout>
          } />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
