import ToolPageTemplate, { ToolConfig } from "@/components/ToolPageTemplate";

const DeletePages = () => {
  const config: ToolConfig = {
    title: "Delete PDF Pages",
    subtitle: "Remove pages from your PDF document online",
    description: "Select and delete unwanted pages from your PDF files.",
    acceptedFiles: ".pdf",
    multiple: false,
    uploadButtonText: "Upload PDF file",
    processingText: "Removing pages...",
    completedTitle: "Pages Deleted!",
    completedDescription: "Selected pages have been removed from your PDF.",
    accentColor: "green",
    howToTitle: "How To Delete Pages From PDF",
    howToSubtitle: "Remove unwanted pages from your PDF documents easily.",
    steps: [
      {
        title: "Upload your PDF",
        description: "Select the PDF file you want to edit. Files are securely uploaded over an encrypted connection."
      },
      {
        title: "Select pages to delete",
        description: "Click on the pages you want to remove. You can select multiple pages at once."
      },
      {
        title: "Download edited PDF",
        description: "Download your PDF with the selected pages removed."
      }
    ],
    features: [
      {
        title: "Visual page selection",
        description: "See thumbnails of all pages and click to select pages for deletion."
      },
      {
        title: "Delete multiple pages",
        description: "Remove several pages at once by selecting them all."
      },
      {
        title: "Keep original quality",
        description: "Remaining pages maintain their original quality."
      },
      {
        title: "Undo before saving",
        description: "Change your selection before downloading the final file."
      },
      {
        title: "Secure processing",
        description: "Files are encrypted and automatically deleted after processing."
      },
      {
        title: "No software needed",
        description: "Works entirely in your web browser."
      }
    ],
    faqItems: [
      {
        question: "Can I undo page deletion?",
        answer: "Before downloading, you can change your selection. After downloading, the deleted pages cannot be recovered from that file."
      },
      {
        question: "Does this affect my original file?",
        answer: "No, your original file remains unchanged. We create a new file with the selected pages removed."
      },
      {
        question: "Is there a page limit?",
        answer: "Free users can edit documents up to 200 pages. Upgrade for larger documents."
      }
    ]
  };

  return <ToolPageTemplate config={config} />;
};

export default DeletePages;
