import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { toast } from 'react-toastify';

const ProductCard = ({ product,cart,setCart }) => {

  const handleCart=()=>{
    setSelected(true)
     const isFound = cart.find((item) => item.id === product.id);
     if(isFound){
      toast.error("Already exists")
      return;
     }
     setCart([...cart,product])
     toast.success('Item added to cart')

  }

  const [selected, setSelected] = useState(false);


  return (
    <div className="card w-full bg-base-200 shadow-sm h-full">
      <div className="card-body p-4 flex flex-col">

        <div className="flex justify-between items-center">
          <img src={product.icon} className="w-10 h-10" />
          <span className="badge badge-xs badge-warning">
            {product.tag}
          </span>
        </div>

        <h1 className="text-xl font-bold">{product.name}</h1>

        <div className="flex items-end gap-1">
          <span className="text-xl font-bold">${product.price}</span>
          <span className="text-sm text-gray-500">/{product.period}</span>
        </div>

        <ul className="text-sm mt-10 space-y-3">
          {product.features.map((feature, i) => (
            <li key={i} className='flex items-center gap-2'>
              <Check className='text-green-500 w-6 h-4' />
              <span className='text-xl font-semibold'>{feature}</span>
            </li>
          ))}
        </ul>

        <div className='mt-10'>
          <button onClick={()=>handleCart()} className="btn btn-primary w-full" disabled={selected}>
            {selected ? "Added To Cart" : "Buy Now"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;