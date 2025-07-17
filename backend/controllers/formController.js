import Form from "../models/Form.js";

export const createForm = async (req, res) => {
  try {
    const { title, questions } = req.body;
    const form = new Form({ title, questions, createdBy: req.admin.id });
    await form.save();
    res.status(201).json(form);
  } catch (error) {
    res.status(500).json({ message: "Failed to create form", error });
  }
};

export const getForms = async (req, res) => {
  try {
    const forms = await Form.find({ createdBy: req.admin.id });
    res.json(forms);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch forms", error });
  }
};

export const getFormById = async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    res.json(form);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch form", error });
  }
};
