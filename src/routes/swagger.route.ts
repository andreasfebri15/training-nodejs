// src/routes/exampleRoute.ts

import { Request, Response, Router } from "express";
const router = Router();

router.get("/api/example", (req: Request, res: Response) => {
  res.json({ message: "Hello, world!" });
});

export default router;
