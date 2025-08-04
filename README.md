# React PDF Editor

A modern, feature-rich PDF editor website built with React, TypeScript, and Tailwind CSS. Users can upload PDF files, edit them with text and image annotations, and download the modified files.

## Features

### 📁 File Upload
- Drag and drop PDF file upload
- File validation (PDF format, size limit)
- Support for files up to 50MB
- Real-time file processing

### ✏️ PDF Editing
- **Text Annotations**: Add text overlays to any page
- **Image Insertion**: Add JPG/PNG images to PDF pages
- **Page Navigation**: Browse through multi-page documents
- **Zoom Controls**: Zoom in/out for detailed editing
- **Rotation**: Rotate pages for better viewing

### 📱 Modern UI
- Responsive design that works on desktop and mobile
- Clean, intuitive interface with Tailwind CSS
- Loading states and error handling
- Real-time feedback and progress indicators

### 💾 Download & Export
- Download edited PDF files
- Automatic file naming with "edited-" prefix
- Preserves original PDF structure

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **PDF Processing**: pdf-lib, react-pdf, pdfjs-dist
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Development**: ESLint, TypeScript

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/akashanjana08/React-PDF-Merger.git
   cd React-PDF-Merger
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage Guide

### 1. Upload PDF
- Drag and drop a PDF file onto the upload area, or
- Click "Choose File" to browse and select a PDF

### 2. Edit PDF
- **Navigate Pages**: Use the page controls to move between pages
- **Add Text**: Click "Add Text" button, enter your text, and click "Add Text"
- **Add Images**: Click "Add Image" button and select a JPG or PNG file
- **Zoom**: Use the zoom controls to adjust the view
- **Rotate**: Click the rotate button to rotate the current page

### 3. Download
- Click "Download PDF" to save your edited file
- The file will be automatically downloaded with "edited-" prefix

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── PDFUploader.tsx     # File upload component
│   ├── PDFEditor.tsx       # Main editor interface
│   ├── PDFViewer.tsx       # PDF display component
│   └── EditToolbar.tsx     # Editing tools sidebar
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
└── index.css              # Global styles and Tailwind imports
```

## Key Components

### PDFUploader
Handles file upload with drag-and-drop functionality, file validation, and loading states.

### PDFEditor
Main editing interface that coordinates between the viewer and toolbar components.

### PDFViewer
Displays the PDF using react-pdf with zoom, rotation, and page navigation.

### EditToolbar
Provides editing tools for adding text and images to the PDF.

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Limitations

- PDF files must be under 50MB
- Only JPG and PNG images can be added
- Text positioning is currently fixed (future enhancement: click-to-place)
- Some complex PDF features may not be fully supported

## Future Enhancements

- [ ] Click-to-place text and images
- [ ] Text formatting options (font, size, color)
- [ ] Drawing tools (shapes, lines, highlights)
- [ ] Signature insertion
- [ ] Form filling capabilities
- [ ] OCR text extraction
- [ ] Cloud storage integration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For issues or questions, please check the browser console for error messages and ensure your PDF file is valid and under the size limit.