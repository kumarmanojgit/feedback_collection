import express from "express";
import {
  submitResponse,
  getResponses,
  exportCSV,
} from "../controllers/responseController.js";
const router = express.Router();

router.post("/:formId", submitResponse);
router.get("/:formId/export", exportCSV);
router.get("/:formId", getResponses);

export default router;
