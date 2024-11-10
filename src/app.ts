import express, { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./config/swagger.config";
// import logger from "morgan";
import router from "./routes";
import { checkHeader } from "./middleware";
const app = express();
const port = 3000;

// app.use(logger("dev"));
app.use(express.json());

// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello Guys!");
// });

// app.get("/user/:id", (req: Request, res: Response) => {
//   const id = req.params.id;
//   res.send(`User with id: ${id}`);
// });
app.use(express.json());
app.use(express.static("public"));
// app.use(checkHeader);
app.use("/", router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});
