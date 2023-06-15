import cart from '../assests/cart.svg'
import './cart.css'
const CartWidget = () => {
    return (
        <div className="cart">
            <img src={cart} alt="cart-widget"/> 
            0
        </div>
    )
}

export default CartWidget