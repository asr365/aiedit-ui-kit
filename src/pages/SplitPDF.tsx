import ToolPageTemplate, { ToolConfig } from "@/components/ToolPageTemplate";

const SplitPDF = () => {
  const config: ToolConfig = {
    title: "Split PDF",
    subtitle: "Separate one page or a whole set for easy conversion into independent PDF files",
    description: "Extract pages from your PDF or split it into multiple documents.",
    acceptedFiles: ".pdf",
    multiple: false,
    uploadButtonText: "Upload PDF files",
    processingText: "Splitting your PDF...",
    completedTitle: "Split Complete!",
    completedDescription: "Your PDF has been split into separate files.",
    accentColor: "green",
    howToTitle: "How To Split PDF Files",
    howToSubtitle: "Below we show how to separate PDF pages into multiple documents.",
    steps: [
      {
        title: "Upload your PDF",
        description: "Select the PDF file you want to split. Files are securely uploaded over an encrypted connection."
      },
      {
        title: "Choose split options",
        description: "Select how you want to split your PDF: by page ranges, extract all pages, or split at specific intervals."
      },
      {
        title: "Download split files",
        description: "Download your split PDF files as a ZIP archive or individually."
      }
    ],
    features: [
      {
        title: "Split by page range",
        description: "Extract specific pages or ranges from your PDF."
      },
      {
        title: "Extract all pages",
        description: "Split your PDF into individual single-page documents."
      },
      {
        title: "Split at intervals",
        description: "Automatically split after every N pages."
      },
      {
        title: "Visual preview",
        description: "See page thumbnails before splitting."
      },
      {
        title: "Secure processing",
        description: "Files are encrypted and deleted after processing."
      },
      {
        title: "Free to use",
        description: "Split PDFs online without any software installation."
      }
    ],
    faqItems: [
      {
        question: "How do I extract specific pages from a PDF?",
        answer: "Upload your PDF, then enter the page numbers or ranges you want to extract. You can specify pages like '1-3, 5, 7-10'."
      },
      {
        question: "Can I split a PDF into individual pages?",
        answer: "Yes! Choose the 'Extract all pages' option to split your PDF into separate single-page files."
      },
      {
        question: "What happens to my original file?",
        answer: "Your original file is not modified. We create new files from the extracted pages."
      }
    ],
    maxPages: "200",
    maxFileSize: "100 MB"
  };

  return <ToolPageTemplate config={config} />;
};

export default SplitPDF;
