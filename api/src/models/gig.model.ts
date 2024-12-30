import { model, Schema, Types } from "mongoose";
export interface IGig {
  _id: string;
  user: Types.ObjectId;
  title: string;
  description: string;
  reviewCount: number;
  starCount: number;
  category: string;
  coverImage: string;
  images: string[];
  packages_title: string;
  packages_description: string;
  packages_price: number;
  packages_features: string[];
  packages_duration: number;
  packages_revision: number;
  createdAt: string;
  updatedAt: string;
}

const gigSchema = new Schema<IGig>(
  {
    user: {
      type: Schema.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "Başlık alanı zorunludur"],
    },
    description: {
      type: String,
      required: [true, "Açıklama alanı zorunludur"],
      minlength: [50, "Açıklama alanı en az 50 karakter olmalıdır"],
      maxlength: [500, "Açıklama alanı en fazla 500 karakter olmalıdır"],
    },
    reviewCount: {
      type: Number,
      default: 0,
    },
    starCount: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      required: [true, "Kategori alanı zorunludur"],
    },
    coverImage: {
      type: String,
      required: [true, "Kapak fotoğrafı alanı zorunludur"],
    },
    images: {
      type: [String],
      required: [true, "Galeri alanı zorunludur"],
    },
    packages_title: {
      type: String,
      required: [true, "Paket başlığı alanı zorunludur"],
    },
    packages_description: {
      type: String,
      required: [true, "Paket açıklaması alanı zorunludur"],
    },
    packages_price: {
      type: Number,
      required: [true, "Paket fiyatı alanı zorunludur"],
    },
    packages_features: {
      type: [String],
      required: [true, "Paket özellikleri alanı zorunludur"],
    },
    packages_duration: {
      type: Number,
      required: [true, "Paket süresi alanı zorunludur"],
    },
    packages_revision: {
      type: Number,
      required: [true, "Paket revizyonu alanı zorunludur"],
    },
  },
  {
    timestamps: true,
  }
);

export default model<IGig>("Gig", gigSchema);
