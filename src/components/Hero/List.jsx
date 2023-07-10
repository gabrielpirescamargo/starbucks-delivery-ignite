/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { CartState } from '../../context/Context'
import Tile from './Hero'
import axios from 'axios'


const List = () => {
    const {
        state: { products },
        dispatch,
    } = CartState()
    const [productsList, setProducts] = useState([products])
    const [stocks, setStocks] = useState([])



    const getStocks = async () => {
        try {
            const response = await axios.get("http://localhost:8000/stock")
            setStocks(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    const getProducts = async () => {
        try {
            const response = await axios.get("http://localhost:8000/products")
            setProducts(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    const handleSetProducts = () => {
        dispatch({
            type: 'SET_PRODUCTS',
            payload: {
                products: productsList
            }
        })
    }

    useEffect(() => {
        getStocks()
        getProducts()
    }, [])


    useEffect(() => {
        for (let i = 0; i < products?.length; i++) {
            const product = products[i]
            const stockItem = stocks.find(item => item.id === product.id)
            if (stockItem) {
                product.amount = stockItem.amount
            } else {
                product.amount = 0
            }
        }
        handleSetProducts()

    }, [productsList, stocks, dispatch, products])
    return (
        <div className='productList'>

            {
                products?.map((product, i) => {
                    return (
                        <Tile key={i} product={product} />
                    )
                })
            }
        </div>
    )
}

export default List 
