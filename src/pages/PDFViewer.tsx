import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, Eye, Download, File, X, ZoomIn, ZoomOut, RotateCw, ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";

const PDFViewer = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [currentFile, setCurrentFile] = useState<File | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [zoom, setZoom] = useState(100);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (selectedFiles: FileList | null) => {
    if (selectedFiles) {
      const newFiles = Array.from(selectedFiles).filter(file => file.type === 'application/pdf');
      setFiles(prev => [...prev, ...newFiles]);
      if (newFiles.length > 0 && !currentFile) {
        setCurrentFile(newFiles[0]);
        setTotalPages(Math.floor(Math.random() * 20) + 1); // Simulate page count
      }
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const openFile = (file: File) => {
    setCurrentFile(file);
    setCurrentPage(1);
    setTotalPages(Math.floor(Math.random() * 20) + 1); // Simulate page count
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const zoomIn = () => {
    setZoom(prev => Math.min(prev + 25, 200));
  };

  const zoomOut = () => {
    setZoom(prev => Math.max(prev - 25, 50));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg">
              <Eye className="h-6 w-6" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              PDF Viewer
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            View and navigate PDF documents online. No downloads required.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-8">
          {!currentFile ? (
            <>
              {/* Upload Section */}
              <Card className="border-2 border-dashed border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="h-5 w-5" />
                    Upload PDF Files to View
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div
                    className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                    onDrop={(e) => {
                      e.preventDefault();
                      handleFileSelect(e.dataTransfer.files);
                    }}
                    onDragOver={(e) => e.preventDefault()}
                  >
                    <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-lg font-medium mb-2">Drop your PDF files here</p>
                    <p className="text-muted-foreground mb-4">or click to browse</p>
                    <Button variant="outline">
                      Choose Files
                    </Button>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".pdf"
                    className="hidden"
                    onChange={(e) => handleFileSelect(e.target.files)}
                  />
                </CardContent>
              </Card>

              {/* File List */}
              {files.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <File className="h-5 w-5" />
                      Available Files ({files.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <File className="h-5 w-5 text-red-500" />
                            <div>
                              <p className="font-medium">{file.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {(file.size / (1024 * 1024)).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => openFile(file)}
                            >
                              <Eye className="h-4 w-4 mr-2" />
                              View
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFile(index)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </>
          ) : (
            /* PDF Viewer Interface */
            <div className="grid lg:grid-cols-4 gap-6">
              {/* Sidebar */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <File className="h-4 w-4" />
                    Document Info
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-sm mb-1">File Name</h3>
                      <p className="text-sm text-muted-foreground">{currentFile.name}</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-sm mb-1">File Size</h3>
                      <p className="text-sm text-muted-foreground">
                        {(currentFile.size / (1024 * 1024)).toFixed(2)} MB
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium text-sm mb-1">Pages</h3>
                      <p className="text-sm text-muted-foreground">{totalPages}</p>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => setCurrentFile(null)}
                    >
                      Back to Files
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Main Viewer */}
              <div className="lg:col-span-3 space-y-4">
                {/* Toolbar */}
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={prevPage}
                          disabled={currentPage === 1}
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <span className="text-sm font-medium px-3">
                          Page {currentPage} of {totalPages}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={nextPage}
                          disabled={currentPage === totalPages}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" onClick={zoomOut}>
                          <ZoomOut className="h-4 w-4" />
                        </Button>
                        <Badge variant="outline">{zoom}%</Badge>
                        <Button variant="outline" size="sm" onClick={zoomIn}>
                          <ZoomIn className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <RotateCw className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* PDF Canvas */}
                <Card>
                  <CardContent className="p-4">
                    <div 
                      className="border-2 border-dashed border-muted-foreground/25 rounded-lg bg-white dark:bg-gray-900 min-h-[600px] flex items-center justify-center"
                      style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top left' }}
                    >
                      <div className="text-center">
                        <Eye className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                        <p className="text-lg font-medium mb-2">PDF Viewer</p>
                        <p className="text-muted-foreground mb-4">
                          {currentFile.name} - Page {currentPage}
                        </p>
                        <Badge variant="outline">Zoom: {zoom}%</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;