import express from "express";
import {
  createForm,
  getForms,
  getFormById,
} from "../controllers/formController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/", verifyToken, createForm);
router.get("/", verifyToken, getForms);
router.get("/:id", getFormById);

export default router;
