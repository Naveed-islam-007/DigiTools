import { Check } from 'lucide-react';
import React, { use } from 'react';
import ProductCard from './ProductCard';

const Products = ({productsPromise , cart , setCart}) => {
   const products=use(productsPromise);
   console.log(products)
    
    return (
        <>
        <div className='min-h-[950px]  place-items-center pt-10'>
            

          


 <div className="w-full md:w-3/4 min-h-[870px] grid gap-6 
                grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  {
    products.map(product => (
     <ProductCard product={product} cart={cart} setCart={setCart}></ProductCard>
    ))
  }
</div>

      </div>
        
        </>
    );
};

export default Products;