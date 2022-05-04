import React from 'react'

const Display = () => {
  return (
    <div className='py-16 '>
        <div className='max-w-[1240px] mx-auto'>

            <div className="flex flex-col justify-center items-center mb-10">
                <h1 className='font-poppins font-bold text-[56px]'>Display your viral campaigns in</h1>
                <h1 className='font-poppins font-bold text-[56px]' ><span className="text-green-600">4 different</span> presentation styles</h1>
            </div>

            <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-4 mb-16'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='h-[275px] w-full bg-black mb-8 rounded-3xl'></div>
                    <div className='text-center '>
                        <h1 className="font-poppins font-bold mb-3 text-xl">Full Page</h1>
                        <div className='flex flex-col items-center justify-center'>
                        <p>Create a converting landing</p>
                            <p>page from scratch or using our</p>
                             <p>proven templates.</p>
                        </div>
                    </div>
                </div>

                
                <div className='flex flex-col justify-center items-center'>
                    <div className='h-[275px] w-full bg-black mb-8 rounded-3xl'></div>
                    <div className='text-center '>
                        <h1 className="font-poppins font-bold mb-3 text-xl">Full Page</h1>
                        <div className='flex flex-col items-center justify-center'>
                        <p>Create a converting landing</p>
                            <p>page from scratch or using our</p>
                             <p>proven templates.</p>
                        </div>
                        
                    </div>
                </div>

                
                <div className='flex flex-col justify-center items-center'>
                    <div className='h-[275px] w-full bg-black mb-8 rounded-3xl'></div>
                    <div className='text-center '>
                        <h1 className="font-poppins font-bold mb-3 text-xl">Full Page</h1>
                        <div className='flex flex-col items-center justify-center'>
                        <p>Create a converting landing</p>
                            <p>page from scratch or using our</p>
                             <p>proven templates.</p>
                        </div>
                    </div>
                </div>

                
                <div className='flex flex-col justify-center items-center'>
                    <div className='h-[275px] w-full bg-black mb-8 rounded-3xl'></div>
                    <div className='text-center '>
                        <h1 className="font-poppins font-bold mb-3 text-xl">Full Page</h1>
                        <div className='flex flex-col items-center justify-center'>
                        <p>Create a converting landing</p>
                            <p>page from scratch or using our</p>
                             <p>proven templates.</p>
                        </div>
                    </div>
                </div>

                

            </div>

            <div className='flex flex-col justify-center items-center'>
                <p className='text-[18px] mb-4'>Seeing is believing</p>
                <button className="py-4 px-6 font-bold text-white bg-green-600  rounded-[30px] hover:underline">
              CHECK OUT LIVE EXAMPLES
            </button>
            </div>
        </div>

    </div>
  )
}

export default Display