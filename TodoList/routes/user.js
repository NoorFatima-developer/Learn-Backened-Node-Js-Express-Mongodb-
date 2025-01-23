import express from 'express';
import { getAllUsers, getmyProfilebyAuthenticatedMiddleware, getmyProfileWithsimplycookiedecodedtoken, login, register } from '../controllers/user.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

router.post("/new", register);
router.post("/login", login);
router.get("/me" , getmyProfileWithsimplycookiedecodedtoken);
router.get("/me" , isAuthenticated, getmyProfilebyAuthenticatedMiddleware);
router.get("/all", getAllUsers);

export default router;