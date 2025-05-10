import { ImageKitUploadResponse } from "@/types";
import { useState } from "react";

const [uploadedImage, setUploadedImage] = useState<ImageKitUploadResponse | null>(null);

// ... in your handleUpload function:
const response = await fetch('/api/upload', {
    method: 'POST',
    body: formData ,
});




if (!response.ok) {
    throw new Error('Upload failed');
}



const data: ImageKitUploadResponse = await response.json();
setUploadedImage(data);   