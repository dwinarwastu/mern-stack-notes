import Note from "../models/note.model.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({ _id: -1 });
    res.status(200).json({ message: "success fetch all note", notes: notes });
  } catch (error) {
    console.error("error in getAllNotes Contrroller", error);
    res.status(500).json({ message: "internal server error" });
  }
}

export async function getNote(req, res) {
  try {
    const { id } = req.params;
    const noteById = await Note.findById({ _id: id });
    if (!noteById)
      return res.status(404).json({ message: "note is not found" });
    res
      .status(200)
      .json({ message: "success fetch note by id", note: noteById });
  } catch (error) {
    console.error("error in getNote Controller", error);
    res.status(500).json({ message: "internal server error" });
  }
}

export async function addNote(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    const saveNote = await note.save();
    res.status(201).json({ message: "success create note", note: saveNote });
  } catch (error) {
    console.error("error in addNote Contreller", error);
    res.status(500).json({ message: "internal server error" });
  }
}

export async function updateNote(req, res) {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const noteUpdate = await Note.findByIdAndUpdate(
      { _id: id },
      { title, content },
      { new: true }
    );
    if (!noteUpdate)
      return res.status(404).json({ message: "note is not found" });
    res.status(200).json({ message: "success update note", note: noteUpdate });
  } catch (error) {
    console.error("error in updateNote Controller", error);
    res.status(500).json({ message: "internal server error" });
  }
}

export async function deleteNote(req, res) {
  try {
    const { id } = req.params;
    const noteDelete = await Note.findByIdAndDelete({ _id: id });
    if (!noteDelete)
      return res.status(404).json({ message: "note is not found" });
    res.status(200).json({ message: "success delete notes" });
  } catch (error) {
    console.error("error in deleteNote Controller", error);
    res.status(500).json({ message: "internal server error" });
  }
}
