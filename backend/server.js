import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import foodRoutes from "./routes/foods.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Serve static files from /public
app.use(express.static(path.join(process.cwd(), "public")));

// API routes
app.use("/api/foods", foodRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
