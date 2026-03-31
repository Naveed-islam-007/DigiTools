import React from 'react';
import PacImg from '../assets/package.png'
import RocImg from '../assets/rocket.png'
import UserImg from '../assets/user.png'

const Started = () => {
    return (
        <>
        <div className='min-h-[600px]  w-full space-y-20'>
            <div className='min-h-[102px] w-3/4  mx-auto text-center py-5'>
                <h1 className='text-5xl font-bold'>Get Started in 3 Steps</h1>
                <p>Start using premium digital tools in minutes, not hours.</p>
            </div>


            <div className='grid grid-cols-1 min-h-[380px] w-full space-x-5 md:grid-cols-3 md:w-3/4 md:mx-auto'>
                <div className='rounded-xl flex flex-col justify-center items-center gap-5 shadow-xl'>
                    < div className='border rounded-full p-5 bg-purple-300'>
                        <img src={UserImg} alt="" className='h-25 w-25'/>
                    </div>
                    <div className='w-3/4 '>
                        <h2 className='text-3xl font-bold text-center'>Create Account</h2>
                        <p className='text-center text-xl'>Sign up for free in seconds. No credit card required to get started</p>
                    </div>
                </div>


                <div className='rounded-xl flex flex-col justify-center items-center gap-5 shadow-xl'>
                    < div className='border rounded-full p-5 bg-purple-300'>
                        <img src={PacImg} alt="" className='h-25 w-25'/>
                    </div>
                    <div className='w-3/4 '>
                        <h2 className='text-3xl font-bold text-center '>Choose Products</h2>
                        <p className='text-center text-xl'>Browse our catalog and select the tools that fit your needs. </p>
                    </div>
                </div>


              <div className='rounded-xl flex flex-col justify-center items-center gap-5 shadow-xl'>
                    < div className='border rounded-full p-5 bg-purple-300'>
                        <img src={RocImg} alt="" className='h-25 w-25'/>
                    </div>
                    <div className='w-3/4 '>
                        <h2 className='text-3xl font-bold text-center'>Start Creating</h2>
                        <p className='text-center text-xl'>Download and start using your premium tools immediately.</p>
                    </div>
                </div>


                

               
                
            </div>

        </div>
        
        </>
    );
};

export default Started;