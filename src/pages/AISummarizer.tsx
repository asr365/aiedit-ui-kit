import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import {
  Upload, BarChart3, Download, CheckCircle, FileText, Copy,
  Sparkles, Brain, Zap, Shield, Clock, Star, ArrowRight, Wand2
} from "lucide-react";

const AISummarizer = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [summaryType, setSummaryType] = useState("executive");
  const [summaryLength, setSummaryLength] = useState("medium");
  const [summary, setSummary] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const sampleSummary = `Executive Summary

This document outlines a comprehensive digital transformation strategy for modern businesses. The report emphasizes the critical importance of adopting cloud-based solutions, implementing artificial intelligence, and modernizing legacy systems to remain competitive in today's market.

Key Findings:
• 87% of companies report improved efficiency after digital transformation
• Cloud adoption reduces operational costs by an average of 32%
• AI implementation increases productivity by 45% within the first year
• Customer satisfaction improves by 28% post-transformation

Recommendations:
1. Prioritize cloud migration for scalability and cost reduction
2. Invest in AI and machine learning capabilities
3. Modernize customer-facing applications
4. Implement robust cybersecurity measures
5. Train workforce on new digital tools

The report concludes that organizations implementing comprehensive digital transformation strategies see significant ROI within 18 months, with long-term benefits including increased market share and improved customer retention.`;

  const handleFileUpload = (files: FileList | null) => {
    if (files && files.length > 0) {
      const file = files[0];
      console.log("Uploading file for summarization:", file.name);
      
      setIsProcessing(true);
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsComplete(true);
            setIsProcessing(false);
            setSummary(sampleSummary);
            return 100;
          }
          return prev + 8;
        });
      }, 250);
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

  const resetSummarizer = () => {
    setUploadProgress(0);
    setIsProcessing(false);
    setIsComplete(false);
    setSummary("");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(summary);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* AI Particles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-400/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-pink-400/40 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/4 left-3/4 w-5 h-5 bg-blue-400/40 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <Navigation />
      
      <div className="pt-24 pb-16 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-glow animate-pulse">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered • Most Advanced
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent relative">
                AI Document Summarizer
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse opacity-80"></div>
              </span>
              <br />
              <span className="text-gray-900">Intelligent Insights</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Extract key insights from lengthy documents using advanced AI. Get comprehensive summaries in seconds.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Upload & Settings */}
            <div className="space-y-6">
              {/* Settings */}
              <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-feature-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wand2 className="w-5 h-5 text-purple-600" />
                    Summarization Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Summary Type</label>
                    <Select value={summaryType} onValueChange={setSummaryType}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="executive">Executive Summary</SelectItem>
                        <SelectItem value="bullet">Bullet Points</SelectItem>
                        <SelectItem value="detailed">Detailed Analysis</SelectItem>
                        <SelectItem value="abstract">Abstract</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Summary Length</label>
                    <Select value={summaryLength} onValueChange={setSummaryLength}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="short">Short (100-200 words)</SelectItem>
                        <SelectItem value="medium">Medium (200-400 words)</SelectItem>
                        <SelectItem value="long">Long (400-600 words)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Upload Area */}
              <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-feature-card animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <CardContent className="p-8">
                  {!isComplete ? (
                    <div>
                      <div
                        className={`relative border-2 border-dashed rounded-lg p-12 text-center transition-all ${
                          dragActive
                            ? "border-purple-500 bg-purple-500/10"
                            : "border-gray-300 hover:border-purple-500 hover:bg-purple-500/5"
                        }`}
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                      >
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept=".pdf,.doc,.docx,.txt"
                          onChange={(e) => handleFileUpload(e.target.files)}
                          className="hidden"
                        />
                        
                        {!isProcessing ? (
                          <div>
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                              <Brain className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                              Upload Document for AI Analysis
                            </h3>
                            <p className="text-gray-600 mb-6">
                              PDF, Word, or Text files • Up to 50MB
                            </p>
                            <Button
                              variant="hero"
                              size="lg"
                              onClick={() => fileInputRef.current?.click()}
                              className="bg-gradient-to-r from-purple-600 to-blue-600"
                            >
                              <Upload className="w-5 h-5 mr-2" />
                              Choose Document
                            </Button>
                          </div>
                        ) : (
                          <div>
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                              <Brain className="w-8 h-8 text-white animate-pulse" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">AI is analyzing your document...</h3>
                            <div className="max-w-md mx-auto">
                              <Progress value={uploadProgress} className="h-3 mb-2" />
                              <p className="text-sm text-gray-600">{uploadProgress}% complete</p>
                            </div>
                            <div className="mt-4 text-sm text-gray-500">
                              {uploadProgress < 30 && "Reading document structure..."}
                              {uploadProgress >= 30 && uploadProgress < 60 && "Extracting key information..."}
                              {uploadProgress >= 60 && uploadProgress < 90 && "Generating intelligent summary..."}
                              {uploadProgress >= 90 && "Finalizing insights..."}
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
                      <h3 className="text-xl font-semibold mb-4">AI Analysis Complete!</h3>
                      <p className="text-gray-600 mb-6">
                        Your document has been intelligently analyzed and summarized.
                      </p>
                      <Button variant="outline" size="lg" onClick={resetSummarizer}>
                        Analyze Another Document
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* AI Features */}
              <Card className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-lg border-0 shadow-feature-card animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-600" />
                    AI Capabilities
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Key Points Extraction</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Sentiment Analysis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Topic Identification</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Action Items</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Summary Output */}
            <div className="space-y-6">
              <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-feature-card animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-purple-600" />
                      AI-Generated Summary
                    </span>
                    {isComplete && (
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={copyToClipboard}>
                          <Copy className="w-4 h-4 mr-2" />
                          Copy
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Export
                        </Button>
                      </div>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {!isComplete ? (
                    <div className="h-96 flex items-center justify-center text-gray-500">
                      <div className="text-center">
                        <Brain className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                        <p>Upload a document to see AI-generated summary here</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                        <Sparkles className="w-4 h-4 text-purple-500" />
                        <span>Generated using advanced AI • {summaryType} format • {summaryLength} length</span>
                      </div>
                      <Textarea
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                        className="min-h-[400px] bg-white/60 border-0 text-sm leading-relaxed resize-none"
                        placeholder="AI-generated summary will appear here..."
                      />
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{summary.split(' ').length} words • {summary.length} characters</span>
                        <span>Accuracy: 98.5%</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom Features */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '1s' }}>
            <h2 className="text-3xl font-bold text-center mb-8">
              Advanced AI Document Analysis
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Instant Analysis",
                  description: "Process 100+ page documents in under 30 seconds"
                },
                {
                  icon: Brain,
                  title: "Deep Understanding",
                  description: "Advanced NLP for context-aware summaries"
                },
                {
                  icon: Shield,
                  title: "Secure Processing",
                  description: "Enterprise-grade security and privacy"
                },
                {
                  icon: Star,
                  title: "98.5% Accuracy",
                  description: "Industry-leading AI summarization accuracy"
                }
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="bg-white/80 backdrop-blur-lg border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-3">
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
        </div>
      </div>
    </div>
  );
};

export default AISummarizer;