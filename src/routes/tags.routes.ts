import { Router } from "express";
import {
  CCreateTag,
  CDeleteTag,
  CGetAllTags,
  CGetTagById,
  CUpdateTag,
} from "../controllers/TagController";

const router = Router();

router.get("/", CGetAllTags);
router.get("/:id", CGetTagById);
router.post("/", CCreateTag);
router.patch("/:id", CUpdateTag);
router.delete("/:id", CDeleteTag);
export default router;
