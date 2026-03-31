

import { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Products from './components/Products'
import Started from './components/Started'
import Users from './components/Users'
import Banner from './components/banner'
import Footer from './components/footer'

function App() {

  const getProducts = async () => {
  const res = await fetch("/products.json");
  return res.json();
};

const productsPromise = getProducts();

  

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
     <Users></Users>
    <Suspense fallback={<span class="loading loading-spinner loading-xl"></span>}>
       <Products productsPromise={productsPromise}></Products>
    </Suspense>
     <Started></Started>
     <Pricing></Pricing>

   <Footer></Footer>
    

    </>
  )
}

export default App
