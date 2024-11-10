// src/routes/exampleRoute.ts

import { Request, Response, Router } from "express";
const router = Router();

/**
 * @swagger
 * /api/example/user:
 *   get:
 *     summary: Get example data
 *     description: Returns an example object
 *     responses:
 *       200:
 *         description: Example object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.get("/api/example", (req: Request, res: Response) => {
  res.json({ message: "Hello, world!" });
});

export default router;
