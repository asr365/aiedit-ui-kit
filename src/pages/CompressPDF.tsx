import ToolPageTemplate, { ToolConfig } from "@/components/ToolPageTemplate";

const CompressPDF = () => {
  const config: ToolConfig = {
    title: "Compress PDF",
    subtitle: "Reduce the size of your PDF",
    description: "Below we show how to shrink one or multiple PDF files to reduce their file size.",
    acceptedFiles: ".pdf",
    multiple: false,
    uploadButtonText: "Upload PDF files",
    processingText: "Compressing your PDF...",
    completedTitle: "Compression Complete!",
    completedDescription: "Your PDF has been compressed successfully.",
    accentColor: "green",
    howToTitle: "How To Compress PDF Files Or Reduce The Size Of Your PDF Files",
    howToSubtitle: "Below we show how to shrink one or multiple PDF files to reduce their file size.",
    steps: [
      {
        title: "Upload your files",
        description: "Files are safely uploaded over an encrypted connection. Files stay secure. After processing, they are permanently deleted."
      },
      {
        title: "Choose compression level",
        description: "Select the compression level that best fits your needs. Higher compression means smaller file size but may reduce quality."
      },
      {
        title: "Download compressed PDF",
        description: "Download your compressed PDF file. Compare the original and compressed file sizes."
      }
    ],
    features: [
      {
        title: "Reduce file size",
        description: "Compress PDFs to make them smaller for email or web upload."
      },
      {
        title: "Maintain quality",
        description: "Our smart compression preserves document quality while reducing size."
      },
      {
        title: "Multiple compression levels",
        description: "Choose between maximum compression or best quality."
      },
      {
        title: "Batch processing",
        description: "Compress multiple PDF files at once to save time."
      },
      {
        title: "Secure and private",
        description: "Files are encrypted and automatically deleted after processing."
      },
      {
        title: "Works everywhere",
        description: "Compress PDFs on any device with a web browser."
      }
    ],
    faqItems: [
      {
        question: "How much can I compress a PDF?",
        answer: "Compression results vary depending on the content. PDFs with many images typically compress more than text-only documents. You can expect 30-90% size reduction."
      },
      {
        question: "Will compression affect quality?",
        answer: "Our balanced compression maintains good visual quality. For maximum compression, there may be some quality reduction in images."
      },
      {
        question: "Is there a file size limit?",
        answer: "Free users can compress documents up to 200 pages or 100 MB. Upgrade for larger files."
      }
    ],
    maxPages: "200",
    maxFileSize: "100 MB"
  };

  return <ToolPageTemplate config={config} />;
};

export default CompressPDF;
