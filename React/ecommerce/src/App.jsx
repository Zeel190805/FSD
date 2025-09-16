import React from 'react'
import axios from 'axios'
import './App.css'

const App = () => {

  const [productdata , setProductData] = React.useState([])

  React.useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProductData(response.data))
      .catch(error => console.error(error))
  }, [])

  return (
    <div className='main'>
      {productdata.map(product => (
        <div key={product.id}>
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default App