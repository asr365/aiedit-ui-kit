import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Upload, X, Download, FileText, Search, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";

const ResumeScanner = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [jobDescription, setJobDescription] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<Array<{ name: string; url: string; score: number }>>([]);
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

  const handleScan = async () => {
    if (files.length === 0 || !jobDescription) return;
    
    setIsProcessing(true);
    setProgress(0);
    setResults([]);

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          setResults(files.map(file => ({
            name: `${file.name.replace('.pdf', '')}_match_report.pdf`,
            url: '#',
            score: Math.floor(Math.random() * 40) + 60
          })));
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-teal-100 dark:bg-teal-900/20 rounded-xl">
                <Search className="h-8 w-8 text-teal-600" />
              </div>
              <h1 className="text-4xl font-bold">AI Resume Scanner</h1>
              <Badge className="bg-gradient-primary text-white animate-pulse">
                <Sparkles className="w-3 h-3 mr-1" />
                AI
              </Badge>
            </div>
            <p className="text-muted-foreground text-lg">
              Match resumes with job descriptions intelligently
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Upload Resumes
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
                <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-lg font-medium mb-2">Drop resume PDF files here</p>
                <p className="text-muted-foreground mb-4">or click to browse files</p>
                <Button variant="outline">Choose Files</Button>
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

          {files.length > 0 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="jobDescription">Enter job requirements and description</Label>
                    <Textarea
                      id="jobDescription"
                      placeholder="Paste the job description here..."
                      value={jobDescription}
                      onChange={(e) => setJobDescription(e.target.value)}
                      className="mt-2 min-h-[150px]"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {files.length > 0 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Selected Resumes ({files.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-teal-100 dark:bg-teal-900/20 rounded">
                          <FileText className="h-4 w-4 text-teal-600" />
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
                    onClick={handleScan} 
                    disabled={isProcessing || !jobDescription}
                    className="w-full"
                    size="lg"
                  >
                    <Search className="h-4 w-4 mr-2" />
                    {isProcessing ? "Scanning..." : "Scan Resumes"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {isProcessing && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Scanning resumes...</CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={progress} className="mb-4" />
                <p className="text-center text-muted-foreground">
                  {progress}% complete
                </p>
              </CardContent>
            </Card>
          )}

          {results.length > 0 && (
            <div className="space-y-6">
              {results.map((result, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {result.name}
                        <Badge variant={result.score >= 80 ? "default" : "secondary"}>
                          {result.score}% Match
                        </Badge>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeScanner;
