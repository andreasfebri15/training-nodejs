import express, { Request, Response } from "express";
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
