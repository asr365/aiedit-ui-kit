import ToolPageTemplate, { ToolConfig } from "@/components/ToolPageTemplate";
import { Layers } from "lucide-react";

const MergePDF = () => {
  const config: ToolConfig = {
    title: "Merge PDF Files Online",
    subtitle: "Combine multiple PDFs and images into one",
    description: "Below we show how to combine multiple PDF files into a single document.",
    acceptedFiles: ".pdf,.jpg,.jpeg,.png",
    multiple: true,
    uploadButtonText: "Upload PDF & image files",
    processButtonText: "Merge all files",
    processingText: "Merging your files...",
    completedTitle: "Files Merged Successfully!",
    completedDescription: "Your PDF files have been combined into one document.",
    accentColor: "green",
    howToTitle: "How To Merge PDF Files",
    howToSubtitle: "Below we show how to combine multiple PDF files into a single document.",
    steps: [
      {
        title: "Upload your files",
        description: "Files are safely uploaded over an encrypted connection. Files stay secure. After processing, they are permanently deleted."
      },
      {
        title: "Drag and drop to reorder",
        description: "Reorder your PDF files by dragging and dropping them in the desired order. You can also add more files or remove existing ones."
      },
      {
        title: "Download merged file",
        description: "Click the download button to save your merged PDF. The file will be ready instantly."
      }
    ],
    features: [
      {
        title: "Combine PDFs and images",
        description: "Merge PDF files together with JPG, PNG and other images."
      },
      {
        title: "Reorder files easily",
        description: "Drag and drop to change the order of your files before merging."
      },
      {
        title: "No quality loss",
        description: "The original quality of your documents is preserved."
      },
      {
        title: "Secure and private",
        description: "Files are encrypted during transfer and automatically deleted."
      },
      {
        title: "Works on any device",
        description: "Merge PDFs on Windows, Mac, Linux, iOS or Android."
      },
      {
        title: "No installation needed",
        description: "Everything happens in your browser. No software to download."
      }
    ],
    faqItems: [
      {
        question: "How do I merge PDF files?",
        answer: "Click the upload button or drag and drop your PDF files. Arrange them in the desired order and click the merge button. Download your combined PDF when ready."
      },
      {
        question: "Can I merge images with PDFs?",
        answer: "Yes! You can combine PDF files with JPG, PNG and other image formats into a single PDF document."
      },
      {
        question: "Is there a limit on file size?",
        answer: "Free users can merge documents up to 50 pages or 50 MB. Upgrade for unlimited merging."
      },
      {
        question: "Are my files secure?",
        answer: "Yes, all files are encrypted during upload and automatically deleted after 2 hours."
      }
    ],
    maxPages: "50",
    maxFileSize: "50 MB"
  };

  return <ToolPageTemplate config={config} />;
};

export default MergePDF;
