// swaggerConfig.ts
import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Your API Title",
      version: "1.0.0",
      description: "API Documentation",
    },
    tags: [
      {
        name: "Car",
      },
      {
        name: "Iklan",
      },
      {
        name: "Blog",
      },
    ],
    servers: [
      {
        url: "http://localhost:3000", // Update with your server's URL
      },
    ],
  },
  apis: ["./src/routes/*.ts"], // Adjust path to your TypeScript route files
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
export default swaggerDocs;
