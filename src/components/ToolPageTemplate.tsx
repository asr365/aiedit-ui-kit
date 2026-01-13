import { useState, useRef, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import {
  Upload, Download, CheckCircle, ChevronDown, 
  Lock, Cloud, Folder, Link2, HardDrive
} from "lucide-react";

export interface ToolConfig {
  title: string;
  subtitle: string;
  description: string;
  acceptedFiles: string;
  multiple?: boolean;
  uploadButtonText?: string;
  processButtonText?: string;
  processingText?: string;
  completedTitle?: string;
  completedDescription?: string;
  accentColor?: "green" | "blue" | "purple" | "orange" | "red" | "pink";
  icon?: ReactNode;
  howToTitle?: string;
  howToSubtitle?: string;
  steps?: {
    title: string;
    description: string;
  }[];
  features?: {
    title: string;
    description: string;
  }[];
  faqItems?: {
    question: string;
    answer: string;
  }[];
  maxFileSize?: string;
  maxPages?: string;
  tasksPerHour?: string;
}

interface ToolPageTemplateProps {
  config: ToolConfig;
  children?: ReactNode;
  optionsPanel?: ReactNode;
  onProcess?: (files: File[]) => void;
}

const ToolPageTemplate = ({ config, children, optionsPanel, onProcess }: ToolPageTemplateProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showSourceMenu, setShowSourceMenu] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const accentColors = {
    green: "bg-emerald-500 hover:bg-emerald-600",
    blue: "bg-blue-500 hover:bg-blue-600",
    purple: "bg-purple-500 hover:bg-purple-600",
    orange: "bg-orange-500 hover:bg-orange-600",
    red: "bg-red-500 hover:bg-red-600",
    pink: "bg-pink-500 hover:bg-pink-600"
  };

  const buttonColor = accentColors[config.accentColor || "green"];

  const handleFileUpload = (uploadedFiles: FileList | null) => {
    if (uploadedFiles && uploadedFiles.length > 0) {
      const fileArray = Array.from(uploadedFiles);
      if (config.multiple) {
        setFiles(prev => [...prev, ...fileArray]);
      } else {
        setFiles(fileArray);
        // Auto-process for single file tools
        handleProcess(fileArray);
      }
    }
    setShowSourceMenu(false);
  };

  const handleProcess = (filesToProcess: File[] = files) => {
    if (filesToProcess.length === 0) return;
    
    setIsProcessing(true);
    setProgress(0);
    
    if (onProcess) {
      onProcess(filesToProcess);
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setIsProcessing(false);
          return 100;
        }
        return prev + 8;
      });
    }, 150);
  };

  const resetTool = () => {
    setFiles([]);
    setIsProcessing(false);
    setIsComplete(false);
    setProgress(0);
  };

  const defaultSteps = [
    {
      title: "Upload your files",
      description: "Files are safely uploaded over an encrypted connection. Files stay secure. After processing, they are permanently deleted."
    },
    {
      title: "Choose your options",
      description: "Select the settings that work best for your needs. Preview your changes before processing."
    },
    {
      title: "Download your files",
      description: "Download your processed files instantly. Files are automatically deleted after 2 hours for your privacy."
    }
  ];

  const steps = config.steps || defaultSteps;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Curved Background */}
      <div className="relative pt-20">
        {/* Curved wave background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg 
            className="absolute bottom-0 w-full h-64 text-gray-50" 
            viewBox="0 0 1440 320" 
            preserveAspectRatio="none"
          >
            <path 
              fill="currentColor" 
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {config.title}
            </h1>
            <p className="text-lg text-gray-500">
              {config.subtitle}
            </p>
          </div>

          {/* Upload Section */}
          {!isComplete ? (
            <div className="flex flex-col items-center">
              {/* Main Upload Button with Dropdown */}
              <div className="relative mb-4">
                <div className="flex">
                  <Button
                    onClick={() => fileInputRef.current?.click()}
                    className={`${buttonColor} text-white rounded-l-lg rounded-r-none px-6 py-6 text-base font-medium flex items-center gap-2 shadow-lg`}
                  >
                    <Upload className="w-5 h-5" />
                    {config.uploadButtonText || "Upload PDF files"}
                  </Button>
                  <Button
                    onClick={() => setShowSourceMenu(!showSourceMenu)}
                    className={`${buttonColor} text-white rounded-l-none rounded-r-lg px-3 py-6 border-l border-white/20`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </div>
                
                {/* Dropdown Menu */}
                {showSourceMenu && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-20">
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-700"
                    >
                      <Folder className="w-5 h-5 text-gray-400" />
                      <span>From My Device</span>
                    </button>
                    <button
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-700"
                    >
                      <Cloud className="w-5 h-5 text-blue-500" />
                      <span>From Google Drive</span>
                    </button>
                    <button
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-700"
                    >
                      <HardDrive className="w-5 h-5 text-blue-600" />
                      <span>From Dropbox</span>
                    </button>
                    <button
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-700"
                    >
                      <Link2 className="w-5 h-5 text-gray-400" />
                      <span>From URL</span>
                    </button>
                  </div>
                )}
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept={config.acceptedFiles}
                multiple={config.multiple}
                onChange={(e) => handleFileUpload(e.target.files)}
                className="hidden"
              />

              {/* Privacy Notice */}
              <div className="text-center text-sm text-gray-500 space-y-1">
                <p className="flex items-center justify-center gap-1">
                  <Lock className="w-3 h-3" />
                  Files stay private. Automatically deleted after 2 hours.
                </p>
                <p>
                  Free service for documents up to {config.maxPages || "200"} pages or {config.maxFileSize || "100 MB"} and {config.tasksPerHour || "3"} tasks per hour.
                </p>
                <div className="pt-2">
                  <a href="/terms" className="text-gray-500 hover:underline">Terms of Use</a>
                  <span className="mx-2">and</span>
                  <a href="/privacy" className="text-gray-500 hover:underline">Privacy Policy</a>
                </div>
              </div>

              {/* Options Panel (if provided) */}
              {optionsPanel && files.length > 0 && (
                <div className="mt-8 w-full max-w-2xl">
                  {optionsPanel}
                </div>
              )}

              {/* File List for multiple file tools */}
              {config.multiple && files.length > 0 && !isProcessing && (
                <div className="mt-6 w-full max-w-2xl bg-gray-50 rounded-lg p-4">
                  <div className="space-y-2">
                    {files.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-white p-3 rounded border">
                        <span className="text-sm text-gray-700 truncate">{file.name}</span>
                        <button 
                          onClick={() => setFiles(prev => prev.filter((_, i) => i !== index))}
                          className="text-red-500 hover:text-red-700 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={() => handleProcess()}
                    className={`${buttonColor} text-white w-full mt-4`}
                  >
                    {config.processButtonText || "Process Files"}
                  </Button>
                </div>
              )}

              {/* Processing State */}
              {isProcessing && (
                <div className="mt-8 w-full max-w-md text-center">
                  <div className="mb-4">
                    <div className={`w-16 h-16 ${buttonColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Upload className="w-8 h-8 text-white animate-pulse" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {config.processingText || "Processing your files..."}
                    </h3>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <p className="text-sm text-gray-500 mt-2">{progress}% complete</p>
                </div>
              )}
            </div>
          ) : (
            /* Completed State */
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {config.completedTitle || "Processing Complete!"}
              </h3>
              <p className="text-gray-600 mb-6">
                {config.completedDescription || "Your files have been processed successfully."}
              </p>
              <div className="flex gap-4">
                <Button className={`${buttonColor} text-white px-8`}>
                  <Download className="w-5 h-5 mr-2" />
                  Download
                </Button>
                <Button variant="outline" onClick={resetTool}>
                  Process More Files
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* How To Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {config.howToTitle || `How To ${config.title}`}
            </h2>
            <p className="text-gray-600">
              {config.howToSubtitle || config.description}
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      {config.features && config.features.length > 0 && (
        <div className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      {config.faqItems && config.faqItems.length > 0 && (
        <div className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {config.faqItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.question}</h3>
                  <p className="text-gray-600 text-sm">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Additional content */}
      {children}
    </div>
  );
};

export default ToolPageTemplate;
