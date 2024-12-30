import { v2 as cloudinary } from "cloudinary";
import { NextFunction } from "express";
import error from "./error.ts";

cloudinary.config({
  cloud_name: "dxquvaj1e",
  api_key: "476231762544334",
  api_secret: "LbSOk53eHsnnDysyx3WhzoosMnw",
});

const upload = async (
  file_path: string,
  next: NextFunction,
  folder: string = "avatars",
  type: "image" | "video" | "raw" | "auto" | undefined = "image"
) => {
  return await cloudinary.uploader.upload(
    file_path,
    {
      folder,
      resource_type: type,
    },
    (err) => {
      if (err) return next(error(400, "Fotoğraf yüklenemedi"));
    }
  );
};

export default upload;
