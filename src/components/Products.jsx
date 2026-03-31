import React, { use } from 'react';

const Products = ({productsPromise}) => {
   const products=use(productsPromise);
   console.log(products)
    
    return (
        <>
        <div className='min-h-[1150px]  place-items-center pt-10'>
            <div className=' min-h-[96px] w-full md:w-3/4  text-center space-y-5'>
            <h1 className='text-7xl fon-bold '>Premium Digital Tools</h1>
            <p className='text-xl text-center'>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>
            </div>

            <div className='flex gap-20 my-10 '>
                <button className='btn btn-primary p-7 rounded-4xl'>Products</button>
                <button className='btn btn-outline p-7 rounded-4xl'>Cart</button>
            </div>


            <div className='w-full md:w-3/4 min-h-[870px] border border-black grid grid-cols-3'>
                {
                  products.map(product=>(
                    <div></div>
                  ))




                }
                   
          </div>

      </div>
        
        </>
    );
};

export default Products;