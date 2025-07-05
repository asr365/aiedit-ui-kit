import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Home, BarChart3, FileText, Settings, Users, Upload,
  MessageSquare, Shield, Zap, Brain, Search, Archive,
  ChevronRight, Plus, Bell, User
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const mainNavItems = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Documents", url: "/dashboard/documents", icon: FileText },
  { title: "AI Tools", url: "/dashboard/ai-tools", icon: Brain },
  { title: "Analytics", url: "/dashboard/analytics", icon: BarChart3 },
  { title: "Upload", url: "/dashboard/upload", icon: Upload },
];

const toolsNavItems = [
  { title: "PDF Converter", url: "/dashboard/pdf-converter", icon: FileText },
  { title: "AI Summarizer", url: "/dashboard/ai-summarizer", icon: MessageSquare },
  { title: "Compressor", url: "/dashboard/compressor", icon: Archive },
  { title: "OCR Scanner", url: "/dashboard/ocr", icon: Search },
];

const settingsNavItems = [
  { title: "Profile", url: "/dashboard/profile", icon: User },
  { title: "Security", url: "/dashboard/security", icon: Shield },
  { title: "Notifications", url: "/dashboard/notifications", icon: Bell },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-700 font-medium border-r-2 border-purple-500" 
      : "hover:bg-white/50 text-gray-600 hover:text-gray-900";

  return (
    <Sidebar className={`${collapsed ? "w-16" : "w-72"} bg-gradient-sidebar border-r border-white/10`}>
      <SidebarContent className="bg-white/95 backdrop-blur-xl">
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            {!collapsed && (
              <div>
                <h2 className="font-bold text-lg text-gray-900">DocuFlow AI</h2>
                <p className="text-sm text-gray-500">AI-Powered Platform</p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        {!collapsed && (
          <div className="p-6 border-b border-gray-100">
            <Button className="w-full bg-gradient-primary hover:opacity-90 text-white">
              <Plus className="w-4 h-4 mr-2" />
              New Document
            </Button>
          </div>
        )}

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400 uppercase text-xs font-semibold px-6 py-3">
            Main
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title} className="px-3">
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="w-5 h-5" />
                      {!collapsed && <span className="ml-3">{item.title}</span>}
                      {item.title === "AI Tools" && !collapsed && (
                        <Badge className="ml-auto bg-purple-100 text-purple-700 text-xs">
                          Pro
                        </Badge>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Tools Navigation */}
        {!collapsed && (
          <SidebarGroup>
            <SidebarGroupLabel className="text-gray-400 uppercase text-xs font-semibold px-6 py-3">
              Tools
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {toolsNavItems.map((item) => (
                  <SidebarMenuItem key={item.title} className="px-3">
                    <SidebarMenuButton asChild>
                      <NavLink to={item.url} className={getNavCls}>
                        <item.icon className="w-5 h-5" />
                        <span className="ml-3">{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {/* Settings Navigation */}
        <SidebarGroup className="mt-auto">
          <SidebarGroupLabel className="text-gray-400 uppercase text-xs font-semibold px-6 py-3">
            Account
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsNavItems.map((item) => (
                <SidebarMenuItem key={item.title} className="px-3">
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="w-5 h-5" />
                      {!collapsed && <span className="ml-3">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Usage Stats */}
        {!collapsed && (
          <div className="p-6 mt-auto">
            <div className="bg-gradient-card rounded-xl p-4 border border-purple-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Pro Plan</div>
                  <div className="text-xs text-gray-500">47/100 documents</div>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '47%' }}></div>
              </div>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}