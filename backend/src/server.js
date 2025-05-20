import express from "express";
import dotenv from "dotenv";
import notesRoutes from "./routes/note.routes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middlewares/rateLimiter.js";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT;

//middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(rateLimiter);

//routes
app.use("/api/v1/notes", notesRoutes);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`server started on port ${port}`);
  });
});
