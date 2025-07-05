import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import {
  FileText, FileImage, Merge, Split, Archive, Lock,
  Unlock, FileEdit, RotateCw, Eye, Search, Zap,
  Languages, MessageSquare, BarChart3, QrCode,
  Scan, FileX, PenTool, Copy, Upload
} from "lucide-react";

const Tools = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
          name: "PDF to Image",
          description: "Convert PDF pages to JPG, PNG images",
          icon: FileImage,
          popular: false,
          href: "/tools/pdf-to-image",
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
          name: "Smart Form Auto-Fill",
          description: "Automatically detect and fill form fields",
          icon: FileEdit,
          popular: true,
          href: "/tools/smart-forms",
          aiPowered: true
        },
        {
          name: "AI Translation",
          description: "Translate documents while preserving formatting",
          icon: Languages,
          popular: false,
          href: "/tools/ai-translate",
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
      name: "Advanced Tools",
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
          name: "QR Code Generator",
          description: "Create QR codes and barcodes for documents",
          icon: QrCode,
          popular: false,
          href: "/tools/qr-generator",
          aiPowered: false
        },
        {
          name: "Handwriting to Text",
          description: "Convert handwritten notes to digital text",
          icon: PenTool,
          popular: false,
          href: "/tools/handwriting-ocr",
          aiPowered: false
        },
        {
          name: "Document Comparison",
          description: "Highlight differences between two documents",
          icon: Copy,
          popular: false,
          href: "/tools/document-compare",
          aiPowered: false
        },
        {
          name: "PDF Viewer",
          description: "View and navigate PDF documents online",
          icon: Eye,
          popular: false,
          href: "/tools/pdf-viewer",
          aiPowered: false
        },
        {
          name: "Delete Pages",
          description: "Remove unwanted pages from PDF documents",
          icon: FileX,
          popular: false,
          href: "/tools/delete-pages",
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Powerful PDF Tools
              </span>
              <br />
              <span className="text-gray-900">All in One Place</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform, edit, and enhance your documents with our comprehensive suite of PDF tools powered by AI.
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search tools..."
                className="pl-10 h-12 bg-white/80 backdrop-blur-lg border-0 shadow-elegant"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Tools Grid */}
          {filteredCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
                {category.badge && (
                  <Badge className="bg-gradient-primary text-white">
                    <Zap className="w-3 h-3 mr-1" />
                    {category.badge}
                  </Badge>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.tools.map((tool, toolIndex) => (
                  <Card
                    key={toolIndex}
                    className="group bg-white/80 backdrop-blur-lg border-0 shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                          <tool.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex gap-2">
                          {tool.popular && (
                            <Badge variant="secondary" className="text-xs">
                              Popular
                            </Badge>
                          )}
                          {tool.aiPowered && (
                            <Badge className="bg-gradient-primary text-white text-xs">
                              <Zap className="w-3 h-3 mr-1" />
                              AI
                            </Badge>
                          )}
                        </div>
                      </div>
                      <CardTitle className="text-lg font-semibold group-hover:text-brand-primary transition-colors">
                        {tool.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                      <Button variant="outline" className="w-full group-hover:bg-brand-primary group-hover:text-white transition-all">
                        <Upload className="w-4 h-4 mr-2" />
                        Use Tool
                      </Button>
                    </CardContent>
                  </Card>
                ))}
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

          {/* CTA Section */}
          <div className="mt-20 text-center bg-gradient-card rounded-2xl p-12 shadow-feature-card">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Documents?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who trust DocuFlow AI for their document processing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                <Zap className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
              <Button variant="outline" size="xl">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;