    //to define routes fo client request, creates routes folder and router.js file

    //->import express
    const express = require('express')
    //import productContoller
    const productController= require('../controllers/productController')
    //import wishlisController
    const wishlisController = require('../controllers/wishlistController')
    //import cartcontroller
    const cartcontroller= require('../controllers/cartController')
    //->using express create an object for router class inorder to setup path
    const router = new express.Router()

    //->Resolving client requests
    //api - getallproduct request

    router.get('/products/all-products',productController.getallproducts)

    //api - get particular product
    router.get('/products/view-product/:id',productController.viewProduct)

    //api - product added to wishlist product
    router.post('/wishlist/add-to-wishlist',wishlisController.addtowishlist)

    //api - get wishlist product
    router.get('/wishlist/get-wishlist',wishlisController.getWishlistitems)

    //api - remove wish list item
    router.delete('/wishlist/remove-wishlist-item/:id',wishlisController.removewishlistitem)

    //api-product add to cart
    router.post('/cart/add-to-cart',cartcontroller.addtocart)

    //api-get cart items
    router.get('/cart/get-item',cartcontroller.getcart)

    //api - remove item from cart
    router.delete('/cart/remove-item/:id',cartcontroller.removecartitems)


    //api-inrement cart item router
    router.get('/cart/increment-count/:id',cartcontroller.incrementcount)

    //api-decrement cart item 
    router.get('/cart/decrement-count/:id',cartcontroller.decrementcount)
    //export router
    module.exports=router