

import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Products from './components/Products'
import Started from './components/Started'
import Users from './components/Users'
import Banner from './components/banner'
import Footer from './components/footer'
import Carts from './components/Carts'



 const getProducts = async () => {
  const res = await fetch("/products.json");
  return res.json();
};

const productsPromise = getProducts();

function App() {

   const [activeTab, setActiveTab] = useState("Products");

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
     <Users></Users>


       <div className=' my-10 space-y-4 container mx-auto'>
         <div className='text-center'>
                   <h1 className='text-7xl fon-bold mb-5'>Premium Digital Tools</h1>
                   <p className='text-xl text-center'>Choose from our curated collection of premium digital products designedto boost your productivity and creativity.</p>
                 </div>
                <div className='flex gap-20 justify-center'>
                 
                  <button onClick={()=>setActiveTab('Products')} className={activeTab==='Products'? `btn btn-primary p-7 rounded-4xl`:`btn btn-outline p-7 rounded-4xl`}>Products</button>
                <button onClick={()=>setActiveTab('Cart')} className={activeTab==='Cart'? `btn btn-primary p-7 rounded-4xl`:`btn btn-outline p-7 rounded-4xl`}>Cart</button>
                </div>
            </div>
    

    {
      activeTab==="Products" && <Products productsPromise={productsPromise} activeTab={activeTab} setActiveTab={setActiveTab}></Products>}
      {activeTab === "Cart" && <Carts></Carts>}
     <Started></Started>
     <Pricing></Pricing>

     

   <Footer></Footer>
    

    </>
  )
}

export default App
