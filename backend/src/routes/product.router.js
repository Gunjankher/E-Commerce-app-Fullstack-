import { Router } from "express";
import { adminOnly } from "../middlerware/auth.middleware.js";
import {newProduct,getlatestProducts, getAllCategories, getAdminProducts, getSingleProduct, updateProduct, deleteProduct, getAllProducts} from '../controllers/product.controller.js'
import {singleUpload} from '../middlerware/multer.middleware.js'
import { asyncHandler } from "../utilis/asyncHandler.js";




const router = Router()

router.route("/new").post(adminOnly,singleUpload,newProduct)
router.route("/latest").get(getlatestProducts)
router.route("/categories").get(getAllCategories)
router.route("/all").get(getAllProducts)
router.route("/admin-products").get(getAdminProducts)
router.route("/:id").get(getSingleProduct).put(adminOnly,singleUpload,updateProduct).delete(adminOnly,deleteProduct)

// 2.33  76% 2.44 70



export default router