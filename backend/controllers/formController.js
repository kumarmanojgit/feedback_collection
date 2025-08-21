// ====== controllers/formController.js ======
import Form from "../models/Form.js";

export const createForm = async (req, res) => {
  try {
    const { title, questions } = req.body;

    if (!title || !questions) {
      return res
        .status(400)
        .json({ message: "Title and questions are required" });
    }

    const form = new Form({ title, questions, createdBy: req.admin.id });
    await form.save();
    return res.status(201).json({ publicId: form._id });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to create form", error: error.message });
  }
};

export const getForms = async (req, res) => {
  try {
    const forms = await Form.find({ createdBy: req.admin.id });
    return res.json(forms);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to fetch forms", error: error.message });
  }
};

export const getFormById = async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) {
      return res.status(404).json({ message: "Form not found" });
    }
    return res.json(form);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to fetch form", error: error.message });
  }
};
