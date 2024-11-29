import React from 'react';
import Image from 'next/image';
import laptop from '@/assets/Image/laptop3.jpg';
import { Button } from '@nextui-org/react';
export default function Cover() {
    return (
        <main className='bg-transparent'>
            <section className='flex justify-center'>
                <div className='w-1/2 bg-pink-950 flex flex-col p-5 border border-gray-800 rounded-md rounded-l-none'>
                    <div className='w-full'>
                        <h1 className=' font-bold'>iMac</h1>
                        <h2 className='text-xl'>Apple M3 chip</h2>
                        <div className='flex gap-4 mt-4'>
                            <Button>Shop Now</Button>
                            <Button className=' border rounded-l-none'>Add To Cart</Button>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 h-full rounded-lg overflow-hidden'>
                    <Image
                        src={laptop}
                        alt="laptop"
                        height={450} 
                        width={600} 
                        style={{ objectFit: 'cover' }}
                        className='rounded-r-lg'
                    />
                </div>
            </section>
        </main>
    );
}
