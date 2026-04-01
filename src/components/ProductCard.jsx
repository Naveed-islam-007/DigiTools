import React from 'react';
import { Check } from 'lucide-react';

const ProductCard = ({ product }) => {
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
          <button className="btn btn-primary w-full">
            Buy Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;