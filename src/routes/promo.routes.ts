import { Router } from "express";
import {
  CdeletePromo,
  CGetAllPromos,
  CGetPromoById,
  createPromo,
  CupdatePromo,
} from "../controllers/PromoController";
const router = Router();

/**
 * @swagger
 * /promo:
 *   get:
 *     tags:
 *       - Promo
 *     summary: Get all promotions
 *     description: Retrieve a list of all available promotions
 *     responses:
 *       200:
 *         description: A list of promotions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The promotion ID
 *                   title:
 *                     type: string
 *                     description: Title of the promotion
 
 */

router.get("/", CGetAllPromos);
router.get("/:id", CGetPromoById);
router.post("/", createPromo);
router.patch("/:id", CupdatePromo);
router.delete("/:id", CdeletePromo);
export default router;
