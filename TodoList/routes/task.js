import express from 'express';
import { newTask } from '../controllers/task';
import { isAuthenticated } from '../middlewares/auth';

const router = express.Router();

// iss sy pehly meny isAuthenticated islye use kea hai ku k m chahti o k jb user loggedin ho tb hi wo task add krsky.
router.post("/new", isAuthenticated, newTask)

export default router;