'use strict';

const express = require('express')
const { productController, userController, categoryController, cartController } = require('../controllers')
const verifyToken = require('../core/verify-jwt')
const verifyId = require('../core/verify-id')
const authToken = require('../core/auth-jwt')
const router = express.Router()

//Docs
router.get('/', (req, res) => {
    res.send("Looking for docs ? -> <a href='/api-docs'>api-docs</a>")
})

//Category
router.get("/category/:id", categoryController.GetCategoryByCategoryId)
router.get("/category", categoryController.GetAllCategories)

//Product
router.get("/products/product/:id", productController.GetProductByProductId)
router.get("/products/category/:id", productController.GetProductByCategoryId)
router.get("/products", productController.getAllProducts)

// // User
// router.get("/orders/:id", userController)
// router.post("/address", userController)
// router.post("/customer", userController)
// router.get("/user", userController)
router.post("/register", userController.PostRegister)
router.post("/login", userController.PostLogin)

// Cart
// router.post("/purchase", cartController)

//Groups
// router.get('/groups', verifyToken, groupcontroller.AllGroups)
// router.get('/groups/hasproducts', verifyToken, groupcontroller.AllGroupsWithProducts)
// router.get('/groups/group/:id', verifyId, verifyToken, groupcontroller.ParentIdGroups)


module.exports = router