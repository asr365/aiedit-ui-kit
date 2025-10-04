import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, X, Send, FileText, MessageSquare } from "lucide-react";
import Navigation from "@/components/Navigation";

const RequestSignatures = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [recipientEmail, setRecipientEmail] = useState("");
  const [message, setMessage] = useState("");
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

  const handleSendRequest = () => {
    // Simulate sending signature request
    console.log("Sending signature request to:", recipientEmail);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-violet-100 dark:bg-violet-900/20 rounded-xl">
                <MessageSquare className="h-8 w-8 text-violet-600" />
              </div>
              <h1 className="text-4xl font-bold">Request Signatures</h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Send documents for others to sign electronically
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
            <>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Selected Files ({files.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {files.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-violet-100 dark:bg-violet-900/20 rounded">
                            <FileText className="h-4 w-4 text-violet-600" />
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
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Recipient Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email">Recipient Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="recipient@example.com"
                        value={recipientEmail}
                        onChange={(e) => setRecipientEmail(e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Input
                        id="message"
                        placeholder="Add a message for the recipient"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    <Button 
                      onClick={handleSendRequest}
                      disabled={!recipientEmail}
                      className="w-full"
                      size="lg"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Signature Request
                    </Button>
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

export default RequestSignatures;
