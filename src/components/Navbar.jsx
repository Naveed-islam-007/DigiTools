import { ShoppingCart } from 'lucide-react';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const Navbar = () => {
    return (
      <>
     <div class="navbar bg-base-100 shadow-sm">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabIndex="0" role="button" class="btn btn-ghost btn-circle">
        <h2 className='text-3xl font-bold  text-[#4F39F6] ml-20 lg:ml-100'>Digitools</h2>
      </div>
     
    </div>
  </div>
  <div class="navbar-center">
   <ul className='flex flex-col ml-8 lg:flex-row space-x-5 font-semibold'>
     <li>Products</li>
     <li>Features</li>
     <li>Pricing</li>
     <li>Testimonials</li>
     <li>FAQ</li>
   </ul>
  </div>
  <div class="navbar-end">
    <div className='flex flex-col md:flex-row items-center gap-5 lg:mr-50'>
        <ShoppingCart></ShoppingCart>
        <span className='font-semibold'>Login</span>
    <button className='p-5 bg-[#4F39F6] text-white rounded-2xl'>Get Started</button>
    </div>
  </div>
</div>
    <ToastContainer></ToastContainer>
      
      </>
    );
};

export default Navbar;