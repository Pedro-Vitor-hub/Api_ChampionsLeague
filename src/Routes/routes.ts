import { Router } from "express";
import { deletePlayerById , getPlayer, getPlayerById, postPlayer, UpdatePlayer } from "../controllers/players-controllers";

const router = Router();

router.post("/api/players/register",postPlayer);
router.get("/api/players/list", getPlayer);
router.get("/api/players/:id", getPlayerById);
router.delete("/api/players/delete/:id", deletePlayerById);
router.patch("/api/players/update/:id", UpdatePlayer);

export default router;