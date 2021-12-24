import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    description: { type: String, default: "" },
    type: { type: String, required: true,  default: "" },
  },
  {
    timestamps: true,
  }
);

const Category =
  mongoose.models.Category || mongoose.model('Category', categorySchema);
export default Category;