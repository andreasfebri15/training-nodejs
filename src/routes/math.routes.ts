import { Router } from "express";
import CMathOperations, {
  addcalculate,
  deleteHistoryById,
  getHistory,
  getHistoryById,
  getHistoryByIndex,
  getOperationParams,
  getOperationsList,
} from "../controllers/mathController";

const router = Router();

router.get("/", CMathOperations);
router.get("/list", getOperationsList);
router.get("/:valueA/:valueB/:operation", getOperationParams);
router.post("/add", addcalculate);
router.get("/history", getHistory);
router.get("/history/:id", getHistoryById);
router.delete("/delete/:id", deleteHistoryById);
export default router;
