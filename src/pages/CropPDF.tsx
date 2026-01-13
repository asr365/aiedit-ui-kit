import ToolPageTemplate, { ToolConfig } from "@/components/ToolPageTemplate";

const CropPDF = () => {
  const config: ToolConfig = {
    title: "Crop PDF",
    subtitle: "Trim PDF margins and change page size",
    description: "Remove white margins or crop pages to a specific size.",
    acceptedFiles: ".pdf",
    multiple: false,
    uploadButtonText: "Upload PDF file",
    processingText: "Cropping your PDF...",
    completedTitle: "Cropping Complete!",
    completedDescription: "Your PDF has been cropped successfully.",
    accentColor: "green",
    howToTitle: "How To Crop PDF Pages",
    howToSubtitle: "Trim margins or resize pages in your PDF documents.",
    steps: [
      {
        title: "Upload your PDF",
        description: "Select the PDF file you want to crop. Files are securely uploaded."
      },
      {
        title: "Define crop area",
        description: "Draw the crop area or enter exact dimensions. Apply to all pages or specific ones."
      },
      {
        title: "Download cropped PDF",
        description: "Download your cropped PDF with the new page dimensions."
      }
    ],
    features: [
      {
        title: "Visual cropping",
        description: "Draw the crop area directly on the page preview."
      },
      {
        title: "Auto-detect margins",
        description: "Automatically detect and remove white margins."
      },
      {
        title: "Custom dimensions",
        description: "Enter exact crop dimensions for precision."
      },
      {
        title: "Apply to all pages",
        description: "Crop all pages with the same settings."
      },
      {
        title: "Per-page cropping",
        description: "Apply different crop settings to different pages."
      },
      {
        title: "Preserve content",
        description: "Only the visible area changes, content is not deleted."
      }
    ],
    faqItems: [
      {
        question: "What is PDF cropping?",
        answer: "Cropping changes the visible area of PDF pages, hiding content outside the crop box. It's useful for removing margins or focusing on specific content."
      },
      {
        question: "Does cropping delete content?",
        answer: "No, cropping hides content outside the visible area but doesn't permanently delete it. The original content remains in the file."
      },
      {
        question: "Can I crop different pages differently?",
        answer: "Yes, you can apply different crop settings to individual pages or groups of pages."
      }
    ]
  };

  return <ToolPageTemplate config={config} />;
};

export default CropPDF;
