import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import PDFUploader from './components/PDFUploader'
import PDFEditor from './components/PDFEditor'
import { PDFDocument } from 'pdf-lib'

export interface PDFFile {
  file: File
  arrayBuffer: ArrayBuffer
  pdfDoc: PDFDocument | null
}

function App() {
  const [pdfFile, setPdfFile] = useState<PDFFile | null>(null)
  const [isEditing, setIsEditing] = useState(false)

  const handleFileUpload = (file: PDFFile) => {
    console.log('App: handleFileUpload called with file:', file.file.name)
    setPdfFile(file)
    setIsEditing(true)
    console.log('App: State updated, isEditing should be true')
  }

  const handleReset = () => {
    setPdfFile(null)
    setIsEditing(false)
  }

  useEffect(() => {
    console.log('App: isEditing changed to:', isEditing)
    console.log('App: pdfFile:', pdfFile ? pdfFile.file.name : 'null')
  }, [isEditing, pdfFile])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {!isEditing ? (
          <PDFUploader onFileUpload={handleFileUpload} />
        ) : (
          <PDFEditor 
            pdfFile={pdfFile!} 
            onReset={handleReset}
            onSave={(modifiedPdf) => {
              // Handle saving the modified PDF
              console.log('Modified PDF:', modifiedPdf)
            }}
          />
        )}
      </main>
    </div>
  )
}

export default App