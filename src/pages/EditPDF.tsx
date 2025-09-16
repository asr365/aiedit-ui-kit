import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, FileEdit, Download, File, X, Type, Image, PenTool, Square } from "lucide-react";
import Navigation from "@/components/Navigation";

const EditPDF = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [selectedTool, setSelectedTool] = useState<string>("text");
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (selectedFiles: FileList | null) => {
    if (selectedFiles) {
      const newFiles = Array.from(selectedFiles).filter(file => file.type === 'application/pdf');
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const startEditing = () => {
    setIsEditing(true);
  };

  const editingTools = [
    { id: "text", label: "Add Text", icon: Type },
    { id: "image", label: "Add Image", icon: Image },
    { id: "draw", label: "Draw", icon: PenTool },
    { id: "shape", label: "Add Shape", icon: Square },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-blue-600 text-white shadow-lg">
              <FileEdit className="h-6 w-6" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Edit PDF
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Add text, images, annotations, and more to your PDF documents with our powerful editor.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {!isEditing ? (
            <>
              {/* Upload Section */}
              <Card className="border-2 border-dashed border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="h-5 w-5" />
                    Upload PDF to Edit
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
                    <p className="text-lg font-medium mb-2">Drop your PDF file here</p>
                    <p className="text-muted-foreground mb-4">or click to browse</p>
                    <Button variant="outline">
                      Choose File
                    </Button>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
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
                      Selected File
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
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile(index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <Button
                        onClick={startEditing}
                        className="w-full"
                        size="lg"
                      >
                        <FileEdit className="h-5 w-5 mr-2" />
                        Start Editing
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </>
          ) : (
            /* Editor Interface */
            <div className="space-y-6">
              {/* Toolbar */}
              <Card>
                <CardHeader>
                  <CardTitle>Editing Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {editingTools.map((tool) => {
                      const Icon = tool.icon;
                      return (
                        <Button
                          key={tool.id}
                          variant={selectedTool === tool.id ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedTool(tool.id)}
                        >
                          <Icon className="h-4 w-4 mr-2" />
                          {tool.label}
                        </Button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Editor Canvas */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>PDF Editor</span>
                    <Badge variant="secondary">Page 1 of 1</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-12 text-center min-h-[600px] bg-white dark:bg-gray-900">
                    <FileEdit className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-lg font-medium mb-2">PDF Editor Canvas</p>
                    <p className="text-muted-foreground mb-6">
                      Your PDF will appear here for editing
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Selected tool: <Badge variant="outline">{editingTools.find(t => t.id === selectedTool)?.label}</Badge>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button variant="outline" onClick={() => setIsEditing(false)} className="flex-1">
                  Back to Upload
                </Button>
                <Button className="flex-1">
                  <Download className="h-5 w-5 mr-2" />
                  Save & Download
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditPDF;