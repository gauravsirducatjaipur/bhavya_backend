const express = require('express');
const app = express();
const port = 1300;

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description for Product 1",
    price: 100
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description for Product 2",
    price: 200
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description for Product 3",
    price: 300
  }
]


app.get('/', (req, res) => {
  console.log("Home page request get from user")

  res.send('<h1>This is a home page</h1>')
})


app.get('/products', (req, res) => {
  console.log('product request get from user')

  res.send(products)
})



app.listen(port, () => {
  console.log('Server is running on port http://localhost:%s', port);
})

