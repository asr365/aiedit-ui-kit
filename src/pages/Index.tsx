import Navigation from "@/components/Navigation";
import heroImage from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  FileText, Merge, Split, Archive, Zap, Shield, Clock,
  Users, Star, ArrowRight, Sparkles, Brain, BarChart3,
  MessageSquare, Languages, Search, CheckCircle
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: FileText,
      title: "Smart PDF Conversion",
      description: "Convert PDFs to Word, Excel, PowerPoint with AI-enhanced accuracy",
      category: "Core"
    },
    {
      icon: Brain,
      title: "AI Document Summarizer",
      description: "Get intelligent summaries of lengthy documents in seconds",
      category: "AI",
      popular: true
    },
    {
      icon: Merge,
      title: "Advanced Merge & Split",
      description: "Combine or separate PDFs with intelligent page detection",
      category: "Core"
    },
    {
      icon: MessageSquare,
      title: "PDF Chat Assistant",
      description: "Ask questions about your documents and get instant answers",
      category: "AI",
      popular: true
    },
    {
      icon: Archive,
      title: "Smart Compression",
      description: "Reduce file sizes while preserving quality using AI optimization",
      category: "Core"
    },
    {
      icon: Languages,
      title: "AI Translation",
      description: "Translate documents while maintaining original formatting",
      category: "AI"
    },
    {
      icon: Search,
      title: "OCR & Text Recognition",
      description: "Extract text from scanned documents with 99% accuracy",
      category: "Advanced"
    },
    {
      icon: BarChart3,
      title: "Document Analytics",
      description: "Analyze document sentiment, structure, and key insights",
      category: "AI"
    }
  ];

  const stats = [
    { label: "Documents Processed", value: "50M+", icon: FileText },
    { label: "Happy Customers", value: "100K+", icon: Users },
    { label: "Time Saved (Hours)", value: "2M+", icon: Clock },
    { label: "Accuracy Rate", value: "99.9%", icon: CheckCircle }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Legal Manager",
      company: "LawFirm Inc.",
      content: "DocuFlow AI has revolutionized how we handle legal documents. The AI summarization saves us hours every day.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Operations Director",
      company: "TechCorp",
      content: "The bulk processing and AI features are game-changers. We processed 10,000 documents in minutes.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "HR Specialist",
      company: "Global Services",
      content: "Resume scanning with AI matching has streamlined our hiring process significantly.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero/80" />
        
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 text-sm px-4 py-1">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Document Processing
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Documents
            <br />
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              with AI Magic
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            The most advanced PDF processing platform. Convert, edit, analyze, and chat with your documents using cutting-edge AI technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button variant="glass" size="xl" className="min-w-[200px]">
                <Zap className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
            </Link>
            <Link to="/tools">
              <Button variant="outline" size="xl" className="min-w-[200px] bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20">
                Explore Tools
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm opacity-80">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              Enterprise-grade security
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Processing in seconds
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              Trusted by 100K+ users
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Powerful Features
              </span>
              <br />
              Built for Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the next generation of document processing with AI-powered tools designed for speed, accuracy, and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group bg-white/80 backdrop-blur-lg border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 relative overflow-hidden"
              >
                {feature.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-primary text-white text-xs">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="outline" className="w-fit text-xs mb-2">
                    {feature.category}
                  </Badge>
                  <CardTitle className="text-lg font-semibold group-hover:text-brand-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Trusted by Professionals
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Worldwide
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-feature-card">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-brand-primary">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your
            <br />
            Document Workflow?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have revolutionized their document processing with DocuFlow AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button variant="glass" size="xl" className="min-w-[200px]">
                <Sparkles className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" size="xl" className="min-w-[200px] bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">DocuFlow AI</span>
              </div>
              <p className="text-gray-400 text-sm">
                The most advanced AI-powered document processing platform for professionals.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/tools" className="hover:text-white">PDF Tools</Link></li>
                <li><Link to="/features" className="hover:text-white">AI Features</Link></li>
                <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/about" className="hover:text-white">About</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link to="/privacy" className="hover:text-white">Privacy</Link></li>
                <li><Link to="/terms" className="hover:text-white">Terms</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 DocuFlow AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
