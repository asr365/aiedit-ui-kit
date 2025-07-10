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
  BarChart3, Users, Settings, Shield, Database, Server,
  Activity, FileText, MessageSquare, DollarSign, AlertTriangle,
  Globe, Eye, Lock, Zap
} from "lucide-react";

export function AdminSidebar() {
  const { state } = useSidebar();
  const location = useLocation();

  const analyticsItems = [
    { title: "Overview", url: "/admin", icon: BarChart3 },
    { title: "User Analytics", url: "/admin/users", icon: Users },
    { title: "Performance", url: "/admin/performance", icon: Activity },
    { title: "Revenue", url: "/admin/revenue", icon: DollarSign },
  ];

  const managementItems = [
    { title: "User Management", url: "/admin/user-management", icon: Users },
    { title: "Content Control", url: "/admin/content", icon: FileText },
    { title: "Communications", url: "/admin/communications", icon: MessageSquare },
    { title: "Reports", url: "/admin/reports", icon: FileText },
  ];

  const systemItems = [
    { title: "System Health", url: "/admin/system", icon: Server },
    { title: "Database", url: "/admin/database", icon: Database },
    { title: "Security", url: "/admin/security", icon: Lock },
    { title: "Monitoring", url: "/admin/monitoring", icon: Eye },
  ];

  const configItems = [
    { title: "App Settings", url: "/admin/settings", icon: Settings },
    { title: "Feature Flags", url: "/admin/features", icon: Zap },
    { title: "Alerts", url: "/admin/alerts", icon: AlertTriangle },
    { title: "Global Config", url: "/admin/config", icon: Globe },
  ];

  const isActive = (path: string) => location.pathname === path;
  const getNavClassName = (path: string) => 
    isActive(path) 
      ? "bg-red-100 text-red-900 border-r-2 border-red-500" 
      : "hover:bg-gray-100 text-gray-700";

  return (
    <Sidebar className={state === "collapsed" ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-white border-r border-gray-200">
        {/* Logo */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            {state !== "collapsed" && (
              <div>
                <h2 className="font-bold text-gray-900">Admin Panel</h2>
                <p className="text-xs text-red-600">Control Center</p>
              </div>
            )}
          </div>
        </div>

        {/* Analytics */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Analytics
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {analyticsItems.map((item) => (
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

        {/* Management */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Management
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {managementItems.map((item) => (
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

        {/* System */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            System
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {systemItems.map((item) => (
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

        {/* Configuration */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Configuration
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {configItems.map((item) => (
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