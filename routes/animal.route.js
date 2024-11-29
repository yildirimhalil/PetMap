import express from "express";
import { getAnimals, getAnimal, createAnimal, deleteAnimal, updateAnimal} from "../controllers/animal.controller.js";

const router = express.Router();

router.get("/", getAnimals);
router.get("/:id", getAnimal);
router.post("/", createAnimal);
router.delete("/:id", deleteAnimal);
router.post("/:id", updateAnimal);

export default router;