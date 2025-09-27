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
import MergePDF from "./pages/MergePDF";
import AISummarizer from "./pages/AISummarizer";
import CompressPDF from "./pages/CompressPDF";
import SplitPDF from "./pages/SplitPDF";
import EditPDF from "./pages/EditPDF";
import PDFToExcel from "./pages/PDFToExcel";
import RotatePDF from "./pages/RotatePDF";
import PDFViewer from "./pages/PDFViewer";
import ProtectPDF from "./pages/ProtectPDF";
import UnlockPDF from "./pages/UnlockPDF";
import PDFToPPT from "./pages/PDFToPPT";
import PDFToImage from "./pages/PDFToImage";
import PDFToText from "./pages/PDFToText";
import WordToPDF from "./pages/WordToPDF";
import ExcelToPDF from "./pages/ExcelToPDF";
import PPTToPDF from "./pages/PPTToPDF";
import JPGToPDF from "./pages/JPGToPDF";
import HTMLToPDF from "./pages/HTMLToPDF";
import ExtractPages from "./pages/ExtractPages";
import DeletePages from "./pages/DeletePages";
import OrganizePDF from "./pages/OrganizePDF";
import CropPDF from "./pages/CropPDF";
import ResizePDF from "./pages/ResizePDF";
import AlternateMix from "./pages/AlternateMix";
import SplitPages from "./pages/SplitPages";
import SplitBookmarks from "./pages/SplitBookmarks";
import SplitHalf from "./pages/SplitHalf";
import SplitSize from "./pages/SplitSize";
import SplitText from "./pages/SplitText";
import PDFChat from "./pages/PDFChat";
import AITranslate from "./pages/AITranslate";
import SignPDF from "./pages/SignPDF";
import OCRScanner from "./pages/OCRScanner";
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
          <Route path="/tools/merge-pdf" element={<MergePDF />} />
          <Route path="/tools/ai-summarizer" element={<AISummarizer />} />
          <Route path="/tools/compress-pdf" element={<CompressPDF />} />
          <Route path="/tools/split-pdf" element={<SplitPDF />} />
          <Route path="/tools/edit-pdf" element={<EditPDF />} />
          <Route path="/tools/pdf-to-excel" element={<PDFToExcel />} />
          <Route path="/tools/rotate-pdf" element={<RotatePDF />} />
          <Route path="/tools/pdf-viewer" element={<PDFViewer />} />
          <Route path="/tools/protect-pdf" element={<ProtectPDF />} />
          <Route path="/tools/unlock-pdf" element={<UnlockPDF />} />
          <Route path="/tools/pdf-to-ppt" element={<PDFToPPT />} />
          <Route path="/tools/pdf-to-image" element={<PDFToImage />} />
          <Route path="/tools/pdf-to-text" element={<PDFToText />} />
          <Route path="/tools/word-to-pdf" element={<WordToPDF />} />
          <Route path="/tools/excel-to-pdf" element={<ExcelToPDF />} />
          <Route path="/tools/ppt-to-pdf" element={<PPTToPDF />} />
          <Route path="/tools/jpg-to-pdf" element={<JPGToPDF />} />
          <Route path="/tools/html-to-pdf" element={<HTMLToPDF />} />
          <Route path="/tools/extract-pages" element={<ExtractPages />} />
          <Route path="/tools/delete-pages" element={<DeletePages />} />
          <Route path="/tools/organize-pdf" element={<OrganizePDF />} />
          <Route path="/tools/crop-pdf" element={<CropPDF />} />
          <Route path="/tools/resize-pdf" element={<ResizePDF />} />
          <Route path="/tools/alternate-mix" element={<AlternateMix />} />
          <Route path="/tools/split-pages" element={<SplitPages />} />
          <Route path="/tools/split-bookmarks" element={<SplitBookmarks />} />
          <Route path="/tools/split-half" element={<SplitHalf />} />
          <Route path="/tools/split-size" element={<SplitSize />} />
          <Route path="/tools/split-text" element={<SplitText />} />
          <Route path="/tools/pdf-chat" element={<PDFChat />} />
          <Route path="/tools/ai-translate" element={<AITranslate />} />
          <Route path="/tools/sign-pdf" element={<SignPDF />} />
          <Route path="/tools/ocr-scanner" element={<OCRScanner />} />
          
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
