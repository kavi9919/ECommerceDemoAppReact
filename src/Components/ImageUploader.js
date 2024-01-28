import React, { useState } from 'react';
import axios from 'axios';

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState('');
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('imageFile', selectedFile);

      const response = await axios.post('https://localhost:7110/api/File/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }

      });
       // Set the uploaded filename received from the server response
      setUploadedFileName(response.data);
     
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <img src={"https://syntecblobstorage.blob.core.windows.net/products/" +uploadedFileName} width={200} />

    </div>
  );
};

export default ImageUploader;
