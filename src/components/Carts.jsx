import React from 'react';
import { toast } from 'react-toastify';

const Carts = ({cart, setCart}) => {

  const totalPrice = cart.reduce((sum, c) => sum + c.price, 0);

  const handleDelete = (c) => {
    toast.error("Item removed")
    const filteredArray = cart.filter((ct) => ct.id !== c.id);
    setCart(filteredArray);
  }

  const clearCart=()=>{
    toast.success("Cart cleared")
    setCart([]);
    return;

  }

  return (
    <div className='min-h-[1150px] place-items-center pt-10'>
      <div className='min-h-[860px] w-full md:w-3/4 text-center space-y-5'>
        <h1 className='text-4xl mt-5 font-semibold'>Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-center text-2xl p-5">Cart is empty</p>
        ) : (
          <>
            <div className="space-y-5 mt-4">
              {cart.map((c) => (
                <div key={c.id} className="flex items-center justify-between shadow-lg p-3">
                  <div className="flex items-center gap-5">
                    <img className="h-20 w-20 object-contain" src={c.icon} alt={c.name} />
                    <div>
                      <h2 className="text-xl font-bold">{c.name}</h2>
                      <span className='text-xl font-medium'>{c.price}/{c.period}</span>
                    </div>
                  </div>
                  <span onClick={() => handleDelete(c)} className='text-red-700 text-2xl font-medium btn'>Remove</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between text-gray-500 p-5 mt-5 rounded-lg text-xl font-bold">
              <div>Total</div>
              <div>${totalPrice}</div>
            </div>

            <button onClick={()=>clearCart()} className='btn btn-primary w-full'>Proceed to checkout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Carts;