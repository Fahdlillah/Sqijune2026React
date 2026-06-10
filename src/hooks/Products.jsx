import React, { useEffect, useState } from 'react'

//useEffect handles side effect in cases like fetching data(apis), timer, local storage, eventlistener
const Products = () => {
    const [product, setProducts] = useState([]);

    useEffect(()=>{
         fetch('https://fakestoreapi.com/products')
        .then((res)=> res.json())
        .then((data)=>  setProducts(data))
        
    }, []);

    
  return (
    <>
        {product.map(prod => (
                <div key={prod.id}>
                    <p>{prod.title}</p>
                   <img src={prod.image} alt={prod.title} />
                </div>
            ))
        }
    
    </>
  )
}

export default Products