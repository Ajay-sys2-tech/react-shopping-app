import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';
import { Route } from 'react-router-dom';
import { Shop } from '../shop/shop';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div>
        <h1>My Cart Items</h1>
      </div>

      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if(cartItems[product.id] !== 0){
            return <CartItem data = {product} />;
          }
        })}
      </div>
      
      { totalAmount > 0 ?
        <div className='checkout'>
          <p> Subtotal: ${getTotalCartAmount()}</p>
          <button onClick={() => navigate("/")}>
            Continue Shopping
          </button>
          <button>Checkout</button>
        </div>
        :
        <div className="failedcheckout">
          <h1>
          Your cart is Empty
          </h1>
          <button onClick={() => navigate("/")}>
           Continue Shopping
          </button>
        </div>
      }
    </div>
  )
}
