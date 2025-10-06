import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Upload, X, Download, FileText, GitCompare } from "lucide-react";
import Navigation from "@/components/Navigation";

const DocumentComparison = () => {
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<{ name: string; url: string } | null>(null);
  const file1InputRef = useRef<HTMLInputElement>(null);
  const file2InputRef = useRef<HTMLInputElement>(null);

  const handleFile1Select = (selectedFiles: FileList | null) => {
    if (selectedFiles && selectedFiles[0]?.type === "application/pdf") {
      setFile1(selectedFiles[0]);
    }
  };

  const handleFile2Select = (selectedFiles: FileList | null) => {
    if (selectedFiles && selectedFiles[0]?.type === "application/pdf") {
      setFile2(selectedFiles[0]);
    }
  };

  const handleCompare = async () => {
    if (!file1 || !file2) return;
    
    setIsProcessing(true);
    setProgress(0);
    setResult(null);

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          setResult({
            name: `comparison_${file1.name.replace('.pdf', '')}_vs_${file2.name.replace('.pdf', '')}.pdf`,
            url: '#'
          });
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-emerald-100 dark:bg-emerald-900/20 rounded-xl">
                <GitCompare className="h-8 w-8 text-emerald-600" />
              </div>
              <h1 className="text-4xl font-bold">Document Comparison</h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Compare two PDF documents and highlight differences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Document 1
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center cursor-pointer hover:border-muted-foreground/50 transition-colors"
                  onClick={() => file1InputRef.current?.click()}
                  onDrop={(e) => {
                    e.preventDefault();
                    handleFile1Select(e.dataTransfer.files);
                  }}
                  onDragOver={(e) => e.preventDefault()}
                >
                  <FileText className="h-10 w-10 mx-auto mb-3 text-muted-foreground" />
                  <p className="text-sm font-medium mb-1">Drop PDF here</p>
                  <p className="text-xs text-muted-foreground mb-3">or click to browse</p>
                  <Button variant="outline" size="sm">Choose File</Button>
                </div>
                <input
                  ref={file1InputRef}
                  type="file"
                  accept=".pdf"
                  onChange={(e) => handleFile1Select(e.target.files)}
                  className="hidden"
                />
                {file1 && (
                  <div className="mt-4 flex items-center justify-between p-2 bg-muted rounded">
                    <span className="text-sm truncate">{file1.name}</span>
                    <Button variant="ghost" size="sm" onClick={() => setFile1(null)}>
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Document 2
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center cursor-pointer hover:border-muted-foreground/50 transition-colors"
                  onClick={() => file2InputRef.current?.click()}
                  onDrop={(e) => {
                    e.preventDefault();
                    handleFile2Select(e.dataTransfer.files);
                  }}
                  onDragOver={(e) => e.preventDefault()}
                >
                  <FileText className="h-10 w-10 mx-auto mb-3 text-muted-foreground" />
                  <p className="text-sm font-medium mb-1">Drop PDF here</p>
                  <p className="text-xs text-muted-foreground mb-3">or click to browse</p>
                  <Button variant="outline" size="sm">Choose File</Button>
                </div>
                <input
                  ref={file2InputRef}
                  type="file"
                  accept=".pdf"
                  onChange={(e) => handleFile2Select(e.target.files)}
                  className="hidden"
                />
                {file2 && (
                  <div className="mt-4 flex items-center justify-between p-2 bg-muted rounded">
                    <span className="text-sm truncate">{file2.name}</span>
                    <Button variant="ghost" size="sm" onClick={() => setFile2(null)}>
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="mb-8">
            <Button 
              onClick={handleCompare} 
              disabled={isProcessing || !file1 || !file2}
              className="w-full"
              size="lg"
            >
              <GitCompare className="h-4 w-4 mr-2" />
              {isProcessing ? "Comparing..." : "Compare Documents"}
            </Button>
          </div>

          {isProcessing && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Comparing documents...</CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={progress} className="mb-4" />
                <p className="text-center text-muted-foreground">
                  {progress}% complete
                </p>
              </CardContent>
            </Card>
          )}

          {result && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {result.name}
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardTitle>
              </CardHeader>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentComparison;
