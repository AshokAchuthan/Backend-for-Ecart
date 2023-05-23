const wishlists = require('../models/wishlistSchema')

   //add to wishlist logic
   exports.addtowishlist = async (req,res)=>{
    //get product details from request

    //using destructuring
    const{id,title,price,image}=req.body
    //logic
    try{
        //check if the product in the mongodb
        const item = await wishlists.findOne({id})
        if(item){
            res.status(403).json("item already exists in wishlist")
        }
        else{
            //add the item into the wishlist
            const newProduct = new wishlists({id,title,price,image})
            //to store in the mongodb
            await newProduct.save()
            res.status(200).json("product added to the wishlist")
        }
    }
    catch(error){
        res.status(401).json(error)
    }
} 

//get wishlist data - logic

exports.getWishlistitems=async(req,res)=>{
    //logic
    try{
        //get all wishlist items from the mongo db
        const allWishlistItem = await wishlists.find()
        res.status(200).json(allWishlistItem)
    }
    catch(error){
        res.status(401).json(error)
    }
}

//remove wishlist item
exports.removewishlistitem=async(req,res)=>{
    //get id from the request
    const{id}=req.params
    try{
        const removewishlistitem = await wishlists.deleteOne({id})
        if(removewishlistitem){
            //get all wishlist items after removing particular wishlist item
            const allWishlists = await wishlists.find()//remaining wishlist items
            res.status(200).json(allWishlists)
        }
        else{
            res.status(404).json("item not found")
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}