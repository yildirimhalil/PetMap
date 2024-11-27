import express from "express";
import { getAnimals, getAnimal, createAnimal, deleteAnimal } from "../controllers/animal.controller.js";

const router = express.Router();

router.get("/", getAnimals);
router.get("/:id", getAnimal);
router.post("/", createAnimal);
router.delete("/:id", deleteAnimal);

export default router;