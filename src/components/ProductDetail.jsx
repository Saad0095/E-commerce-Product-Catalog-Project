import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
import CartContext from '../context/CartContext'

const ProductDetail = () => {
    const {addToCart} = useContext(CartContext)
    const { productId } = useParams()
    const [product, setProduct] = useState(null)

    const getData = async () => {
        const response = await axios.get(`https://dummyjson.com/products/${productId}`)
        console.log(response.data);
        setProduct(response.data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="">
            {product ?
                <div className='flex flex-col m-4 mt-6 gap-4'>
                    <img src={product.thumbnail} alt="" className='w-96 border-gray-200 border-2 mb-3'/>
                    <h1>{product.title}</h1>
                    <p className='md:w-1/2'><b>Description:</b> {product.description}</p>
                    <p><b>Return Policy: </b>{product.returnPolicy}</p>
                    <p><b>Availibilty Status: </b>{product.availabilityStatus}</p>
                    <p><b>Price: </b>{product.price}</p>
                    <button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium text-sm px-5 py-2.5 text-center dark:focus:ring-yellow-900 w-96 mb-4" onClick={()=> addToCart(product)}>Add to Cart</button>

                </div> :
                <Loading />
            }
        </div>
    )
}

export default ProductDetail
