import { Router, Request, Response } from "express";
import { formatResponse } from "../utils";
import {
  checkAuth,
  checkHeader,
  errorHandler,
  loggingMiddleware,
} from "../middleware";
import mathRouter from "./math.routes";
import authRouter from "./auth.routes";
import promoRouter from "./promo.routes";
import articleRouter from "./article.routes";
import tagRouter from "./tags.routes";
import swaggerRouter from "./swagger.route";
import carRouter from "./car.routes";
import iklanRouter from "./iklan.route";
import blogRouter from "./blog.routes";
const router = Router();

router.get("/try", (req: Request, res: Response) => {
  res.send("Hello World!");
});

router.get("/about", (req: Request, res: Response) => {
  const url = req.url;
  res.json({
    message: `You are at ${url}`,
  });

  router.get("/user/:person", (req: Request, res: Response) => {
    const { person } = req.params;
    res.send(`Hello ${person}`);
  });

  router.get("/user/:id/posts", (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
      message: `person : ${id}`,
    });
  });
});

// todo
// get /books
//

const books = [
  { id: "1", title: "1984", author: "George Orwell" },
  { id: "2", title: "Brave New World", author: "Aldous Huxley" },
];

router.get(
  "/books",
  // checkHeader,
  // loggingMiddleware,
  checkAuth,
  (req: Request, res: Response) => {
    res.json({
      message: "success",
      status: 200,
      data: books,
    });
  }
);
router.post("/books", (req: Request, res: Response) => {
  const { title, author } = req.body;
  if (!title || !author) {
    res.status(400).json({
      status: 400,
      message: "title and author are required",
      data: null,
    });
  }

  const newbook = {
    id: (books.length + 1).toString(),
    title,
    author,
  };
  books.push(newbook);

  res.status(201).json({
    status: 201,
    message: "success",
    data: newbook,
  });
});

// router.get("/books/:id", (req: Request, res: Response) => {
//   const { id } = req.params;
//   const book = books.find((book) => book.id === id);
//   if (!book) {
//     res.status(404).json({
//       status: 404,
//       message: "book not found",
//       data: null,
//     });
//   }
//   res.json({
//     status: 200,
//     message: "success",
//     data: book,
//   });
// });

router.get("/book", (req: Request, res: Response) => {
  const { id } = req.query;
  const book = books.find((book) => book.id === id);
  if (!book) {
    res.status(404).json({
      status: 404,
      message: "book not found",
      data: null,
    });
  }
  res.json({
    status: 200,
    message: "success",
    data: book,
  });
});

router.put("/books/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, author } = req.body;
  const bookIndex = books.findIndex((book) => book.id === id);
  if (bookIndex === -1) {
    res.json(formatResponse(404, "Book Not found", null));
  } else {
    books[bookIndex] = {
      ...books[bookIndex],
      title: title,
      author: author,
    };
    res.json(formatResponse(201, "Berhasil mengedit Data", bookIndex));
  }
});

router.delete("/books/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const bookIndex = books.findIndex((b) => b.id === id);
  if (bookIndex !== -1) {
    books.splice(bookIndex, 1);
    res.json(formatResponse(200, "Data Berhasil Di Hapus", null));
  } else {
    res.json(formatResponse(404, "Book not found", null));
  }
});

// filtering
router.get("/asd", (req: Request, res: Response) => {
  const { author } = req.query;
  const filteredBooks = books.filter((b) =>
    b.author.includes(author as string)
  );

  if (filteredBooks.length > 0) {
    res.json(formatResponse(200, "Success", filteredBooks));
  } else {
    res.json(formatResponse(404, "Book not found", null));
  }
});

router.use("/math", mathRouter);
router.use("/auth", authRouter);
router.use("/promo", promoRouter);
router.use("/article", articleRouter);
router.use("/tag", tagRouter);
router.use("/swagger", swaggerRouter);
router.use("/car", carRouter);
router.use("/iklan", iklanRouter);
router.use("/blog", blogRouter);
router.use(errorHandler);
export default router;
