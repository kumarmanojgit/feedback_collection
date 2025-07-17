import mongoose from "mongoose";

const responseSchema = new mongoose.Schema({
  formId: { type: mongoose.Schema.Types.ObjectId, ref: "Form" },
  answers: [String],
});

export default mongoose.model("Response", responseSchema);
