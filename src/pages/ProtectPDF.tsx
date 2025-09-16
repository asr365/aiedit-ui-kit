import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Upload, Lock, Download, File, X, Loader2, Shield, Key } from "lucide-react";
import Navigation from "@/components/Navigation";

const ProtectPDF = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<string[]>([]);
  const [passwords, setPasswords] = useState<{[key: number]: string}>({});
  const [permissions, setPermissions] = useState<{[key: number]: string[]}>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (selectedFiles: FileList | null) => {
    if (selectedFiles) {
      const newFiles = Array.from(selectedFiles).filter(file => file.type === 'application/pdf');
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
    const newPasswords = { ...passwords };
    const newPermissions = { ...permissions };
    delete newPasswords[index];
    delete newPermissions[index];
    setPasswords(newPasswords);
    setPermissions(newPermissions);
  };

  const updatePassword = (index: number, password: string) => {
    setPasswords(prev => ({
      ...prev,
      [index]: password
    }));
  };

  const togglePermission = (index: number, permission: string) => {
    setPermissions(prev => {
      const current = prev[index] || [];
      const updated = current.includes(permission)
        ? current.filter(p => p !== permission)
        : [...current, permission];
      return {
        ...prev,
        [index]: updated
      };
    });
  };

  const handleProtect = async () => {
    if (files.length === 0) return;
    
    setIsProcessing(true);
    setProgress(0);
    
    // Simulate processing
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          setResults(files.map(file => `${file.name.replace('.pdf', '')}_protected.pdf`));
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const downloadAll = () => {
    // Simulate download
    console.log('Downloading protected files...');
  };

  const permissionOptions = [
    { id: 'print', label: 'Allow Printing' },
    { id: 'copy', label: 'Allow Copy/Extract Text' },
    { id: 'modify', label: 'Allow Document Modification' },
    { id: 'annotate', label: 'Allow Annotations' },
    { id: 'fill', label: 'Allow Form Filling' },
    { id: 'extract', label: 'Allow Content Extraction' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-pink-600 text-white shadow-lg">
              <Lock className="h-6 w-6" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              Password Protect PDF
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Add password protection and set permissions to secure your PDF documents.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Security Features */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Shield className="h-8 w-8 mx-auto mb-2 text-red-500" />
                <h3 className="font-semibold">Password Protection</h3>
                <p className="text-sm text-muted-foreground">Encrypt PDFs with strong passwords</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Key className="h-8 w-8 mx-auto mb-2 text-red-500" />
                <h3 className="font-semibold">Permission Control</h3>
                <p className="text-sm text-muted-foreground">Control what users can do</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Lock className="h-8 w-8 mx-auto mb-2 text-red-500" />
                <h3 className="font-semibold">Secure Encryption</h3>
                <p className="text-sm text-muted-foreground">AES-256 bit encryption</p>
              </CardContent>
            </Card>
          </div>

          {/* Upload Section */}
          <Card className="border-2 border-dashed border-border hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Upload PDF Files to Protect
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

          {/* File List with Security Settings */}
          {files.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <File className="h-5 w-5" />
                  PDF Files with Security Settings ({files.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {files.map((file, index) => (
                    <div key={index} className="p-4 border rounded-lg space-y-4">
                      <div className="flex items-center justify-between">
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
                      
                      {/* Password Setting */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Password Protection</label>
                        <Input
                          type="password"
                          placeholder="Enter password"
                          value={passwords[index] || ''}
                          onChange={(e) => updatePassword(index, e.target.value)}
                        />
                      </div>

                      {/* Permissions */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Permissions</label>
                        <div className="grid grid-cols-2 gap-2">
                          {permissionOptions.map((option) => (
                            <label key={option.id} className="flex items-center gap-2 text-sm">
                              <input
                                type="checkbox"
                                checked={(permissions[index] || []).includes(option.id)}
                                onChange={() => togglePermission(index, option.id)}
                                className="rounded"
                              />
                              {option.label}
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Status */}
                      <div className="flex items-center gap-2">
                        <Badge variant={passwords[index] ? "default" : "secondary"}>
                          {passwords[index] ? "Password Set" : "No Password"}
                        </Badge>
                        <Badge variant="outline">
                          {(permissions[index] || []).length} Permissions
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Button
                    onClick={handleProtect}
                    disabled={isProcessing || files.some((_, index) => !passwords[index])}
                    className="w-full"
                    size="lg"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                        Protecting...
                      </>
                    ) : (
                      <>
                        <Lock className="h-5 w-5 mr-2" />
                        Protect PDFs
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Processing Progress */}
          {isProcessing && (
            <Card>
              <CardHeader>
                <CardTitle>Applying Security Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={progress} className="mb-2" />
                <p className="text-sm text-muted-foreground">
                  Encrypting PDF files... {progress}%
                </p>
              </CardContent>
            </Card>
          )}

          {/* Results */}
          {results.length > 0 && (
            <Card className="border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                  <Download className="h-5 w-5" />
                  Protection Complete!
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {results.map((fileName, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg bg-white dark:bg-gray-800">
                      <div className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-green-500" />
                        <span className="font-medium">{fileName}</span>
                        <Badge variant="secondary">Protected</Badge>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
                <Button onClick={downloadAll} className="w-full" size="lg">
                  <Download className="h-5 w-5 mr-2" />
                  Download All Protected Files
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProtectPDF;