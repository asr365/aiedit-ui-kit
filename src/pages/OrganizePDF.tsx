import ToolPageTemplate, { ToolConfig } from "@/components/ToolPageTemplate";

const OrganizePDF = () => {
  const config: ToolConfig = {
    title: "Organize PDF",
    subtitle: "Sort, delete, and rearrange PDF pages",
    description: "Reorder, rotate, and delete pages from your PDF visually.",
    acceptedFiles: ".pdf",
    multiple: false,
    uploadButtonText: "Upload PDF file",
    processingText: "Applying changes...",
    completedTitle: "Organization Complete!",
    completedDescription: "Your PDF has been reorganized successfully.",
    accentColor: "green",
    howToTitle: "How To Organize PDF Pages",
    howToSubtitle: "Rearrange, rotate, and delete pages in your PDF documents.",
    steps: [
      {
        title: "Upload your PDF",
        description: "Select the PDF file you want to organize."
      },
      {
        title: "Rearrange pages",
        description: "Drag and drop pages to reorder them. Rotate or delete pages as needed."
      },
      {
        title: "Download organized PDF",
        description: "Download your PDF with the new page arrangement."
      }
    ],
    features: [
      {
        title: "Drag and drop",
        description: "Reorder pages by dragging them to new positions."
      },
      {
        title: "Page rotation",
        description: "Rotate individual pages 90° or 180°."
      },
      {
        title: "Delete pages",
        description: "Remove unwanted pages from your document."
      },
      {
        title: "Add more pages",
        description: "Insert pages from other PDF files."
      },
      {
        title: "Visual preview",
        description: "See page thumbnails for easy organization."
      },
      {
        title: "Undo changes",
        description: "Revert changes before saving your final PDF."
      }
    ],
    faqItems: [
      {
        question: "Can I add pages from another PDF?",
        answer: "Yes, you can upload additional PDF files and add their pages to your document."
      },
      {
        question: "How do I reorder pages?",
        answer: "Simply drag a page thumbnail and drop it in the new position."
      },
      {
        question: "Can I undo my changes?",
        answer: "Yes, you can reset to the original order or undo individual changes before downloading."
      }
    ]
  };

  return <ToolPageTemplate config={config} />;
};

export default OrganizePDF;
