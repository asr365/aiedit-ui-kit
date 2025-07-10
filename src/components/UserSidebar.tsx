import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Home, FileText, Brain, BarChart3, Upload, Settings,
  Clock, Star, HelpCircle, CreditCard, User
} from "lucide-react";

export function UserSidebar() {
  const { state } = useSidebar();
  const location = useLocation();

  const mainItems = [
    { title: "Dashboard", url: "/dashboard", icon: Home },
    { title: "Documents", url: "/dashboard/documents", icon: FileText },
    { title: "AI Tools", url: "/dashboard/ai-tools", icon: Brain },
    { title: "Analytics", url: "/dashboard/analytics", icon: BarChart3 },
    { title: "Upload", url: "/dashboard/upload", icon: Upload },
  ];

  const accountItems = [
    { title: "Profile", url: "/dashboard/profile", icon: User },
    { title: "Billing", url: "/dashboard/billing", icon: CreditCard },
    { title: "Settings", url: "/dashboard/settings", icon: Settings },
  ];

  const supportItems = [
    { title: "Recent Activity", url: "/dashboard/activity", icon: Clock },
    { title: "Favorites", url: "/dashboard/favorites", icon: Star },
    { title: "Help Center", url: "/dashboard/help", icon: HelpCircle },
  ];

  const isActive = (path: string) => location.pathname === path;
  const getNavClassName = (path: string) => 
    isActive(path) 
      ? "bg-purple-100 text-purple-900 border-r-2 border-purple-500" 
      : "hover:bg-purple-50 text-gray-700";

  return (
    <Sidebar className={state === "collapsed" ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-white border-r border-purple-100">
        {/* Logo */}
        <div className="p-4 border-b border-purple-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <FileText className="w-4 h-4 text-white" />
            </div>
            {state !== "collapsed" && (
              <div>
                <h2 className="font-bold text-gray-900">DocuFlow</h2>
                <p className="text-xs text-gray-500">User Dashboard</p>
              </div>
            )}
          </div>
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Main
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${getNavClassName(item.url)}`}
                    >
                      <item.icon className="w-5 h-5" />
                      {state !== "collapsed" && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Account */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Account
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {accountItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${getNavClassName(item.url)}`}
                    >
                      <item.icon className="w-5 h-5" />
                      {state !== "collapsed" && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Support */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Support
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {supportItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${getNavClassName(item.url)}`}
                    >
                      <item.icon className="w-5 h-5" />
                      {state !== "collapsed" && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}