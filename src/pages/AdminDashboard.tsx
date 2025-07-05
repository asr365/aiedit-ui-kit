import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Users, Activity, TrendingUp, FileText, Brain, Zap,
  Clock, Star, AlertCircle, CheckCircle, BarChart3,
  Globe, Smartphone, Monitor, Tablet
} from "lucide-react";

const AdminDashboard = () => {
  const userStats = [
    { title: "Total Users", value: "12,847", change: "+18%", icon: Users, color: "text-blue-600" },
    { title: "Active Today", value: "3,204", change: "+12%", icon: Activity, color: "text-green-600" },
    { title: "Documents Processed", value: "847K", change: "+23%", icon: FileText, color: "text-purple-600" },
    { title: "AI Operations", value: "1.2M", change: "+31%", icon: Brain, color: "text-pink-600" }
  ];

  const topTools = [
    { name: "PDF Converter", usage: 85, users: "8.2K", color: "bg-blue-500" },
    { name: "AI Summarizer", usage: 78, users: "7.1K", color: "bg-purple-500" },
    { name: "OCR Scanner", usage: 65, users: "5.8K", color: "bg-pink-500" },
    { name: "Compressor", usage: 52, users: "4.3K", color: "bg-indigo-500" }
  ];

  const userBehavior = [
    { metric: "Avg Session Time", value: "12m 34s", trend: "up" },
    { metric: "Pages per Session", value: "4.2", trend: "up" },
    { metric: "Bounce Rate", value: "23%", trend: "down" },
    { metric: "Return Users", value: "68%", trend: "up" }
  ];

  const deviceStats = [
    { device: "Desktop", percentage: 65, icon: Monitor, color: "bg-blue-500" },
    { device: "Mobile", percentage: 28, icon: Smartphone, color: "bg-green-500" },
    { device: "Tablet", percentage: 7, icon: Tablet, color: "bg-purple-500" }
  ];

  return (
    <div className="p-8 space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Monitor user behavior and app performance</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90">
          Generate Report
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {userStats.map((stat, index) => (
          <Card key={index} className="bg-white/80 backdrop-blur-xl border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover-scale animate-slide-in-up" style={{ animationDelay: `${index * 100}ms` }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-green-500" />
                <span className="text-xs text-green-600 font-medium">{stat.change}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Analytics */}
        <div className="lg:col-span-2 space-y-6">
          {/* Top Tools */}
          <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-elegant hover-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-600" />
                Most Popular Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topTools.map((tool, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gradient-card hover:bg-white/60 transition-all">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${tool.color}`} />
                      <span className="font-medium text-gray-900">{tool.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">{tool.users} users</div>
                        <div className="text-xs text-gray-500">{tool.usage}% usage</div>
                      </div>
                      <div className="w-20">
                        <Progress value={tool.usage} className="h-2" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* User Behavior */}
          <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-green-600" />
                User Behavior Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {userBehavior.map((metric, index) => (
                  <div key={index} className="p-4 rounded-xl bg-gradient-card">
                    <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.metric}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Analytics */}
        <div className="space-y-6">
          {/* Device Usage */}
          <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="w-5 h-5 text-blue-600" />
                Device Usage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {deviceStats.map((device, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <device.icon className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-700">{device.device}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div className={`${device.color} h-2 rounded-full`} style={{ width: `${device.percentage}%` }}></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{device.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Real-time Activity */}
          <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-red-600 pulse-slow" />
                Live Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full bounce-gentle" />
                  <span className="text-gray-600">234 users online now</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full bounce-gentle" style={{ animationDelay: '0.5s' }} />
                  <span className="text-gray-600">15 documents processing</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-purple-500 rounded-full bounce-gentle" style={{ animationDelay: '1s' }} />
                  <span className="text-gray-600">8 AI operations active</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* System Health */}
          <Card className="bg-gradient-primary border-0 shadow-elegant">
            <CardContent className="p-6">
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-white mx-auto mb-3 rotate-slow" />
                <h3 className="font-bold text-white mb-2">System Status</h3>
                <p className="text-white/80 text-sm mb-4">All systems operational</p>
                <Badge className="bg-white/20 text-white">99.9% Uptime</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;