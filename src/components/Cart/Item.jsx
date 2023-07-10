import { useState } from "react"
import { CartState } from '../../context/Context'
import './Cart.css'
import thrash from '../../img/thrash.svg'

const Item = ({ product }) => {

    const {
        dispatch,
    } = CartState()
    const [quantity, setQuantity] = useState(1)
    const pricePerQuantity = product.price * quantity
    const priceInReal = pricePerQuantity?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    const productName = product.title
    const productImage = product.image
    const productAmount = product.amount
    const productQty = product.qty

    const handleChangeQuantity = (qty) => {
        dispatch({
            type: 'CHANGE_QTY',
            payload: {
                id: product.id,
                qty: qty
            }
        })
    }
    const handleRemoveFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: product
        })
    }

    return (
        <div>
            <div className='cartTile'>
                <img
                    src={productImage}
                    width={120}
                    height={120}
                    alt="" />
                <div className="cartBox">
                    <div className='cartInfo'>
                        <span className='cartTitle'>
                            {productName}
                        </span>
                        
                        <span className="price">
                            {priceInReal}
                        </span>
                    </div>
                    <div className="cartSubtitle">
                        Estoque: {productAmount}
                    </div>
                    <div className="deleteQty">
                   
                    <input
                            onChange={e => {
                                setQuantity(e.target.value)
                                handleChangeQuantity(e.target.value)
                            }}
                            type="number"
                            className="qty"
                            defaultValue={productQty || 1}
                            min={1}
                            max={productAmount}>
                        </input>
                        <button
                        className={'cartButtonRemove'}
                        onClick={() => {
                            handleRemoveFromCart()
                        }}>
                        <img
                            width={24}
                            alt="thrashIcon"
                            src={thrash} />
                            Remover
                    </button>
                    </div>
                 
                  
                </div>
            </div>
        </div>
    )
}

export default Item 
