const express = require('express')
const app = express()
const cors = require('cors')
const productRouter = require('./routes/products')
const productData = require('./data/products.json')
const hbs = require('hbs')
const port = 4000

//setup our server
app.use(cors())
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))
//setup hbs
hbs.registerPartials(__dirname + '/views/partials')

//our middleware

app.get('/', (req, res) => {
  res.render('index', { productData })
})

app.use('/api/products/', productRouter)

app.get('/details/:id', (req, res) => {
  let { id: productId } = req.params
  res.render(
    'details',
    productData.find((product) => product.id == productId)
  )
})

app.listen(port, () => {
  console.log('api service started')
})
