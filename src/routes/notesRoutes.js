import { Router } from 'express';

import {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/notesController.js';

const router = Router();

// GET /notes — отримати всі нотатки
router.get('/notes', getAllNotes);

// GET /notes/:noteId — отримати одну нотатку
router.get('/notes/:noteId', getNoteById);

// POST /notes — створити нотатку
router.post('/notes', createNote);

// DELETE /notes/:noteId — видалити нотатку
router.delete('/notes/:noteId', deleteNote);

// PATCH /notes/:noteId — оновити нотатку
router.patch('/notes/:noteId', updateNote);

export default router;
