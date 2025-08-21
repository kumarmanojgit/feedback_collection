import Response from "../models/Response.js";
import { Parser } from "json2csv";

export const submitResponse = async (req, res) => {
  try {
    const { formId } = req.params;
    const { answers } = req.body;

    if (!answers || !Array.isArray(answers)) {
      return res
        .status(400)
        .json({ message: "Answers are required and must be an array" });
    }

    const response = new Response({ formId, answers });
    await response.save();
    return res.status(201).json({ message: "Response submitted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Submission failed", error: error.message });
  }
};

export const getResponses = async (req, res) => {
  try {
    const responses = await Response.find({ formId: req.params.formId });
    return res.json(responses);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Fetching responses failed", error: error.message });
  }
};

export const exportCSV = async (req, res) => {
  try {
    const responses = await Response.find({ formId: req.params.formId });
    if (!responses.length) {
      return res.status(404).json({ message: "No responses found" });
    }

    const json2csv = new Parser();
    const csv = json2csv.parse(responses);

    res.header("Content-Type", "text/csv");
    res.attachment("responses.csv");
    return res.send(csv);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "CSV export failed", error: error.message });
  }
};
