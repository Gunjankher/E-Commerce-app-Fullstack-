import { Router } from "express";
import { adminOnly } from "../middlerware/auth.middleware.js";
import {singleUpload} from '../middlerware/multer.middleware.js'
import { asyncHandler } from "../utilis/asyncHandler.js";
import { allOrder, myOrder, newOrder } from "../controllers/order.controllers.js";





const router = Router()

router.route("/new").post(newOrder)
router.route("/my").get(myOrder)
router.route ("all").get(adminOnly,allOrder)


// 2.33  76% 2.44 70



export default router