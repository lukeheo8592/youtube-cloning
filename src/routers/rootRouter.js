import express from "express";
import {postJoin,getJoin, login} from "../controllers/userController";
import { search,home } from "../controllers/videoController";

const rootRouter = express.Router();


rootRouter.get("/", home);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.get("/login", login);
rootRouter.get("/search", search);






export default rootRouter;