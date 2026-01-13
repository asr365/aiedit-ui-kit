import ToolPageTemplate, { ToolConfig } from "@/components/ToolPageTemplate";

const RotatePDF = () => {
  const config: ToolConfig = {
    title: "Rotate PDF Pages",
    subtitle: "Rotate your PDFs the way you need them. You can even rotate multiple PDFs at once!",
    description: "Permanently rotate pages in your PDF files.",
    acceptedFiles: ".pdf",
    multiple: true,
    uploadButtonText: "Upload PDF files",
    processButtonText: "Rotate and download",
    processingText: "Rotating pages...",
    completedTitle: "Rotation Complete!",
    completedDescription: "Your PDF pages have been rotated successfully.",
    accentColor: "green",
    howToTitle: "How To Rotate PDF Pages",
    howToSubtitle: "Permanently rotate pages in your PDF documents.",
    steps: [
      {
        title: "Upload your PDF",
        description: "Select the PDF file with pages you want to rotate. Files are securely uploaded."
      },
      {
        title: "Choose rotation",
        description: "Select pages and choose to rotate them 90° clockwise, counter-clockwise, or 180°."
      },
      {
        title: "Download rotated PDF",
        description: "Download your PDF with the rotated pages. The rotation is permanent."
      }
    ],
    features: [
      {
        title: "Rotate individual pages",
        description: "Select specific pages to rotate while leaving others unchanged."
      },
      {
        title: "Rotate all pages",
        description: "Rotate all pages in your PDF with one click."
      },
      {
        title: "Multiple angles",
        description: "Rotate 90° left, 90° right, or 180° as needed."
      },
      {
        title: "Visual preview",
        description: "See page thumbnails to identify which pages need rotation."
      },
      {
        title: "Batch processing",
        description: "Rotate pages in multiple PDF files at once."
      },
      {
        title: "Permanent rotation",
        description: "The rotation is saved permanently in the PDF."
      }
    ],
    faqItems: [
      {
        question: "Is the rotation permanent?",
        answer: "Yes, the rotation is permanently saved in the PDF file. The pages will appear rotated in any PDF viewer."
      },
      {
        question: "Can I rotate specific pages only?",
        answer: "Yes, you can select individual pages to rotate while keeping other pages in their original orientation."
      },
      {
        question: "Will rotation affect the quality?",
        answer: "No, rotation does not affect the quality of your PDF content."
      }
    ]
  };

  return <ToolPageTemplate config={config} />;
};

export default RotatePDF;
