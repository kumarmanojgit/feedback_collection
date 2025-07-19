// import mongoose from "mongoose";

// const formSchema = new mongoose.Schema({
//   title: String,
//   questions: [String],
//   createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
// });

// export default mongoose.model("Form", formSchema);

import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  title: String,
  questions: [
    {
      questionText: String,
      type: { type: String, default: "text" },
    },
  ],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
});

export default mongoose.model("Form", formSchema);
