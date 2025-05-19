import express from "express";
import {
  addNote,
  deleteNote,
  getAllNotes,
  getNote,
  updateNote,
} from "../controllers/note.controller.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNote);
router.post("/", addNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
