import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState, useRef, useEffect } from "react";
import Navigation from "@/components/Navigation";
import {
  FileText, FileImage, Merge, Split, Archive, Lock,
  Unlock, FileEdit, RotateCw, Eye, Search, Zap,
  Languages, MessageSquare, BarChart3, QrCode,
  Scan, FileX, PenTool, Copy, Upload, Sparkles,
  Star, Flame, Crown, Rocket, Wand2
} from "lucide-react";

const Tools = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const toolCategories = [
    {
      name: "Core PDF Tools",
      tools: [
        {
          name: "PDF to Word",
          description: "Convert PDFs to editable Word documents",
          icon: FileText,
          popular: true,
          href: "/tools/pdf-to-word",
          aiPowered: false
        },
        {
          name: "Merge PDFs",
          description: "Combine multiple PDFs into one document",
          icon: Merge,
          popular: true,
          href: "/tools/merge-pdf",
          aiPowered: false
        },
        {
          name: "Split PDF",
          description: "Separate PDF pages into individual files",
          icon: Split,
          popular: false,
          href: "/tools/split-pdf",
          aiPowered: false
        },
        {
          name: "Compress PDF",
          description: "Reduce PDF file size while maintaining quality",
          icon: Archive,
          popular: true,
          href: "/tools/compress-pdf",
          aiPowered: false
        },
        {
          name: "Edit PDF",
          description: "Add text, images, and annotations to PDFs",
          icon: FileEdit,
          popular: true,
          href: "/tools/edit-pdf",
          aiPowered: false
        },
        {
          name: "Rotate PDF",
          description: "Rotate PDF pages to correct orientation",
          icon: RotateCw,
          popular: false,
          href: "/tools/rotate-pdf",
          aiPowered: false
        },
        {
          name: "Password Protect",
          description: "Add encryption and secure your PDFs",
          icon: Lock,
          popular: false,
          href: "/tools/protect-pdf",
          aiPowered: false
        },
        {
          name: "Unlock PDF",
          description: "Remove password protection from PDFs",
          icon: Unlock,
          popular: false,
          href: "/tools/unlock-pdf",
          aiPowered: false
        },
        {
          name: "PDF Viewer",
          description: "View and navigate PDF documents online",
          icon: Eye,
          popular: false,
          href: "/tools/pdf-viewer",
          aiPowered: false
        }
      ]
    },
    {
      name: "Convert from PDF",
      tools: [
        {
          name: "PDF to Word",
          description: "Convert PDF to editable DOC/DOCX documents",
          icon: FileText,
          popular: true,
          href: "/tools/pdf-to-word",
          aiPowered: false
        },
        {
          name: "PDF to Excel",
          description: "Extract tables and data to Excel spreadsheets",
          icon: FileText,
          popular: true,
          href: "/tools/pdf-to-excel",
          aiPowered: false
        },
        {
          name: "PDF to PowerPoint",
          description: "Convert PDF pages to PPT presentations",
          icon: FileText,
          popular: false,
          href: "/tools/pdf-to-ppt",
          aiPowered: false
        },
        {
          name: "PDF to Images",
          description: "Convert PDF pages to JPG, PNG, TIFF images",
          icon: FileImage,
          popular: true,
          href: "/tools/pdf-to-image",
          aiPowered: false
        },
        {
          name: "PDF to Text",
          description: "Extract all text content from PDF documents",
          icon: FileText,
          popular: false,
          href: "/tools/pdf-to-text",
          aiPowered: false
        }
      ]
    },
    {
      name: "Convert to PDF",
      tools: [
        {
          name: "Word to PDF",
          description: "Convert DOC/DOCX documents to PDF format",
          icon: Upload,
          popular: true,
          href: "/tools/word-to-pdf",
          aiPowered: false
        },
        {
          name: "Excel to PDF",
          description: "Convert spreadsheets to PDF documents",
          icon: Upload,
          popular: false,
          href: "/tools/excel-to-pdf",
          aiPowered: false
        },
        {
          name: "PowerPoint to PDF",
          description: "Convert presentations to PDF format",
          icon: Upload,
          popular: false,
          href: "/tools/ppt-to-pdf",
          aiPowered: false
        },
        {
          name: "Images to PDF",
          description: "Convert JPG, PNG images to PDF documents",
          icon: Upload,
          popular: true,
          href: "/tools/jpg-to-pdf",
          aiPowered: false
        },
        {
          name: "HTML to PDF",
          description: "Convert web pages to PDF documents",
          icon: Upload,
          popular: false,
          href: "/tools/html-to-pdf",
          aiPowered: false
        }
      ]
    },
    {
      name: "Organize & Edit",
      tools: [
        {
          name: "Extract Pages",
          description: "Get specific pages from PDF documents",
          icon: FileText,
          popular: false,
          href: "/tools/extract-pages",
          aiPowered: false
        },
        {
          name: "Delete Pages",
          description: "Remove unwanted pages from PDF documents",
          icon: FileX,
          popular: false,
          href: "/tools/delete-pages",
          aiPowered: false
        },
        {
          name: "Organize PDF",
          description: "Reorder and arrange PDF pages",
          icon: Copy,
          popular: false,
          href: "/tools/organize-pdf",
          aiPowered: false
        },
        {
          name: "Crop PDF",
          description: "Trim PDF margins and adjust page size",
          icon: Scan,
          popular: false,
          href: "/tools/crop-pdf",
          aiPowered: false
        },
        {
          name: "Resize PDF",
          description: "Change PDF page dimensions and margins",
          icon: Scan,
          popular: false,
          href: "/tools/resize-pdf",
          aiPowered: false
        },
        {
          name: "Alternate & Mix",
          description: "Mix pages from multiple documents alternately",
          icon: Copy,
          popular: false,
          href: "/tools/alternate-mix",
          aiPowered: false
        }
      ]
    },
    {
      name: "Advanced Split Tools",
      tools: [
        {
          name: "Split by Pages",
          description: "Split PDF into specific page ranges",
          icon: Split,
          popular: false,
          href: "/tools/split-pages",
          aiPowered: false
        },
        {
          name: "Split by Bookmarks",
          description: "Split PDF chapters based on bookmarks",
          icon: Split,
          popular: false,
          href: "/tools/split-bookmarks",
          aiPowered: false
        },
        {
          name: "Split in Half",
          description: "Split two-page layouts into separate pages",
          icon: Split,
          popular: false,
          href: "/tools/split-half",
          aiPowered: false
        },
        {
          name: "Split by Size",
          description: "Create smaller files with specific sizes",
          icon: Split,
          popular: false,
          href: "/tools/split-size",
          aiPowered: false
        },
        {
          name: "Split by Text",
          description: "Split when specific text changes between pages",
          icon: Split,
          popular: false,
          href: "/tools/split-text",
          aiPowered: false
        }
      ]
    },
    {
      name: "AI-Powered Features",
      badge: "AI",
      tools: [
        {
          name: "AI Document Summarizer",
          description: "Get intelligent summaries of long documents",
          icon: BarChart3,
          popular: true,
          href: "/tools/ai-summarizer",
          aiPowered: true
        },
        {
          name: "PDF Chat Assistant",
          description: "Ask questions about your document content",
          icon: MessageSquare,
          popular: true,
          href: "/tools/pdf-chat",
          aiPowered: true
        },
        {
          name: "AI Translation",
          description: "Translate documents while preserving formatting",
          icon: Languages,
          popular: true,
          href: "/tools/ai-translate",
          aiPowered: true
        },
        {
          name: "AI Question Generator",
          description: "Generate questions from document content",
          icon: MessageSquare,
          popular: false,
          href: "/tools/ai-question-generator",
          aiPowered: true
        },
        {
          name: "Smart Form Auto-Fill",
          description: "Automatically detect and fill form fields",
          icon: FileEdit,
          popular: true,
          href: "/tools/smart-forms",
          aiPowered: true
        },
        {
          name: "Document Sentiment Analysis",
          description: "Analyze tone and sentiment of business documents",
          icon: BarChart3,
          popular: false,
          href: "/tools/sentiment-analysis",
          aiPowered: true
        },
        {
          name: "AI Resume Scanner",
          description: "Match resumes with job descriptions intelligently",
          icon: Search,
          popular: false,
          href: "/tools/resume-scanner",
          aiPowered: true
        }
      ]
    },
    {
      name: "Sign & Forms",
      tools: [
        {
          name: "Sign PDF",
          description: "Add electronic signatures to documents",
          icon: PenTool,
          popular: true,
          href: "/tools/sign-pdf",
          aiPowered: false
        },
        {
          name: "Fill & Sign",
          description: "Fill out forms and add signatures",
          icon: FileEdit,
          popular: true,
          href: "/tools/fill-sign",
          aiPowered: false
        },
        {
          name: "Create Forms",
          description: "Make existing PDFs fillable with form fields",
          icon: FileEdit,
          popular: false,
          href: "/tools/create-forms",
          aiPowered: false
        },
        {
          name: "Request Signatures",
          description: "Send documents for others to sign",
          icon: MessageSquare,
          popular: false,
          href: "/tools/request-signatures",
          aiPowered: false
        },
        {
          name: "Flatten PDF",
          description: "Make fillable PDFs read-only permanently",
          icon: FileText,
          popular: false,
          href: "/tools/flatten-pdf",
          aiPowered: false
        }
      ]
    },
    {
      name: "Annotation & Enhancement",
      tools: [
        {
          name: "PDF Annotator",
          description: "Add comments, highlights, and annotations",
          icon: PenTool,
          popular: false,
          href: "/tools/pdf-annotator",
          aiPowered: false
        },
        {
          name: "Watermark PDF",
          description: "Add text or image watermarks to documents",
          icon: FileImage,
          popular: false,
          href: "/tools/watermark-pdf",
          aiPowered: false
        },
        {
          name: "Add Page Numbers",
          description: "Insert page numbers to PDF documents",
          icon: FileText,
          popular: false,
          href: "/tools/page-numbers",
          aiPowered: false
        },
        {
          name: "Header & Footer",
          description: "Add headers and footers to PDF pages", 
          icon: FileText,
          popular: false,
          href: "/tools/header-footer",
          aiPowered: false
        },
        {
          name: "Redact PDF",
          description: "Remove sensitive information permanently",
          icon: Eye,
          popular: false,
          href: "/tools/redact-pdf",
          aiPowered: false
        },
        {
          name: "Remove Annotations",
          description: "Delete highlights and comments from PDFs",
          icon: FileX,
          popular: false,
          href: "/tools/remove-annotations",
          aiPowered: false
        }
      ]
    },
    {
      name: "Quality & Processing",
      tools: [
        {
          name: "OCR Scanner",
          description: "Extract text from scanned documents and images",
          icon: Scan,
          popular: true,
          href: "/tools/ocr-scanner",
          aiPowered: false
        },
        {
          name: "Deskew PDF",
          description: "Automatically straighten scanned PDF pages",
          icon: RotateCw,
          popular: false,
          href: "/tools/deskew-pdf",
          aiPowered: false
        },
        {
          name: "Grayscale PDF",
          description: "Convert PDF colors to grayscale",
          icon: FileImage,
          popular: false,
          href: "/tools/grayscale-pdf",
          aiPowered: false
        },
        {
          name: "Extract Images",
          description: "Get all images from PDF documents",
          icon: FileImage,
          popular: false,
          href: "/tools/extract-images",
          aiPowered: false
        },
        {
          name: "PDF Scanner",
          description: "Scan physical documents to PDF",
          icon: Scan,
          popular: true,
          href: "/tools/pdf-scanner",
          aiPowered: false
        },
        {
          name: "Repair PDF",
          description: "Fix corrupted or damaged PDF files",
          icon: FileText,
          popular: false,
          href: "/tools/repair-pdf",
          aiPowered: false
        }
      ]
    },
    {
      name: "Advanced Features",
      tools: [
        {
          name: "Create Bookmarks",
          description: "Add navigation bookmarks to PDFs",
          icon: FileText,
          popular: false,
          href: "/tools/create-bookmarks",
          aiPowered: false
        },
        {
          name: "Edit Metadata",
          description: "Change PDF title, author, and properties",
          icon: FileEdit,
          popular: false,
          href: "/tools/edit-metadata",
          aiPowered: false
        },
        {
          name: "Bates Numbering",
          description: "Add sequential numbering for legal documents",
          icon: FileText,
          popular: false,
          href: "/tools/bates-numbering",
          aiPowered: false
        },
        {
          name: "N-up Printing",
          description: "Print multiple pages per sheet",
          icon: Copy,
          popular: false,
          href: "/tools/n-up-pdf",
          aiPowered: false
        },
        {
          name: "Rename Files",
          description: "Auto-rename PDFs based on content",
          icon: FileText,
          popular: false,
          href: "/tools/rename-pdf",
          aiPowered: false
        },
        {
          name: "Document Comparison",
          description: "Compare and highlight differences between PDFs",
          icon: Copy,
          popular: false,
          href: "/tools/document-compare",
          aiPowered: false
        },
        {
          name: "Share PDF",
          description: "Create shareable links for PDF documents",
          icon: Upload,
          popular: false,
          href: "/tools/share-pdf",
          aiPowered: false
        },
        {
          name: "QR Code Generator",
          description: "Create QR codes linking to your documents",
          icon: QrCode,
          popular: false,
          href: "/tools/qr-generator",
          aiPowered: false
        }
      ]
    }
  ];

  const filteredCategories = toolCategories.map(category => ({
    ...category,
    tools: category.tools.filter(tool =>
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.tools.length > 0);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-300/10 to-blue-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-400/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-pink-400/40 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/4 left-3/4 w-5 h-5 bg-blue-400/40 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }}></div>
        
        {/* Dynamic Cursor Glow */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl transition-all duration-300 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            opacity: hoveredCard ? 0.6 : 0.3,
          }}
        ></div>
      </div>

      <Navigation />
      
      <div className="pt-24 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/60 backdrop-blur-md rounded-full border border-purple-200/50 shadow-elegant">
              <Sparkles className="w-4 h-4 text-purple-600 animate-pulse" />
              <span className="text-sm font-medium text-purple-700">100+ Professional Tools</span>
              <Crown className="w-4 h-4 text-yellow-500 animate-pulse" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <span className="bg-gradient-primary bg-clip-text text-transparent relative">
                Powerful PDF Tools
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse opacity-80"></div>
              </span>
              <br />
              <span className="text-gray-900 relative">
                All in One Place
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-primary rounded-full animate-pulse"></div>
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Transform, edit, and enhance your documents with our comprehensive suite of PDF tools powered by AI.
            </p>

            {/* Enhanced Search */}
            <div className="max-w-md mx-auto relative animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="absolute inset-0 bg-gradient-primary rounded-xl blur-lg opacity-20 animate-pulse"></div>
              <div className="relative">
                <Search className="absolute left-4 top-4 w-5 h-5 text-purple-500 z-10" />
                <Input
                  placeholder="Search tools..."
                  className="pl-12 pr-4 h-14 bg-white/90 backdrop-blur-lg border-0 shadow-elegant rounded-xl text-lg relative z-10 focus:shadow-glow transition-all duration-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute right-3 top-3 flex items-center gap-1">
                  <kbd className="px-2 py-1 text-xs bg-gray-100 rounded border">⌘</kbd>
                  <kbd className="px-2 py-1 text-xs bg-gray-100 rounded border">K</kbd>
                </div>
              </div>
            </div>

            {/* Feature Stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md rounded-lg border border-green-200/50">
                <Zap className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-700">Lightning Fast</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md rounded-lg border border-blue-200/50">
                <Star className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">99.9% Accuracy</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md rounded-lg border border-purple-200/50">
                <Rocket className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-700">AI Powered</span>
              </div>
            </div>
          </div>

          {/* Tools Grid */}
          {filteredCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="mb-16 animate-fade-in" 
              style={{ animationDelay: `${1 + categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 relative">
                    {category.name}
                    <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-primary rounded-full"></div>
                  </h2>
                </div>
                {category.badge && (
                  <Badge className="bg-gradient-primary text-white shadow-glow animate-pulse">
                    <Wand2 className="w-3 h-3 mr-1" />
                    {category.badge}
                  </Badge>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.tools.map((tool, toolIndex) => {
                  const cardId = `${categoryIndex}-${toolIndex}`;
                  return (
                    <Card
                      key={toolIndex}
                      className={`group relative bg-white/80 backdrop-blur-lg border-0 shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden ${
                        hoveredCard === cardId ? 'shadow-xl' : ''
                      }`}
                      onMouseEnter={() => setHoveredCard(cardId)}
                      onMouseLeave={() => setHoveredCard(null)}
                      style={{
                        animationDelay: `${1.2 + toolIndex * 0.1}s`,
                      }}
                    >
                      {/* Animated Border Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                      <div className="absolute inset-[1px] bg-white/90 backdrop-blur-lg rounded-lg"></div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between">
                            <div className="relative">
                              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                                <tool.icon className="w-6 h-6 text-white drop-shadow-sm" />
                              </div>
                              {/* Icon Glow Effect */}
                              <div className="absolute inset-0 w-12 h-12 bg-gradient-primary rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"></div>
                            </div>
                            <div className="flex gap-2">
                              {tool.popular && (
                                <Badge variant="secondary" className="text-xs shadow-sm border border-orange-200 bg-orange-50 text-orange-700 animate-pulse">
                                  <Star className="w-3 h-3 mr-1" />
                                  Popular
                                </Badge>
                              )}
                              {tool.aiPowered && (
                                <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs shadow-glow animate-pulse">
                                  <Sparkles className="w-3 h-3 mr-1" />
                                  AI
                                </Badge>
                              )}
                            </div>
                          </div>
                          <CardTitle className="text-lg font-semibold group-hover:text-transparent group-hover:bg-gradient-primary group-hover:bg-clip-text transition-all duration-300">
                            {tool.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-gray-600 text-sm mb-4 leading-relaxed">{tool.description}</p>
                          <Button 
                            variant="outline" 
                            className="w-full group-hover:bg-gradient-primary group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-sm group-hover:shadow-lg relative overflow-hidden"
                            onClick={() => window.location.href = tool.href}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Upload className="w-4 h-4 mr-2 relative z-10 group-hover:animate-bounce" />
                            <span className="relative z-10 font-medium">Use Tool</span>
                          </Button>
                        </CardContent>
                      </div>

                      {/* Hover Shimmer Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}

          {/* No Results */}
          {filteredCategories.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No tools found</h3>
              <p className="text-gray-500">Try searching with different keywords</p>
            </div>
          )}

          {/* Enhanced CTA Section */}
          <div className="mt-20 text-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20 rounded-3xl"></div>
            <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/30"></div>
            
            {/* Floating Elements */}
            <div className="absolute top-4 left-8 w-16 h-16 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-6 right-10 w-20 h-20 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative z-10 p-12">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-purple-200/50 shadow-elegant">
                <Flame className="w-4 h-4 text-orange-500 animate-pulse" />
                <span className="text-sm font-medium text-gray-700">Ready to Get Started?</span>
                <Rocket className="w-4 h-4 text-blue-500 animate-pulse" />
              </div>
              
              <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Ready to Transform Your Documents?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands of professionals who trust DocuFlow AI for their document processing needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" className="group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Zap className="w-5 h-5 mr-2 relative z-10 group-hover:animate-pulse" />
                  <span className="relative z-10">Start Free Trial</span>
                </Button>
                <Button variant="outline" size="xl" className="group bg-white/60 backdrop-blur-md hover:bg-white/80 border-white/30 hover:border-purple-300">
                  <Crown className="w-5 h-5 mr-2 group-hover:text-yellow-500 transition-colors" />
                  View Pricing
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>99.9% Uptime</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span>256-bit Encryption</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;