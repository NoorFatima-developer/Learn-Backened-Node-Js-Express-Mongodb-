import express from 'express';
import { getmyProfilebyAuthenticatedMiddleware, getmyProfileWithsimplycookiedecodedtoken, login, logout, register } from '../controllers/user.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

router.post("/new", register);
router.post("/login", login);
router.get("/me" , getmyProfileWithsimplycookiedecodedtoken);
router.get("/isauth" , isAuthenticated, getmyProfilebyAuthenticatedMiddleware);
router.get("/logout", logout);
// ye hum tb use krty hain jb hum admin dashboard bana rye o or hmain sary users ka data show krwana ho tb..
// router.get("/all", getAllUsers);

export default router;