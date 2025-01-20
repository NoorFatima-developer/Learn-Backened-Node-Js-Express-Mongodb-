import express from 'express';

const router = express.Router();

router.post("/new", register);
router.post("/login", login);
router.get("/all", getAllUsers);
router.get("/userid/:id", getUserid);

export default router;