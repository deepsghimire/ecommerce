const data = require('../data/products.json')
const express = require('express')
const {returnAllProducts,returnSingleProduct} = require("../controllers/products")
const router = express.Router()

router.use(express.json())
router.get('/',returnAllProducts)

router.get('/:id', returnSingleProduct)



router.post('/',(req,res) => {
  console.log(req.body)
  res.json({
    nai: "Mero ta xaina ne koi"
  })
})

router.put("/:id",(req,res) =>{} )

router.delete("/:id",(req,res) =>{})


module.exports = router
