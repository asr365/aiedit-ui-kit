import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import {
  Upload, Merge, Download, CheckCircle, X, Move,
  Zap, Shield, Clock, Star, ArrowRight, Plus, Trash2
} from "lucide-react";

const MergePDF = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (newFiles: FileList | null) => {
    if (newFiles && newFiles.length > 0) {
      const fileArray = Array.from(newFiles);
      setFiles(prev => [...prev, ...fileArray]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const moveFile = (index: number, direction: 'up' | 'down') => {
    if (direction === 'up' && index > 0) {
      const newFiles = [...files];
      [newFiles[index - 1], newFiles[index]] = [newFiles[index], newFiles[index - 1]];
      setFiles(newFiles);
    } else if (direction === 'down' && index < files.length - 1) {
      const newFiles = [...files];
      [newFiles[index], newFiles[index + 1]] = [newFiles[index + 1], newFiles[index]];
      setFiles(newFiles);
    }
  };

  const handleMerge = () => {
    if (files.length < 2) return;
    
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
    }, 300);
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

  const resetMerge = () => {
    setFiles([]);
    setUploadProgress(0);
    setIsProcessing(false);
    setIsComplete(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <Navigation />
      
      <div className="pt-24 pb-16 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-glow">
              <Merge className="w-4 h-4 mr-2" />
              Combine Multiple PDFs
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Merge PDF Files
              </span>
              <br />
              <span className="text-gray-900">Into One Document</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combine multiple PDF files into a single document. Reorder pages, maintain quality, and merge instantly.
            </p>
          </div>

          {/* Upload and Merge Section */}
          {!isComplete ? (
            <div className="space-y-8">
              {/* File Upload Area */}
              <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-feature-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-8">
                  <div
                    className={`relative border-2 border-dashed rounded-lg p-12 text-center transition-all ${
                      dragActive
                        ? "border-orange-500 bg-orange-500/10"
                        : "border-gray-300 hover:border-orange-500 hover:bg-orange-500/5"
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
                      multiple
                      onChange={(e) => handleFileUpload(e.target.files)}
                      className="hidden"
                    />
                    
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Plus className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        Add PDF Files to Merge
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Select multiple PDF files or drag and drop them here
                      </p>
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={() => fileInputRef.current?.click()}
                        className="hover:bg-orange-50 hover:border-orange-300"
                      >
                        <Upload className="w-5 h-5 mr-2" />
                        Choose PDF Files
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* File List */}
              {files.length > 0 && (
                <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-feature-card animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Merge className="w-5 h-5 text-orange-600" />
                      Files to Merge ({files.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {files.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 p-4 bg-white/60 rounded-lg border border-gray-200 group hover:shadow-md transition-all"
                        >
                          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                            {index + 1}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-gray-900 truncate">{file.name}</p>
                            <p className="text-sm text-gray-500">
                              {(file.size / (1024 * 1024)).toFixed(2)} MB
                            </p>
                          </div>
                          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => moveFile(index, 'up')}
                              disabled={index === 0}
                              className="p-2"
                            >
                              <Move className="w-4 h-4 rotate-180" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => moveFile(index, 'down')}
                              disabled={index === files.length - 1}
                              className="p-2"
                            >
                              <Move className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFile(index)}
                              className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {!isProcessing && files.length >= 2 && (
                      <div className="mt-6 text-center">
                        <Button
                          variant="hero"
                          size="lg"
                          onClick={handleMerge}
                          className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                        >
                          <Merge className="w-5 h-5 mr-2" />
                          Merge {files.length} PDF Files
                        </Button>
                      </div>
                    )}

                    {files.length === 1 && (
                      <div className="mt-6 text-center">
                        <p className="text-gray-500 mb-4">Add at least one more PDF file to merge</p>
                        <Button
                          variant="outline"
                          onClick={() => fileInputRef.current?.click()}
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Add Another PDF
                        </Button>
                      </div>
                    )}

                    {isProcessing && (
                      <div className="mt-6 text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Merge className="w-8 h-8 text-white animate-pulse" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Merging your PDFs...</h3>
                        <div className="max-w-md mx-auto">
                          <Progress value={uploadProgress} className="h-3 mb-2" />
                          <p className="text-sm text-gray-600">{uploadProgress}% complete</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          ) : (
            <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-feature-card animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">PDFs Merged Successfully!</h3>
                <p className="text-gray-600 mb-6">
                  Your {files.length} PDF files have been combined into one document.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg">
                    <Download className="w-5 h-5 mr-2" />
                    Download Merged PDF
                  </Button>
                  <Button variant="outline" size="lg" onClick={resetMerge}>
                    Merge More Files
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Features Section */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-3xl font-bold text-center mb-8">
              Powerful PDF Merging Features
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  description: "Merge multiple PDFs in seconds"
                },
                {
                  icon: Shield,
                  title: "Secure & Private",
                  description: "Files are encrypted and auto-deleted"
                },
                {
                  icon: Star,
                  title: "Perfect Quality",
                  description: "No compression or quality loss"
                }
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="bg-white/80 backdrop-blur-lg border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-3">
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

export default MergePDF;