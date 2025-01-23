import express from 'express';
import { getAllUsers, getmyProfile, login, register } from '../controllers/user.js';

const router = express.Router();

router.post("/new", register);
router.post("/login", login);
router.get("/me" , getmyProfile);
router.get("/all", getAllUsers);

export default router;