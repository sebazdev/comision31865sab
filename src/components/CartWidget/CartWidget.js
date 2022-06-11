import './CartWidget.css'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartWidget = () => {

    const { getCartQuantity, totalQuantity } = useContext(CartContext)

    // const totalQuantity = getCartQuantity()

    return(
        <div className="CartWidget">
            <img src="/images/cart.svg" alt='cart' className='CartImg'/>
            { totalQuantity }
        </div>
    );
}

export default CartWidget