import Response from "../models/Response.js";
import { Parser } from "json2csv";

export const submitResponse = async (req, res) => {
  try {
    const { formId } = req.params;
    const { answers } = req.body;
    const response = new Response({ formId, answers });
    await response.save();
    res.status(201).json({ message: "Response submitted" });
  } catch (error) {
    res.status(500).json({ message: "Submission failed", error });
  }
};

export const getResponses = async (req, res) => {
  try {
    const responses = await Response.find({ formId: req.params.formId });
    res.json(responses);
  } catch (error) {
    res.status(500).json({ message: "Fetching responses failed", error });
  }
};

export const exportCSV = async (req, res) => {
  try {
    const responses = await Response.find({ formId: req.params.formId });
    const json2csv = new Parser();
    const csv = json2csv.parse(responses);
    res.header("Content-Type", "text/csv");
    res.attachment("responses.csv");
    return res.send(csv);
  } catch (error) {
    res.status(500).json({ message: "CSV export failed", error });
  }
};
