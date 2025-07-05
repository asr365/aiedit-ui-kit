import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import {
  Upload, FileText, Download, CheckCircle, AlertCircle,
  Zap, Shield, Clock, Star, ArrowRight
} from "lucide-react";

const PDFToWord = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (files: FileList | null) => {
    if (files && files.length > 0) {
      const file = files[0];
      console.log("Uploading file:", file.name);
      
      // Simulate upload progress
      setIsProcessing(true);
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsComplete(true);
            setIsProcessing(false);
            return 100;
          }
          return prev + 10;
        });
      }, 200);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFileUpload(e.dataTransfer.files);
  };

  const resetUpload = () => {
    setUploadProgress(0);
    setIsProcessing(false);
    setIsComplete(false);
  };

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Convert PDFs to Word in under 30 seconds"
    },
    {
      icon: Shield,
      title: "Secure Processing",
      description: "Your files are encrypted and deleted after processing"
    },
    {
      icon: CheckCircle,
      title: "Perfect Formatting",
      description: "Maintain original layout, fonts, and images"
    },
    {
      icon: Clock,
      title: "Batch Processing",
      description: "Convert multiple PDFs simultaneously"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Legal Assistant",
      content: "This tool saves me hours every week. The formatting is always perfect!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Business Analyst",
      content: "Fast, reliable, and the best PDF to Word converter I've used.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-primary text-white">
              <FileText className="w-4 h-4 mr-2" />
              Most Popular Tool
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                PDF to Word
              </span>
              <br />
              Converter
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Convert your PDF documents to editable Word files while preserving formatting, fonts, and layout perfectly.
            </p>
          </div>

          {/* Upload Section */}
          <Card className="mb-12 bg-white/80 backdrop-blur-lg border-0 shadow-feature-card">
            <CardContent className="p-8">
              {!isComplete ? (
                <div>
                  <div
                    className={`relative border-2 border-dashed rounded-lg p-12 text-center transition-all ${
                      dragActive
                        ? "border-brand-primary bg-brand-primary/10"
                        : "border-gray-300 hover:border-brand-primary hover:bg-brand-primary/5"
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf"
                      onChange={(e) => handleFileUpload(e.target.files)}
                      className="hidden"
                    />
                    
                    {!isProcessing ? (
                      <div>
                        <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">
                          Drop your PDF file here or click to upload
                        </h3>
                        <p className="text-gray-600 mb-6">
                          Supports files up to 100MB • PDF format only
                        </p>
                        <Button
                          variant="hero"
                          size="lg"
                          onClick={() => fileInputRef.current?.click()}
                        >
                          <Upload className="w-5 h-5 mr-2" />
                          Choose PDF File
                        </Button>
                      </div>
                    ) : (
                      <div>
                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                          <FileText className="w-8 h-8 text-white animate-pulse" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Converting your PDF...</h3>
                        <div className="max-w-md mx-auto">
                          <Progress value={uploadProgress} className="h-3 mb-2" />
                          <p className="text-sm text-gray-600">{uploadProgress}% complete</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Conversion Complete!</h3>
                  <p className="text-gray-600 mb-6">
                    Your PDF has been successfully converted to Word format.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="hero" size="lg">
                      <Download className="w-5 h-5 mr-2" />
                      Download Word File
                    </Button>
                    <Button variant="outline" size="lg" onClick={resetUpload}>
                      Convert Another File
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Why Choose Our PDF to Word Converter?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="bg-white/80 backdrop-blur-lg border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-3">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold">
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

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Upload PDF", desc: "Select your PDF file from your device" },
                { step: "2", title: "AI Processing", desc: "Our AI analyzes and converts your document" },
                { step: "3", title: "Download Word", desc: "Get your perfectly formatted Word file" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                  {index < 2 && (
                    <ArrowRight className="w-6 h-6 text-gray-400 mx-auto mt-4" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
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
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Is my PDF file secure during conversion?",
                  a: "Yes, absolutely. All files are encrypted during upload and automatically deleted from our servers after processing."
                },
                {
                  q: "What file formats do you support?",
                  a: "We support PDF input files and convert them to Microsoft Word (.docx) format with perfect formatting preservation."
                },
                {
                  q: "Is there a file size limit?",
                  a: "Yes, we support PDF files up to 100MB in size. For larger files, please contact our support team."
                },
                {
                  q: "How accurate is the conversion?",
                  a: "Our AI-powered conversion maintains 99.9% accuracy in preserving formatting, fonts, images, and layout."
                }
              ].map((faq, index) => (
                <Card key={index} className="bg-white/60 backdrop-blur-lg border-0">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{faq.q}</h3>
                    <p className="text-gray-600 text-sm">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-card rounded-2xl p-12 shadow-feature-card">
            <h2 className="text-3xl font-bold mb-4">
              Need More Conversions?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Upgrade to Pro for unlimited conversions, batch processing, and priority support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                <Zap className="w-5 h-5 mr-2" />
                Upgrade to Pro
              </Button>
              <Button variant="outline" size="xl">
                View All Tools
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFToWord;