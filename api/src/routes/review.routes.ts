import express, { Router } from "express";

const router: Router = express.Router();

router.route("/").get();
router.route("/:id").get();

export default router;
