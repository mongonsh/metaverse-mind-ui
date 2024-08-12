"use client";
import { useState } from "react";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Create a preview URL
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader?.result);
    };
    reader.readAsDataURL(file);
  };

  const handleFileUpload = async (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setUploadedImageUrl(data.cloudinary_url);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <form onSubmit={handleFileUpload}>
        <input type="file" onChange={handleFileChange} />
        {previewUrl && (
          <div>
            <h3>Image Preview:</h3>
            <img
              src={previewUrl}
              alt="Preview"
              style={{ maxWidth: "300px", maxHeight: "300px" }}
            />
          </div>
        )}
        <button type="submit">Upload</button>
      </form>
      {uploadedImageUrl && (
        <div>
          <h3>Uploaded Image:</h3>
          <img src={uploadedImageUrl} alt="Uploaded" />
        </div>
      )}
    </div>
  );
};

export default FileUpload;
