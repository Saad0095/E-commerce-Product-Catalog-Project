import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from './Loading'

const ProductDetail = () => {
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
                <div className='flex flex-col m-4 mt-6'>
                    <img src={product.thumbnail} alt="" className='w-4/12 border-gray-200 border-2 mb-3'/>
                    <h1>{product.title}</h1>
                    <p><b>Description:</b> {product.description}</p>
                    <p><b>Return Policy: </b>{product.returnPolicy}</p>
                    <p><b>Availibilty Status: </b>{product.availabilityStatus}</p>
                    <p><b>Price: </b>{product.price}</p>
                    <button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:focus:ring-yellow-900 w-1/3 mx-auto mb-4">Add to Cart</button>

                </div> :
                <Loading />
            }
        </div>
    )
}

export default ProductDetail
