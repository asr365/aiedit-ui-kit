import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import {
  Upload, Archive, Download, CheckCircle, FileText,
  Zap, Shield, BarChart3, Star, ArrowRight, Settings,
  Minimize, FileImage, Gauge
} from "lucide-react";

const CompressPDF = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [compressionLevel, setCompressionLevel] = useState([50]);
  const [compressionType, setCompressionType] = useState("balanced");
  const [originalSize, setOriginalSize] = useState(0);
  const [compressedSize, setCompressedSize] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (files: FileList | null) => {
    if (files && files.length > 0) {
      const file = files[0];
      setOriginalSize(file.size);
      console.log("Compressing file:", file.name);
      
      setIsProcessing(true);
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsComplete(true);
            setIsProcessing(false);
            // Calculate compressed size based on compression level
            const reductionPercentage = compressionLevel[0];
            setCompressedSize(Math.round(file.size * (1 - reductionPercentage / 100)));
            return 100;
          }
          return prev + 12;
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

  const resetCompression = () => {
    setUploadProgress(0);
    setIsProcessing(false);
    setIsComplete(false);
    setOriginalSize(0);
    setCompressedSize(0);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getCompressionText = () => {
    switch (compressionType) {
      case "maximum": return "Maximum compression for smallest file size";
      case "balanced": return "Balanced compression maintaining good quality";
      case "minimal": return "Light compression preserving original quality";
      default: return "Balanced compression";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <Navigation />
      
      <div className="pt-24 pb-16 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-glow">
              <Archive className="w-4 h-4 mr-2" />
              File Size Optimization
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                PDF Compressor
              </span>
              <br />
              <span className="text-gray-900">Reduce File Size</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compress PDF files while maintaining quality. Reduce file sizes by up to 90% for easier sharing and storage.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Settings */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-feature-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5 text-green-600" />
                    Compression Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-3 block">Compression Type</label>
                    <RadioGroup value={compressionType} onValueChange={setCompressionType}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="minimal" id="minimal" />
                        <Label htmlFor="minimal" className="text-sm">
                          <div>
                            <div className="font-medium">Minimal (10-30%)</div>
                            <div className="text-gray-500 text-xs">Best quality, larger file</div>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="balanced" id="balanced" />
                        <Label htmlFor="balanced" className="text-sm">
                          <div>
                            <div className="font-medium">Balanced (30-60%)</div>
                            <div className="text-gray-500 text-xs">Good quality, moderate size</div>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="maximum" id="maximum" />
                        <Label htmlFor="maximum" className="text-sm">
                          <div>
                            <div className="font-medium">Maximum (60-90%)</div>
                            <div className="text-gray-500 text-xs">Smallest file, reduced quality</div>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-3 block">
                      Compression Level: {compressionLevel[0]}%
                    </label>
                    <Slider
                      value={compressionLevel}
                      onValueChange={setCompressionLevel}
                      max={90}
                      min={10}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>Less compression</span>
                      <span>More compression</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">{getCompressionText()}</p>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <Gauge className="w-4 h-4" />
                      <span>Estimated Results</span>
                    </div>
                    {originalSize > 0 && (
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Original:</span>
                          <span className="font-medium">{formatFileSize(originalSize)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Estimated:</span>
                          <span className="font-medium text-green-600">
                            {formatFileSize(Math.round(originalSize * (1 - compressionLevel[0] / 100)))}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Reduction:</span>
                          <span className="font-medium text-green-600">{compressionLevel[0]}%</span>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Compression Features */}
              <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-lg border-0 shadow-feature-card animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Minimize className="w-5 h-5 text-green-600" />
                    Compression Features
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Image optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Font subsetting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Metadata removal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Stream compression</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Upload and Results */}
            <div className="lg:col-span-2 space-y-6">
              {/* Upload Area */}
              <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-feature-card animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <CardContent className="p-8">
                  {!isComplete ? (
                    <div>
                      <div
                        className={`relative border-2 border-dashed rounded-lg p-12 text-center transition-all ${
                          dragActive
                            ? "border-green-500 bg-green-500/10"
                            : "border-gray-300 hover:border-green-500 hover:bg-green-500/5"
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
                            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                              <Archive className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                              Upload PDF to Compress
                            </h3>
                            <p className="text-gray-600 mb-6">
                              Select your PDF file to reduce its size
                            </p>
                            <Button
                              variant="hero"
                              size="lg"
                              onClick={() => fileInputRef.current?.click()}
                              className="bg-gradient-to-r from-green-600 to-blue-600"
                            >
                              <Upload className="w-5 h-5 mr-2" />
                              Choose PDF File
                            </Button>
                          </div>
                        ) : (
                          <div>
                            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                              <Archive className="w-8 h-8 text-white animate-pulse" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Compressing your PDF...</h3>
                            <div className="max-w-md mx-auto">
                              <Progress value={uploadProgress} className="h-3 mb-2" />
                              <p className="text-sm text-gray-600">{uploadProgress}% complete</p>
                            </div>
                            <div className="mt-4 text-sm text-gray-500">
                              {uploadProgress < 30 && "Analyzing file structure..."}
                              {uploadProgress >= 30 && uploadProgress < 60 && "Optimizing images..."}
                              {uploadProgress >= 60 && uploadProgress < 90 && "Compressing content..."}
                              {uploadProgress >= 90 && "Finalizing compression..."}
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
                      <h3 className="text-xl font-semibold mb-4">Compression Complete!</h3>
                      
                      {/* Compression Results */}
                      <div className="bg-green-50 rounded-lg p-6 mb-6">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-gray-900">{formatFileSize(originalSize)}</div>
                            <div className="text-sm text-gray-600">Original Size</div>
                          </div>
                          <div>
                            <ArrowRight className="w-6 h-6 mx-auto text-green-600" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-green-600">{formatFileSize(compressedSize)}</div>
                            <div className="text-sm text-gray-600">Compressed Size</div>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-green-200">
                          <div className="text-lg font-semibold text-green-700">
                            Reduced by {Math.round(((originalSize - compressedSize) / originalSize) * 100)}%
                          </div>
                          <div className="text-sm text-gray-600">
                            Saved {formatFileSize(originalSize - compressedSize)} of storage space
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="hero" size="lg" className="bg-gradient-to-r from-green-600 to-blue-600">
                          <Download className="w-5 h-5 mr-2" />
                          Download Compressed PDF
                        </Button>
                        <Button variant="outline" size="lg" onClick={resetCompression}>
                          Compress Another File
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Features Grid */}
              <div className="grid md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                {[
                  {
                    icon: Zap,
                    title: "Lightning Fast",
                    description: "Compress large files in seconds"
                },
                {
                    icon: Shield,
                    title: "Quality Preserved",
                    description: "Maintain visual quality while reducing size"
                  },
                  {
                    icon: BarChart3,
                    title: "Up to 90% Reduction",
                    description: "Dramatically reduce file sizes"
                  }
                ].map((feature, index) => (
                  <Card
                    key={index}
                    className="bg-white/80 backdrop-blur-lg border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
                  >
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center mb-3">
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
    </div>
  );
};

export default CompressPDF;