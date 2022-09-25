import { v2 } from "cloudinary";
import {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} from "../config.js";

v2.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

export const uploadImage = async (filePath) => {
  return await v2.uploader.upload(filePath, {
    folder: "mern-context",
  });
};

export const deleteImage = async (public_id) => {
  return await v2.uploader.destroy(public_id);
};
