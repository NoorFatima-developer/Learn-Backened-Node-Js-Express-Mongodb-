import express from 'express';

const router = express.Router();

router.get("/all", getAllUsers);
router.post("/new", register);
router.get("/userid/:id", getUserid);

export default router;