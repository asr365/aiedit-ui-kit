import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, X, FileText, Share2, Copy, Mail } from "lucide-react";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";

const SharePDF = () => {
  const [file, setFile] = useState<File | null>(null);
  const [shareLink, setShareLink] = useState("");
  const [email, setEmail] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (selectedFiles: FileList | null) => {
    if (selectedFiles && selectedFiles[0]?.type === "application/pdf") {
      setFile(selectedFiles[0]);
      // Simulate generating a share link
      const mockLink = `https://pdftools.app/share/${Math.random().toString(36).substr(2, 9)}`;
      setShareLink(mockLink);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink);
    toast.success("Link copied to clipboard!");
  };

  const sendViaEmail = () => {
    if (!email) {
      toast.error("Please enter an email address");
      return;
    }
    toast.success(`Share link sent to ${email}`);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-sky-100 dark:bg-sky-900/20 rounded-xl">
                <Share2 className="h-8 w-8 text-sky-600" />
              </div>
              <h1 className="text-4xl font-bold">Share PDF</h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Generate shareable links for your PDF documents
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Upload PDF File
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
                <p className="text-lg font-medium mb-2">Drop your PDF file here</p>
                <p className="text-muted-foreground mb-4">or click to browse files</p>
                <Button variant="outline">Choose File</Button>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf"
                onChange={(e) => handleFileSelect(e.target.files)}
                className="hidden"
              />
            </CardContent>
          </Card>

          {file && (
            <>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Selected File</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-sky-100 dark:bg-sky-900/20 rounded">
                        <FileText className="h-4 w-4 text-sky-600" />
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
                      onClick={() => {
                        setFile(null);
                        setShareLink("");
                      }}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Share Link</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="shareLink">Shareable Link</Label>
                    <div className="flex gap-2 mt-2">
                      <Input
                        id="shareLink"
                        value={shareLink}
                        readOnly
                        className="flex-1"
                      />
                      <Button onClick={copyToClipboard} variant="outline">
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Send via Email</Label>
                    <div className="flex gap-2 mt-2">
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="recipient@example.com"
                        className="flex-1"
                      />
                      <Button onClick={sendViaEmail} variant="outline">
                        <Mail className="h-4 w-4 mr-2" />
                        Send
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SharePDF;
