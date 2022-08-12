

const returnSingleProduct = (req, res) => {
    res.json(data.find((obj) => obj.id == req.params.id))
    }

const returnAllProducts = (req, res) => {
  if (req.query.category) {
    console.log(`given category: ${req.query.category}`)
    res.json(
      data.filter(
        (obj) => obj.category === req.query.category
      )
    )
  } else {
        res.json(data)
  }
}


module.exports = {
  returnSingleProduct,
  returnAllProducts,
}
