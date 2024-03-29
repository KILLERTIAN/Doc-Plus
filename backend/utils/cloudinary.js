import {v2 as cloudinary} from 'cloudinary';
import fs from "fs";
import dotenv from 'dotenv';
dotenv.config();
          
cloudinary.config({
    cloud_name: 'djoebsejh',
    api_key: '518511229936868',
    api_secret: 'BO8eW8Zm94jQr8N-R6xE5b_PySQ',
    secure: true,
  });

  const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfull
        console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}
export {uploadOnCloudinary}