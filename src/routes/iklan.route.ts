import { Router } from "express";
import { CGetAllIklan } from "../controllers/Iklan.controller";
const router = Router();

router.get("/", CGetAllIklan);
export default router;
