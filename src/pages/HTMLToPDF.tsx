import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Code, Download, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";

const HTMLToPDF = () => {
  const [url, setUrl] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<{ name: string; url: string } | null>(null);

  const handleConvert = async () => {
    if (!url) return;
    
    setIsProcessing(true);
    setProgress(0);
    setResult(null);

    // Simulate processing with progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          // Simulate result
          const domain = new URL(url).hostname;
          setResult({
            name: `${domain}_webpage.pdf`,
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
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-xl">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h1 className="text-4xl font-bold">HTML to PDF</h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Convert web pages and HTML content to PDF documents
            </p>
          </div>

          {/* URL Input Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Enter Website URL
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="url">Website URL</Label>
                  <Input
                    id="url"
                    type="url"
                    placeholder="https://example.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="mt-2"
                  />
                </div>
                
                <Button 
                  onClick={handleConvert} 
                  disabled={isProcessing || !url}
                  className="w-full"
                  size="lg"
                >
                  {isProcessing ? "Converting..." : "Convert to PDF"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Processing Progress */}
          {isProcessing && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Converting webpage to PDF...</CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={progress} className="mb-4" />
                <p className="text-center text-muted-foreground">
                  {progress}% complete
                </p>
              </CardContent>
            </Card>
          )}

          {/* Result */}
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

export default HTMLToPDF;