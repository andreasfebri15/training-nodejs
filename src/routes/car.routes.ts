import { Router } from "express";
import { CCreateCar, CGetAllCars, CGetCar } from "../controllers/CarController";

const router = Router();

/**
 * @swagger
 * /car:
 *   get:
 *     tags:
 *       - Car
 *     summary: Get all cars with iklan dan blog
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
router.get("/", CGetAllCars);

/**
 * @swagger
 * /car/getcar:
 *   get:
 *     tags:
 *       - Car
 *     summary: Get all car
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
router.get("/getcar", CGetCar);

/**
 * @swagger
 * components:
 *   schemas:
 *     Car:
 *       type: object
 *       properties:
 *         image:
 *           type: string
 *           description: URL of the car image
 *         name:
 *           type: string
 *           description: Name of the car
 *         model:
 *           type: string
 *           description: Model of the car
 *         variant:
 *           type: string
 *           description: Variant of the car
 *         price:
 *           type: number
 *           format: float
 *           description: Price of the car
 *         isNew:
 *           type: boolean
 *           description: Indicates if the car is new
 *         IklanId:
 *           type: string
 *           description: Foreign key to the Iklan entity
 *       required:
 *         - image
 *         - name
 *         - model
 *         - variant
 *         - price
 *         - isNew
 *         - IklanId
 *
 * /car:
 *   post:
 *     summary: Create a new car
 *     tags:
 *       - Car
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Car'
 *     responses:
 *       201:
 *         description: Car created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Car'
 *       400:
 *         description: Invalid input
 */

router.post("/", CCreateCar);

export default router;
