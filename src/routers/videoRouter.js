import express from "express";
import { postEdit,watch, getEdit,deleteVideo, upload} from "../controllers/videoController";

const videoRouter = express.Router();



videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", watch);
videoRouter.post("/:id(\\d+)/edit", postEdit);
videoRouter.get("/:id(\\d+)/edit", getEdit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);


export default videoRouter;