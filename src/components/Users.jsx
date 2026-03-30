import React from 'react';

const Users = () => {
    return (
        <div className='min-h-65 bg-[#4F39F6] w-full py-20'>
            <div className='w-full lg:w-3/4 mx-auto flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 lg:gap-24 px-4'>
                
                <div className='text-center'>
                    <h1 className='text-4xl lg:text-5xl font-bold text-white'>50k</h1>
                    <p className='text-white text-lg lg:text-2xl'>Active Users</p>
                </div>

                <div className="hidden sm:block divider divider-horizontal divider-start"></div>

                <div className='text-center'>
                    <h1 className='text-4xl lg:text-5xl font-bold text-white'>50k</h1>
                    <p className='text-white text-lg lg:text-2xl'>Active Users</p>
                </div>

                <div className="hidden sm:block divider divider-horizontal divider-start"></div>

                <div className='text-center'>
                    <h1 className='text-4xl lg:text-5xl font-bold text-white'>50k</h1>
                    <p className='text-white text-lg lg:text-2xl'>Active Users</p>
                </div>

            </div>
        </div>
    );
};

export default Users;