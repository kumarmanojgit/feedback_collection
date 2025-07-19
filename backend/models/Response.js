import mongoose from "mongoose";

const responseSchema = new mongoose.Schema({
  formId: { type: mongoose.Schema.Types.ObjectId, ref: "Form" },
  answers: [
    {
      questionText: String,
      answer: String,
    },
  ],
});

export default mongoose.model("Response", responseSchema);
