import React from 'react'
import { Input, Button, Divider } from '@nextui-org/react'

export default function Newsletter() {
  return (
    <main className='self-center bg-transparent my-6 w-full'>
      <div className='text-center'>
        <h1 className='font-semibold text-xl text-center'>Sign Up to Newsletter</h1>
        <p className='text-center'>Enter your email address to get $10 off your first order and free shipping.</p>
        <p className='text-center'>Updates information on Sales and Offers.</p>
      </div>
      <div className='flex justify-center mt-4'>
        <Input
          type='email'
          label='Enter your email'
          className='rounded-r-none w-72' // Adjust this to control the width of the input field
          classNames={{
            input: 'w-full' // Ensures the input spans the full width of its container
          }}
        />
        <Divider orientation="vertical" />
        <Button className='mt-2 rounded-l-none'>Subscribe</Button>
      </div>
    </main>
  )
}
