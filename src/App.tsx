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
import NotFound from "./pages/NotFound";
import { DashboardLayout } from "./components/DashboardLayout";

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
          
          {/* Dashboard Routes */}
          <Route path="/dashboard/*" element={
            <DashboardLayout>
              <Routes>
                <Route index element={<Dashboard />} />
                <Route path="documents" element={<div className="p-8"><h1 className="text-2xl font-bold">Documents</h1></div>} />
                <Route path="ai-tools" element={<div className="p-8"><h1 className="text-2xl font-bold">AI Tools</h1></div>} />
                <Route path="analytics" element={<div className="p-8"><h1 className="text-2xl font-bold">Analytics</h1></div>} />
                <Route path="upload" element={<div className="p-8"><h1 className="text-2xl font-bold">Upload</h1></div>} />
                <Route path="settings" element={<div className="p-8"><h1 className="text-2xl font-bold">Settings</h1></div>} />
              </Routes>
            </DashboardLayout>
          } />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
