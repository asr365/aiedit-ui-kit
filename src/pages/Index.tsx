import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  FileText, Merge, Split, Archive, Zap, Shield, Clock,
  Users, Star, ArrowRight, Sparkles, Brain, BarChart3,
  MessageSquare, Languages, Search, CheckCircle, Heart,
  Play, Target, Award, Globe
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-300/10 to-blue-300/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center py-20">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-200/50">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700">AI-Powered Platform</span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-gray-900">The Smarter,</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                AI Powered
              </span>
              <br />
              <span className="text-gray-900">Document</span>
              <br />
              <span className="text-gray-900">Platform</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Harness the power of advanced AI to transform your document workflow. 
              Convert, analyze, and process documents with unprecedented accuracy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/dashboard">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Try Dashboard
                </Button>
              </Link>
              <Link to="/signup">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/tools">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-white/80 backdrop-blur-sm border-2 border-purple-200 text-gray-700 hover:bg-white hover:border-purple-300 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                >
                  Explore Features
                </Button>
              </Link>
            </div>
          </div>

          {/* Right side - 3D Floating Elements */}
          <div className="relative animate-fade-in" style={{ animationDelay: "300ms" }}>
            {/* Main Dashboard Card */}
            <div className="relative">
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/50 floating" style={{ animationDelay: '0s' }}>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-gray-800">DocuFlow AI</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">AI Analysis</div>
                      <div className="text-sm text-gray-500">Processing complete</div>
                    </div>
                    <div className="ml-auto">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">PDF Conversion</div>
                      <div className="text-sm text-gray-500">Ready to download</div>
                    </div>
                    <div className="ml-auto">
                      <div className="w-5 h-5 border-2 border-blue-500 rounded-full animate-spin border-t-transparent" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -top-6 -right-8 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl p-4 border border-white/50 floating" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">99.9%</div>
                    <div className="text-sm text-gray-500">Accuracy</div>
                  </div>
                </div>
              </div>

              {/* Speed Indicator */}
              <div className="absolute -bottom-4 -left-8 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl p-4 border border-white/50 floating" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">10x</div>
                    <div className="text-sm text-gray-500">Faster</div>
                  </div>
                </div>
              </div>

              {/* Document Types */}
              <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 space-y-3 floating" style={{ animationDelay: '1.5s' }}>
                {[
                  { icon: FileText, color: 'from-red-400 to-pink-500', label: 'PDF' },
                  { icon: FileText, color: 'from-blue-400 to-purple-500', label: 'Word' },
                  { icon: BarChart3, color: 'from-green-400 to-teal-500', label: 'Excel' }
                ].map((item, index) => (
                  <div key={index} className="bg-white/90 backdrop-blur-xl rounded-xl shadow-lg p-3 border border-white/50 hover:scale-110 transition-transform" style={{ animationDelay: `${0.5 + index * 0.2}s` }}>
                    <div className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-xs text-gray-600 mt-1 text-center">{item.label}</div>
                  </div>
                ))}
              </div>
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

      {/* Why Use Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                DocuFlow AI?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with the most advanced AI-powered document processing platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "10x Faster Processing",
                description: "Our AI processes documents 10 times faster than traditional tools, saving you hours every day",
                stats: "Average 5 seconds per document"
              },
              {
                icon: Brain,
                title: "99.9% Accuracy",
                description: "Advanced AI ensures perfect formatting, text recognition, and content preservation",
                stats: "Trusted by 100K+ professionals"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Military-grade encryption, GDPR compliance, and automatic file deletion after processing",
                stats: "SOC 2 Type II certified"
              }
            ].map((reason, index) => (
              <Card 
                key={index} 
                className="group text-center bg-gradient-card border-0 shadow-feature-card hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold mb-4">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">{reason.description}</p>
                  <Badge variant="outline" className="text-brand-primary border-brand-primary">
                    {reason.stats}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-gradient-primary text-white px-4 py-2">
                <Heart className="w-4 h-4 mr-2" />
                Our Story
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Innovation Born
                </span>
                <br />
                from Frustration
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  DocuFlow AI was born in 2022 when our founders, frustrated with outdated document processing tools, 
                  decided to build something revolutionary. What started as a simple PDF converter quickly evolved into 
                  the most advanced AI-powered document platform.
                </p>
                <p>
                  Today, we serve over 100,000 professionals worldwide, processing 50+ million documents with 
                  cutting-edge AI technology. Our mission remains simple: make document processing intelligent, 
                  fast, and effortless for everyone.
                </p>
                <div className="flex items-center gap-8 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-primary">2022</div>
                    <div className="text-sm text-gray-500">Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-primary">100K+</div>
                    <div className="text-sm text-gray-500">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-primary">50M+</div>
                    <div className="text-sm text-gray-500">Documents</div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/about">
                  <Button variant="hero" size="lg" className="hover-scale">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-feature-card"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">4.9/5 Rating</div>
                      <div className="text-sm text-gray-600">From 10K+ reviews</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about DocuFlow AI
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How secure are my documents?",
                a: "Your documents are encrypted with military-grade AES-256 encryption during upload and processing. We automatically delete all files from our servers within 24 hours, and we're SOC 2 Type II certified with GDPR compliance."
              },
              {
                q: "What file formats do you support?",
                a: "We support 15+ file formats including PDF, Word, Excel, PowerPoint, images (JPG, PNG), and more. Our AI can convert between any supported formats while preserving formatting and quality."
              },
              {
                q: "How accurate is the AI processing?",
                a: "Our AI achieves 99.9% accuracy in document processing, including OCR, format conversion, and content extraction. We use advanced machine learning models trained on millions of documents."
              },
              {
                q: "Can I process multiple documents at once?",
                a: "Yes! Pro and Enterprise plans support bulk processing. You can upload and process hundreds of documents simultaneously with our batch processing feature."
              },
              {
                q: "Is there a free version?",
                a: "Yes, we offer a free plan with 5 documents per month and access to basic PDF tools. Upgrade to Pro for unlimited processing and AI-powered features."
              },
              {
                q: "How fast is the processing?",
                a: "Most documents are processed in under 30 seconds. Complex documents or large files may take up to 2 minutes. Our AI is optimized for speed without compromising quality."
              }
            ].map((faq, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-0 shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <p className="text-gray-600 mb-6">Still have questions?</p>
            <Button variant="outline" size="lg" className="hover-scale">
              <MessageSquare className="w-5 h-5 mr-2" />
              Contact Support
            </Button>
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
            <p className="mt-2">Powered by <span className="text-brand-primary font-semibold">BZBytes LLC</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
