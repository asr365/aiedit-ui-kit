import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  FileText, Brain, BarChart3, Upload, Zap, Clock,
  CheckCircle, AlertCircle, TrendingUp, Users, Download,
  Star, ArrowRight, Plus, Search, Filter, MoreHorizontal
} from "lucide-react";

const Dashboard = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("7d");

  const stats = [
    {
      title: "Total Documents",
      value: "2,847",
      change: "+12%",
      trend: "up",
      icon: FileText,
      color: "text-blue-600"
    },
    {
      title: "AI Processes",
      value: "1,203",
      change: "+8%",
      trend: "up",
      icon: Brain,
      color: "text-purple-600"
    },
    {
      title: "Time Saved",
      value: "47h",
      change: "+15%",
      trend: "up",
      icon: Clock,
      color: "text-green-600"
    },
    {
      title: "Success Rate",
      value: "99.2%",
      change: "+0.5%",
      trend: "up",
      icon: CheckCircle,
      color: "text-emerald-600"
    }
  ];

  const recentDocuments = [
    {
      id: 1,
      name: "Q4 Financial Report.pdf",
      type: "PDF",
      size: "2.4 MB",
      status: "Completed",
      date: "2 hours ago",
      aiSummary: true
    },
    {
      id: 2,
      name: "Legal Contract Draft.docx",
      type: "Word",
      size: "1.8 MB",
      status: "Processing",
      date: "4 hours ago",
      aiSummary: false
    },
    {
      id: 3,
      name: "Market Analysis.xlsx",
      type: "Excel",
      size: "3.2 MB",
      status: "Completed",
      date: "6 hours ago",
      aiSummary: true
    },
    {
      id: 4,
      name: "Product Presentation.pptx",
      type: "PowerPoint",
      size: "5.1 MB",
      status: "Completed",
      date: "1 day ago",
      aiSummary: true
    }
  ];

  const quickActions = [
    {
      title: "Upload Document",
      description: "Upload and process new documents",
      icon: Upload,
      action: "upload",
      color: "bg-blue-500"
    },
    {
      title: "AI Summarizer",
      description: "Get intelligent document summaries",
      icon: Brain,
      action: "summarize",
      color: "bg-purple-500"
    },
    {
      title: "PDF Converter",
      description: "Convert PDFs to other formats",
      icon: FileText,
      action: "convert",
      color: "bg-indigo-500"
    },
    {
      title: "OCR Scanner",
      description: "Extract text from images",
      icon: Search,
      action: "ocr",
      color: "bg-pink-500"
    }
  ];

  const aiInsights = [
    {
      title: "Document Categories",
      data: [
        { label: "Financial", value: 35, color: "bg-blue-500" },
        { label: "Legal", value: 28, color: "bg-purple-500" },
        { label: "Marketing", value: 22, color: "bg-pink-500" },
        { label: "Technical", value: 15, color: "bg-indigo-500" }
      ]
    }
  ];

  return (
    <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome back, Sarah 👋
              </h1>
              <p className="text-gray-600">
                Here's what's happening with your documents today.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button className="bg-gradient-primary hover:opacity-90">
                <Plus className="w-4 h-4 mr-2" />
                New Document
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="bg-white/80 backdrop-blur-xl border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <span className="text-xs text-green-600 font-medium">
                    {stat.change}
                  </span>
                  <span className="text-xs text-gray-500">vs last week</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-purple-600" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {quickActions.map((action, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-gradient-card border border-white/50 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
                    >
                      <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                        <action.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm">
                        {action.title}
                      </h3>
                      <p className="text-xs text-gray-600">
                        {action.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Documents */}
            <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-elegant">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    Recent Documents
                  </CardTitle>
                  <Button variant="ghost" size="sm">
                    View All
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentDocuments.map((doc) => (
                    <div
                      key={doc.id}
                      className="flex items-center gap-4 p-4 rounded-xl bg-gradient-card border border-white/50 hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-gray-900 text-sm">
                            {doc.name}
                          </h4>
                          {doc.aiSummary && (
                            <Badge className="bg-purple-100 text-purple-700 text-xs">
                              <Brain className="w-3 h-3 mr-1" />
                              AI
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>{doc.type}</span>
                          <span>{doc.size}</span>
                          <span>{doc.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant={doc.status === "Completed" ? "default" : "secondary"}
                          className={doc.status === "Completed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}
                        >
                          {doc.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Insights */}
            <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-pink-600" />
                  AI Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Document Categories</h4>
                    <div className="space-y-3">
                      {aiInsights[0].data.map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${item.color}`} />
                            <span className="text-sm text-gray-600">{item.label}</span>
                          </div>
                          <span className="text-sm font-medium text-gray-900">{item.value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Usage Stats */}
            <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-indigo-600" />
                  Usage This Month
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Documents Processed</span>
                      <span className="text-sm font-medium">847/1000</span>
                    </div>
                    <Progress value={84.7} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">AI Operations</span>
                      <span className="text-sm font-medium">203/500</span>
                    </div>
                    <Progress value={40.6} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Storage Used</span>
                      <span className="text-sm font-medium">12.4/50 GB</span>
                    </div>
                    <Progress value={24.8} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upgrade Banner */}
            <Card className="bg-gradient-primary border-0 shadow-elegant">
              <CardContent className="p-6">
                <div className="text-center">
                  <Star className="w-8 h-8 text-white mx-auto mb-3" />
                  <h3 className="font-bold text-white mb-2">Upgrade to Pro</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Unlock unlimited AI processing and advanced features
                  </p>
                  <Button variant="secondary" size="sm" className="w-full">
                    Upgrade Now
                  </Button>
                </div>
              </CardContent>
            </Card>
        </div>
    </div>
    </div>
  );
};

export default Dashboard;