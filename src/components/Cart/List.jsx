import React  from 'react'
import { CartState } from '../../context/Context'
import Item from './Item'
import './Cart.css'
import { Link } from 'react-router-dom'

const List = ({endereco}) => {
    const {
        state: { cart },
    } = CartState()
    // Função para calcular o valor total considerando a quantidade
    const calculateTotal = () => {
        let total = 0;
        cart.forEach(product => {
            total += product.price * product.qty;
        });
        return total;
    }
    
    const totalFrete = ()  => {
        if(endereco){
            return parseFloat(parseFloat(calculateTotal()) + 10.40)?.toFixed(2)

        }
        return (calculateTotal())

    }
    
    return (
        <div className='cartList'>
        
            {cart?.map(product => (
                <div style={{width: "100%"}} key={product.id}>
                    <Item product={product} />
                </div>
            ))}
            {cart.length > 0 && (
                <div>
                    <h3 className='total'>Subtotal: R$ {calculateTotal()?.toFixed(2)}</h3>
                    { endereco &&
                    <h3 className='total'>Entrega: R$ 10.40</h3>

                    }
                    <h3 className='total'>Total: R$ {totalFrete()}</h3>
                    <Link to="/obrigado"
               
                >
                Finalizar compra
            </Link>
                </div>
            )}
            {
                cart.length == 0 &&
                <>Nenhum item no carrinho</>
            }
        </div>
    )
}

export default List
