import ToolPageTemplate, { ToolConfig } from "@/components/ToolPageTemplate";

const ExtractPages = () => {
  const config: ToolConfig = {
    title: "Extract PDF Pages",
    subtitle: "Extract selected pages from your PDF document",
    description: "Select and extract specific pages from your PDF into a new document.",
    acceptedFiles: ".pdf",
    multiple: false,
    uploadButtonText: "Upload PDF file",
    processingText: "Extracting pages...",
    completedTitle: "Extraction Complete!",
    completedDescription: "Selected pages have been extracted to a new PDF.",
    accentColor: "green",
    howToTitle: "How To Extract Pages From PDF",
    howToSubtitle: "Create a new PDF from selected pages of your document.",
    steps: [
      {
        title: "Upload your PDF",
        description: "Select the PDF file containing the pages you want to extract."
      },
      {
        title: "Select pages to extract",
        description: "Click on the pages you want to include in your new PDF document."
      },
      {
        title: "Download new PDF",
        description: "Download a new PDF containing only your selected pages."
      }
    ],
    features: [
      {
        title: "Visual selection",
        description: "See thumbnails and click to select pages for extraction."
      },
      {
        title: "Range selection",
        description: "Enter page ranges like '1-5, 8, 10-15' for quick selection."
      },
      {
        title: "Maintain order",
        description: "Pages are extracted in the order they appear in the original."
      },
      {
        title: "Original quality",
        description: "Extracted pages keep their original quality and formatting."
      },
      {
        title: "Extract to ZIP",
        description: "Option to extract each page as a separate PDF file."
      },
      {
        title: "Free online tool",
        description: "No software installation required."
      }
    ],
    faqItems: [
      {
        question: "What's the difference between extract and split?",
        answer: "Extract creates a new PDF with selected pages. Split divides the entire PDF into multiple parts."
      },
      {
        question: "Can I change the page order?",
        answer: "Pages are extracted in their original order. Use our Organize tool to reorder pages."
      },
      {
        question: "Will extracting affect my original file?",
        answer: "No, your original PDF remains unchanged. We create a new file with the extracted pages."
      }
    ]
  };

  return <ToolPageTemplate config={config} />;
};

export default ExtractPages;
