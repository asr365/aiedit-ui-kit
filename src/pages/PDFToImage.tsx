import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Upload, X, Download, FileText, FileImage } from "lucide-react";
import Navigation from "@/components/Navigation";

const PDFToImage = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<Array<{ name: string; url: string }>>([]);
  const [imageFormat, setImageFormat] = useState("jpg");
  const [quality, setQuality] = useState("high");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (selectedFiles: FileList | null) => {
    if (selectedFiles) {
      const newFiles = Array.from(selectedFiles).filter(file => file.type === "application/pdf");
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleConvert = async () => {
    if (files.length === 0) return;
    
    setIsProcessing(true);
    setProgress(0);
    setResults([]);

    // Simulate processing with progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          // Simulate results - each PDF becomes multiple images
          const allResults: Array<{ name: string; url: string }> = [];
          files.forEach(file => {
            for (let i = 1; i <= 3; i++) { // Simulate 3 pages per PDF
              allResults.push({
                name: `${file.name.replace('.pdf', '')}_page_${i}.${imageFormat}`,
                url: '#'
              });
            }
          });
          setResults(allResults);
          return 100;
        }
        return prev + 10;
      });
    }, 250);
  };

  const downloadAll = () => {
    // Simulate download all functionality
    console.log("Downloading all converted images...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-xl">
                <FileImage className="h-8 w-8 text-purple-600" />
              </div>
              <h1 className="text-4xl font-bold">PDF to Images</h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Convert PDF pages to high-quality JPG, PNG, or TIFF images
            </p>
          </div>

          {/* Upload Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Upload PDF Files
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center cursor-pointer hover:border-muted-foreground/50 transition-colors"
                onClick={() => fileInputRef.current?.click()}
                onDrop={(e) => {
                  e.preventDefault();
                  handleFileSelect(e.dataTransfer.files);
                }}
                onDragOver={(e) => e.preventDefault()}
              >
                <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-lg font-medium mb-2">Drop your PDF files here</p>
                <p className="text-muted-foreground mb-4">or click to browse files</p>
                <Button variant="outline">
                  Choose Files
                </Button>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept=".pdf"
                onChange={(e) => handleFileSelect(e.target.files)}
                className="hidden"
              />
            </CardContent>
          </Card>

          {/* Conversion Settings */}
          {files.length > 0 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Conversion Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="format">Image Format</Label>
                    <Select value={imageFormat} onValueChange={setImageFormat}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="jpg">JPG</SelectItem>
                        <SelectItem value="png">PNG</SelectItem>
                        <SelectItem value="tiff">TIFF</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="quality">Image Quality</Label>
                    <Select value={quality} onValueChange={setQuality}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">High (300 DPI)</SelectItem>
                        <SelectItem value="medium">Medium (150 DPI)</SelectItem>
                        <SelectItem value="low">Low (72 DPI)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Selected Files */}
          {files.length > 0 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Selected Files ({files.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded">
                          <FileText className="h-4 w-4 text-red-600" />
                        </div>
                        <div>
                          <p className="font-medium">{file.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
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
                    onClick={handleConvert} 
                    disabled={isProcessing}
                    className="w-full"
                    size="lg"
                  >
                    {isProcessing ? "Converting..." : `Convert to ${imageFormat.toUpperCase()}`}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Processing Progress */}
          {isProcessing && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Converting to Images...</CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={progress} className="mb-4" />
                <p className="text-center text-muted-foreground">
                  {progress}% complete
                </p>
              </CardContent>
            </Card>
          )}

          {/* Results */}
          {results.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Images Ready
                  <Badge variant="secondary">{results.length} images</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6 max-h-96 overflow-y-auto">
                  {results.map((result, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded">
                          <FileImage className="h-4 w-4 text-purple-600" />
                        </div>
                        <span className="font-medium">{result.name}</span>
                      </div>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
                
                <Button onClick={downloadAll} className="w-full" size="lg">
                  <Download className="h-4 w-4 mr-2" />
                  Download All Images
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default PDFToImage;