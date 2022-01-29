import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    
    boardType: { type: String, required: true }
  },
  {
    timestamps: true,
  }
);

const Pcb =
  mongoose.models.Pcb || mongoose.model('Pcb', productSchema);
export default Pcb;