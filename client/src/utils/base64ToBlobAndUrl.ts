const base64ToBlobAndUrl = (base64Data: string, contentType: string): string => {
  const binaryData = atob(base64Data);
  const array = new Uint8Array(binaryData.length);

  for (let i = 0; i < binaryData.length; i++) {
    array[i] = binaryData.charCodeAt(i);
  }

  const blob = new Blob([array], { type: contentType });
  const blobUrl = URL.createObjectURL(blob);

  return blobUrl;
};

export default base64ToBlobAndUrl;
