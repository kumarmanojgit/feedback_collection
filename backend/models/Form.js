import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  title: String,
  questions: [String],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
});

export default mongoose.model("Form", formSchema);
