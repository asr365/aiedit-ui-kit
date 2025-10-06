import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Upload, X, Download, FileText, Edit } from "lucide-react";
import Navigation from "@/components/Navigation";

const RenameFiles = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<Array<{ name: string; url: string }>>([]);
  const [newNames, setNewNames] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (selectedFiles: FileList | null) => {
    if (selectedFiles) {
      const newFiles = Array.from(selectedFiles).filter(file => file.type === "application/pdf");
      setFiles(prev => [...prev, ...newFiles]);
      setNewNames(prev => [...prev, ...newFiles.map(f => f.name.replace('.pdf', ''))]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
    setNewNames(newNames.filter((_, i) => i !== index));
  };

  const updateName = (index: number, value: string) => {
    const updated = [...newNames];
    updated[index] = value;
    setNewNames(updated);
  };

  const handleRename = async () => {
    if (files.length === 0) return;
    
    setIsProcessing(true);
    setProgress(0);
    setResults([]);

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          setResults(newNames.map(name => ({
            name: `${name}.pdf`,
            url: '#'
          })));
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
              <div className="p-3 bg-lime-100 dark:bg-lime-900/20 rounded-xl">
                <Edit className="h-8 w-8 text-lime-600" />
              </div>
              <h1 className="text-4xl font-bold">Rename Files</h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Batch rename your PDF files easily
            </p>
          </div>

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
                <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-lg font-medium mb-2">Drop your PDF files here</p>
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
                <CardTitle>Rename Files ({files.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                      <div className="p-2 bg-lime-100 dark:bg-lime-900/20 rounded">
                        <FileText className="h-4 w-4 text-lime-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">{file.name}</p>
                        <Input
                          value={newNames[index]}
                          onChange={(e) => updateName(index, e.target.value)}
                          placeholder="New filename"
                        />
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
                    onClick={handleRename} 
                    disabled={isProcessing}
                    className="w-full"
                    size="lg"
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    {isProcessing ? "Renaming..." : "Rename Files"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {isProcessing && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Renaming files...</CardTitle>
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
                      {result.name}
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

export default RenameFiles;
