import { Router } from "express";
import {
  CdeletePromo,
  CGetAllPromos,
  CGetPromoById,
  createPromo,
  CupdatePromo,
} from "../controllers/PromoController";
const router = Router();

router.get("/", CGetAllPromos);
router.get("/:id", CGetPromoById);
router.post("/", createPromo);
router.patch("/:id", CupdatePromo);
router.delete("/:id", CdeletePromo);
export default router;
