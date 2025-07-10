import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { UserSidebar } from "@/components/UserSidebar";
import { Button } from "@/components/ui/button";
import { Bell, Search, Settings, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface UserDashboardLayoutProps {
  children: React.ReactNode;
}

export function UserDashboardLayout({ children }: UserDashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <UserSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 bg-white/80 backdrop-blur-xl border-b border-white/20 flex items-center justify-between px-6 sticky top-0 z-40">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="text-gray-600 hover:text-gray-900" />
              
              {/* Search */}
              <div className="relative hidden md:block">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search documents..."
                  className="pl-10 pr-4 py-2 bg-white/60 backdrop-blur-sm border border-white/30 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent w-80"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
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

              {/* Profile */}
              <div className="flex items-center gap-3 pl-3 border-l border-gray-200">
                <div className="text-right hidden sm:block">
                  <div className="font-medium text-gray-900 text-sm">Sarah Johnson</div>
                  <div className="text-xs text-gray-500">Pro Plan</div>
                </div>
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}