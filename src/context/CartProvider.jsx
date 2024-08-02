import React, { useEffect, useState } from 'react'
import CartContext from './CartContext'

function CartProvider({children}) {
    const [cart,setCart] = useState([])
    const [itemsNo, setItemsNo] = useState()

    useEffect(() => {
    setItemsNo(cart.length)
    }, [cart])
    
    const addToCart = (product) =>{
        setCart([...cart,product])
    }

    const removeFromCart = (productId) =>{
        const newCart = cart.filter((product)=> product.id !== productId)
        setCart([...newCart])
    }

    const clearCart = () =>{
        setCart([])
    }
  return (
    <CartContext.Provider value={{cart,itemsNo,addToCart,removeFromCart,clearCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider
