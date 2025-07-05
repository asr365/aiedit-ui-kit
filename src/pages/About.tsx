import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Users, Target, Award, Globe, Heart, Lightbulb,
  Rocket, Shield, Clock, Star, CheckCircle, ArrowRight
} from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Co-Founder",
      bio: "Former Google engineer with 15+ years in AI and document processing",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
    },
    {
      name: "Sarah Chen",
      role: "CTO & Co-Founder", 
      bio: "AI researcher and ex-Microsoft principal engineer specializing in NLP",
      image: "https://images.unsplash.com/photo-1494790108755-2616b60e3fd9?w=400"
    },
    {
      name: "Michael Rodriguez",
      role: "VP of Product",
      bio: "Product visionary with extensive experience in SaaS and user experience",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      name: "Emily Davis",
      role: "Head of AI Research",
      bio: "PhD in Machine Learning from Stanford, leading our AI innovation",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"
    }
  ];

  const milestones = [
    {
      year: "2022",
      title: "Company Founded",
      description: "Started with a vision to revolutionize document processing"
    },
    {
      year: "2023",
      title: "AI Engine Launch",
      description: "Launched our proprietary AI engine for document understanding"
    },
    {
      year: "2024",
      title: "100K+ Users",
      description: "Reached 100,000+ active users processing millions of documents"
    },
    {
      year: "2024",
      title: "Enterprise Ready",
      description: "Launched enterprise features with enterprise-grade security"
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible with AI and document processing"
    },
    {
      icon: Heart,
      title: "User-Centric",
      description: "Every feature we build is designed with our users' needs and feedback in mind"
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "We maintain the highest standards of security and respect for user privacy"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Making document processing accessible and efficient for users worldwide"
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
              <Heart className="w-4 h-4 mr-2" />
              Our Story
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
              Transforming Documents
              <br />
              with AI Innovation
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're on a mission to revolutionize how professionals work with documents. 
              Born from frustration with outdated tools, DocuFlow AI combines cutting-edge 
              artificial intelligence with intuitive design to create the ultimate document processing platform.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <Card className="bg-gradient-card border-0 shadow-feature-card hover:shadow-xl transition-all duration-500 hover:scale-[1.02] animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To empower professionals worldwide with AI-powered document processing tools that save time, 
                  increase productivity, and unlock insights from their most important documents. We believe 
                  document processing should be intelligent, fast, and effortless.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-feature-card hover:shadow-xl transition-all duration-500 hover:scale-[1.02] animate-fade-in" style={{ animationDelay: "100ms" }}>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To create a world where every professional has access to intelligent document processing 
                  that understands context, preserves meaning, and delivers perfect results instantly. 
                  We're building the future of document intelligence.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Our Journey */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Journey</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From startup to the leading AI document platform
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-primary"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <Card className="bg-white/70 backdrop-blur-lg border-0 shadow-elegant hover:shadow-xl transition-all duration-500 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                        <CardContent className="p-6">
                          <div className="text-brand-primary font-bold text-lg mb-2">{milestone.year}</div>
                          <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                          <p className="text-gray-600">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-primary rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="group text-center bg-white/70 backdrop-blur-lg border-0 shadow-elegant hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The brilliant minds behind DocuFlow AI
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="group bg-white/70 backdrop-blur-lg border-0 shadow-elegant hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-gradient-primary group-hover:scale-110 transition-transform">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-lg font-semibold">{member.name}</CardTitle>
                    <p className="text-brand-primary text-sm font-medium">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm text-center leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gradient-card rounded-3xl p-12 shadow-feature-card mb-20 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
              <p className="text-xl text-gray-600">Making a difference in document processing worldwide</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "50M+", label: "Documents Processed", icon: CheckCircle },
                { value: "100K+", label: "Happy Users", icon: Users },
                { value: "50+", label: "Countries", icon: Globe },
                { value: "99.9%", label: "Uptime", icon: Award }
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
              Join Our Journey
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Be part of the document processing revolution. Experience the power of AI-driven document intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button variant="glass" size="xl" className="hover-scale">
                  <Star className="w-5 h-5 mr-2" />
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="xl" className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover-scale">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;