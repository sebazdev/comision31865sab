import './CartWidget.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link, useNavigate } from 'react-router-dom'

const CartWidget = () => {

    const { getCartQuantity, totalQuantity } = useContext(CartContext)

    const navigate = useNavigate()

    // const totalQuantity = getCartQuantity()

    return(
        <div className="CartWidget" onClick={() => navigate('/cart')}>
            <img src="/images/cart.svg" alt='cart' className='CartImg'/>
            { totalQuantity }
        </div>
    );
}

export default CartWidget