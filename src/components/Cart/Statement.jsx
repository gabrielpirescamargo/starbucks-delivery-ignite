import React, { useEffect, useState } from 'react'
import { CartState } from '../../context/Context'
import './Cart.css'

const Statement = () => {
    const {
        state: { cart },
    } = CartState()

    const [total, setTotal] = useState()
    const priceInReal = total?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    const parseToReal = (value) => {
        return value?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    }

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0))
    }, [cart])

    const handleBuyOrder = () => {
        alert(`Obrigado pela oportunidade! :D \r\nTotal da compra:  ${priceInReal}`)
    }
    return (
        <div className='cartList'>
            <div>
                {
                    cart.length > 0 &&
                    <h2>
                        Extrato
                    </h2>
                }
                {
                    cart?.map((product, i) => {
                        return (
                            <div key={i}>{product.title} - {parseToReal(product.price)} * {product.qty} unidade(s) = {parseToReal(product.price * product.qty)}</div>
                        )
                    })
                }
                {
                    cart.length > 0 ?
                        (
                            <b>Total: {priceInReal}</b>
                        ) :
                        (
                            <span>Nao ha itens no seu carrinho</span>
                        )
                }
            </div>
            {
                cart.length> 0 &&
                <button
                onClick={() => {
                    handleBuyOrder()
                }}
                className='buyButton'>
                Finalizar compra
            </button>
            }
        

        </div>
    )
}

export default Statement 
