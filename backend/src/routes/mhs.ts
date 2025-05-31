import { Router, Request, Response } from "express";
import { getAllMhs, getMhsbyNIM } from "../controller/mhs";

const router = Router();

router.get("/", getAllMhs);
router.get("/:nim", getMhsbyNIM);

export default router;
