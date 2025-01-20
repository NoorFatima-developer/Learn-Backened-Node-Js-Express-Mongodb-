import express from 'express';

const router = express.Router();

router.get("/all", getAllUsers);
router.post("/new", register);
router.get("/userid/:id", getUserDetails)

export default router;