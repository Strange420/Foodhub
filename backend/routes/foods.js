import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();
const dataPath = path.join(process.cwd(), "data", "foods.json");

// GET all foods
router.get("/", (req, res) => {
  const foods = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  res.json(foods);
});

export default router;
