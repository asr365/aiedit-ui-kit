import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Brain, Zap, Shield, Clock, Users, Star, CheckCircle,
  FileText, MessageSquare, Languages, BarChart3, Search,
  Upload, Download, Lock, Unlock, Eye, Settings
} from "lucide-react";

const Features = () => {
  const featureCategories = [
    {
      title: "AI-Powered Intelligence",
      description: "Revolutionary AI features that transform how you work with documents",
      features: [
        {
          icon: Brain,
          title: "AI Document Summarizer",
          description: "Get intelligent summaries of lengthy documents in seconds using advanced NLP",
          benefits: ["Save 80% reading time", "Extract key insights", "Multi-language support"]
        },
        {
          icon: MessageSquare,
          title: "PDF Chat Assistant",
          description: "Ask questions about your documents and get instant, contextual answers",
          benefits: ["Natural language queries", "Instant responses", "Context-aware AI"]
        },
        {
          icon: Languages,
          title: "AI Translation",
          description: "Translate documents while preserving formatting and layout perfectly",
          benefits: ["50+ languages", "Format preservation", "Professional accuracy"]
        },
        {
          icon: Search,
          title: "Smart Content Recognition",
          description: "AI-powered OCR and content analysis for perfect text extraction",
          benefits: ["99.9% accuracy", "Handwriting recognition", "Table detection"]
        }
      ]
    },
    {
      title: "Core PDF Tools",
      description: "Essential PDF processing tools for everyday document needs",
      features: [
        {
          icon: FileText,
          title: "Universal Conversion",
          description: "Convert between PDF, Word, Excel, PowerPoint and more formats",
          benefits: ["15+ file formats", "Batch processing", "Quality preservation"]
        },
        {
          icon: Settings,
          title: "Advanced Editing",
          description: "Edit text, images, and annotations directly in your PDFs",
          benefits: ["Real-time editing", "Collaboration tools", "Version control"]
        },
        {
          icon: Lock,
          title: "Security & Protection",
          description: "Encrypt, password-protect, and secure your sensitive documents",
          benefits: ["Military-grade encryption", "Digital signatures", "Access control"]
        },
        {
          icon: Upload,
          title: "Bulk Operations",
          description: "Process hundreds of documents simultaneously with our batch tools",
          benefits: ["Unlimited files", "Queue management", "Progress tracking"]
        }
      ]
    },
    {
      title: "Enterprise Features",
      description: "Advanced capabilities for teams and organizations",
      features: [
        {
          icon: Users,
          title: "Team Collaboration",
          description: "Share, collaborate, and manage documents across your organization",
          benefits: ["Real-time collaboration", "Permission management", "Activity tracking"]
        },
        {
          icon: BarChart3,
          title: "Analytics & Insights",
          description: "Detailed analytics on document usage, performance, and insights",
          benefits: ["Usage analytics", "Performance metrics", "Custom reports"]
        },
        {
          icon: Shield,
          title: "Enterprise Security",
          description: "Advanced security features including SSO, audit logs, and compliance",
          benefits: ["SSO integration", "Audit trails", "Compliance ready"]
        },
        {
          icon: Settings,
          title: "API & Integrations",
          description: "Integrate with your existing tools and workflows seamlessly",
          benefits: ["REST API", "Webhook support", "Custom integrations"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-20 animate-fade-in">
            <Badge className="mb-6 bg-gradient-primary text-white px-6 py-2 text-sm">
              <Zap className="w-4 h-4 mr-2" />
              Advanced Features
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
              Powerful Features
              <br />
              Built for Excellence
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Discover the comprehensive suite of AI-powered tools and features that make DocuFlow AI 
              the most advanced document processing platform available today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button variant="hero" size="xl" className="hover-scale">
                  <Star className="w-5 h-5 mr-2" />
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/tools">
                <Button variant="outline" size="xl" className="hover-scale">
                  <Eye className="w-5 h-5 mr-2" />
                  View All Tools
                </Button>
              </Link>
            </div>
          </div>

          {/* Feature Categories */}
          {featureCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-24">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">
                  {category.title}
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {category.features.map((feature, featureIndex) => (
                  <Card
                    key={featureIndex}
                    className="group bg-white/70 backdrop-blur-lg border-0 shadow-elegant hover:shadow-xl transition-all duration-500 hover:scale-[1.02] animate-fade-in"
                    style={{ animationDelay: `${featureIndex * 100}ms` }}
                  >
                    <CardHeader className="pb-6">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <feature.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl font-semibold mb-3 group-hover:text-brand-primary transition-colors">
                            {feature.title}
                          </CardTitle>
                          <p className="text-gray-600 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                          Key Benefits
                        </h4>
                        <ul className="space-y-2">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}

          {/* Stats Section */}
          <div className="bg-gradient-card rounded-3xl p-12 shadow-feature-card mb-20 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Trusted by Professionals Worldwide</h2>
              <p className="text-xl text-gray-600">Real results from real users</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "50M+", label: "Documents Processed", icon: FileText },
                { value: "100K+", label: "Active Users", icon: Users },
                { value: "99.9%", label: "Uptime", icon: Shield },
                { value: "4.9★", label: "User Rating", icon: Star }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-hero rounded-3xl p-16 shadow-xl animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join thousands of professionals who have transformed their document workflow with our AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button variant="glass" size="xl" className="hover-scale">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" size="xl" className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover-scale">
                  <Star className="w-5 h-5 mr-2" />
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;