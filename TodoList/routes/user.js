import express from 'express';
import { login } from '../controllers/user';

const router = express.Router();

router.post("/new", register);
router.post("/login", login);
router.get("/all", getAllUsers);
router.get("/userid/:id", getUserid);

export default router;