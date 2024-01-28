// AzureBlobUpload.js

import { BlobServiceClient, AnonymousCredential } from '@azure/storage-blob';

const uploadImage = async (file) => {

  const connectionString = 'DefaultEndpointsProtocol=https;AccountName=syntecblobstorage;AccountKey=IjkJUZQkLWpygk2BQgRoQAm1PP85qJoq6QpyUgAMsgzsQUvayAJqYtzeG93u2QJvJT7fzoW2pQ2G+AStaL9XTg==;EndpointSuffix=core.windows.net';
  const containerName = 'products';
    
  const blobServiceClient = new BlobServiceClient(connectionString, new AnonymousCredential());
  const containerClient = blobServiceClient.getContainerClient(containerName);

  // Encode the blob name to ensure it doesn't contain invalid URL characters
  const blobName = `image-${Date.now()}-${encodeURIComponent(file.name)}`;
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);

  const blobOptions = { blobHTTPHeaders: { blobContentType: file.type } };

  // Use the 'then' method to handle the asynchronous fetch operation
  return fetch(file)
    .then(response => response.blob())
    .then(blobData => blockBlobClient.uploadData(blobData, blobOptions))
    .then(() => blockBlobClient.url)
    .catch(error => {
      console.error('Error uploading image:', error);
      throw error; // Rethrow the error to propagate it to the caller
    });
};

export { uploadImage };
