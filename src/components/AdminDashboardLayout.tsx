import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/AdminSidebar";
import { Button } from "@/components/ui/button";
import { Bell, Search, Settings, User, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface AdminDashboardLayoutProps {
  children: React.ReactNode;
}

export function AdminDashboardLayout({ children }: AdminDashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-gray-50 via-slate-50 to-zinc-50">
        <AdminSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 bg-white/90 backdrop-blur-xl border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-40">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="text-gray-600 hover:text-gray-900" />
              
              {/* Admin Badge */}
              <Badge className="bg-red-100 text-red-700 border-red-200">
                <Shield className="w-3 h-3 mr-1" />
                Admin Panel
              </Badge>
              
              {/* Search */}
              <div className="relative hidden md:block">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search users, data..."
                  className="pl-10 pr-4 py-2 bg-white/80 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent w-80"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* System Status */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-green-100 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-green-700 font-medium">System Healthy</span>
              </div>

              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5 text-gray-600" />
                <Badge className="absolute -top-1 -right-1 w-2 h-2 p-0 bg-red-500 border-2 border-white">
                  <span className="sr-only">New notifications</span>
                </Badge>
              </Button>

              {/* Settings */}
              <Button variant="ghost" size="sm">
                <Settings className="w-5 h-5 text-gray-600" />
              </Button>

              {/* Admin Profile */}
              <div className="flex items-center gap-3 pl-3 border-l border-gray-200">
                <div className="text-right hidden sm:block">
                  <div className="font-medium text-gray-900 text-sm">Admin User</div>
                  <div className="text-xs text-red-600">Super Admin</div>
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto bg-gray-50/50">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}