import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Users, Activity, TrendingUp, FileText, Brain, Zap,
  Clock, Star, AlertCircle, CheckCircle, BarChart3,
  Globe, Smartphone, Monitor, Tablet, Settings, Shield,
  Ban, UserCheck, Trash2, Edit, Download, Upload,
  Database, Server, MessageSquare, Mail, DollarSign, Bell
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

  const recentUsers = [
    { id: 1, name: "John Doe", email: "john@example.com", plan: "Pro", status: "Active", joined: "2024-01-15" },
    { id: 2, name: "Sarah Johnson", email: "sarah@example.com", plan: "Free", status: "Active", joined: "2024-01-20" },
    { id: 3, name: "Mike Chen", email: "mike@example.com", plan: "Pro", status: "Suspended", joined: "2024-01-18" },
    { id: 4, name: "Emma Wilson", email: "emma@example.com", plan: "Enterprise", status: "Active", joined: "2024-01-12" },
    { id: 5, name: "Alex Brown", email: "alex@example.com", plan: "Free", status: "Inactive", joined: "2024-01-25" }
  ];

  return (
    <div className="p-8 space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Control Panel</h1>
          <p className="text-gray-600">Monitor and control all aspects of your application</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90">
          <Download className="w-4 h-4 mr-2" />
          Generate Report
        </Button>
      </div>

      <Tabs defaultValue="analytics" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:w-fit">
          <TabsTrigger value="analytics" className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="users" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Users
          </TabsTrigger>
          <TabsTrigger value="system" className="flex items-center gap-2">
            <Settings className="w-4 h-4" />
            System
          </TabsTrigger>
          <TabsTrigger value="content" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Content
          </TabsTrigger>
        </TabsList>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-6">
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
        </TabsContent>

        {/* User Management Tab */}
        <TabsContent value="users" className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Input placeholder="Search users..." className="w-80" />
              <Button variant="outline">
                <Users className="w-4 h-4 mr-2" />
                Export Users
              </Button>
            </div>
            <Button className="bg-gradient-primary hover:opacity-90">
              <UserCheck className="w-4 h-4 mr-2" />
              Add User
            </Button>
          </div>

          <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-elegant">
            <CardHeader>
              <CardTitle>User Management</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={user.plan === 'Enterprise' ? 'default' : user.plan === 'Pro' ? 'secondary' : 'outline'}>
                          {user.plan}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={user.status === 'Active' ? 'default' : user.status === 'Suspended' ? 'destructive' : 'secondary'}>
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{user.joined}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Ban className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* System Settings Tab */}
        <TabsContent value="system" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* App Settings */}
            <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Application Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Maintenance Mode</Label>
                    <p className="text-sm text-gray-500">Put the app in maintenance mode</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">New User Registrations</Label>
                    <p className="text-sm text-gray-500">Allow new users to sign up</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">AI Features</Label>
                    <p className="text-sm text-gray-500">Enable AI-powered tools</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="space-y-2">
                  <Label className="font-medium">Max File Size (MB)</Label>
                  <Input defaultValue="50" type="number" />
                </div>
              </CardContent>
            </Card>

            {/* Security Settings */}
            <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Security Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Two-Factor Authentication</Label>
                    <p className="text-sm text-gray-500">Require 2FA for all users</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Session Timeout</Label>
                    <p className="text-sm text-gray-500">Auto-logout inactive users</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="space-y-2">
                  <Label className="font-medium">Session Duration (hours)</Label>
                  <Input defaultValue="24" type="number" />
                </div>
                <div className="space-y-2">
                  <Label className="font-medium">Password Min Length</Label>
                  <Input defaultValue="8" type="number" />
                </div>
              </CardContent>
            </Card>

            {/* Database Management */}
            <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  Database Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Backup Database
                </Button>
                <Button variant="outline" className="w-full">
                  <Upload className="w-4 h-4 mr-2" />
                  Restore Database
                </Button>
                <Button variant="outline" className="w-full">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear Cache
                </Button>
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-center gap-2 text-yellow-800">
                    <AlertCircle className="w-4 h-4" />
                    <span className="font-medium">Database Size: 2.4 GB</span>
                  </div>
                  <p className="text-sm text-yellow-700 mt-1">Last backup: 2 hours ago</p>
                </div>
              </CardContent>
            </Card>

            {/* Server Status */}
            <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="w-5 h-5" />
                  Server Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">CPU Usage</span>
                  <span className="font-medium">45%</span>
                </div>
                <Progress value={45} className="h-2" />
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Memory Usage</span>
                  <span className="font-medium">68%</span>
                </div>
                <Progress value={68} className="h-2" />
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Disk Usage</span>
                  <span className="font-medium">32%</span>
                </div>
                <Progress value={32} className="h-2" />
                
                <Button variant="outline" className="w-full">
                  <Activity className="w-4 h-4 mr-2" />
                  View Server Logs
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Content Management Tab */}
        <TabsContent value="content" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Content Moderation */}
            <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Content Moderation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Auto-moderation</Label>
                    <p className="text-sm text-gray-500">Automatically flag inappropriate content</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="font-medium">Spam Detection</Label>
                    <p className="text-sm text-gray-500">Block spam documents</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Button variant="outline" className="w-full">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  Review Flagged Content (12)
                </Button>
              </CardContent>
            </Card>

            {/* Communication */}
            <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  User Communication
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-gradient-primary hover:opacity-90">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Announcement
                </Button>
                <Button variant="outline" className="w-full">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Broadcast Message
                </Button>
                <Button variant="outline" className="w-full">
                  <Bell className="w-4 h-4 mr-2" />
                  Push Notification
                </Button>
              </CardContent>
            </Card>

            {/* Analytics Export */}
            <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Data Export
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Export User Data
                </Button>
                <Button variant="outline" className="w-full">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Export Analytics
                </Button>
                <Button variant="outline" className="w-full">
                  <FileText className="w-4 h-4 mr-2" />
                  Export Documents
                </Button>
              </CardContent>
            </Card>

            {/* Financial Overview */}
            <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Revenue Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Monthly Revenue</span>
                  <span className="font-bold text-2xl text-green-600">$12,400</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Active Subscriptions</span>
                  <span className="font-medium">847</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Churn Rate</span>
                  <span className="font-medium text-red-600">3.2%</span>
                </div>
                <Button variant="outline" className="w-full">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Financial Reports
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;