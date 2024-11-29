import React from 'react'
import { Input, Button, Divider } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import facebook from '@/assets/Icon/facebook.png'
import linkedin from '@/assets/Icon/linkedin.png'
import pinterest from '@/assets/Icon/pinterest.png'
import twitter from '@/assets/Icon/twitter (1).png'
import telegram from '@/assets/Icon/telegram.png'
import whatsapp from '@/assets/Icon/social.png'
import location from '@/assets/Icon/location3.png'
import email from '@/assets/Icon/email.png'
import Newsletter from './Newsletter'

export default function Footer() {
  return (
    <main className='bg-transparent flex flex-col w-full '>
      <Divider orientation='horizontal' />

      <Newsletter />

      <section className='flex ml-[10%] '>
        <section className='bg-none py-6 space-y-6'>
          <div className='space-y-6 '>
            <Link href='/'>
            </Link>
            <h1 className='text-2xl font-semibold'>Contact Us</h1>
            <section className='flex'>
              <Image src={location}
                alt="location"
                width={25}
                height={25}
                className=' cursor-pointer'
              />
              <p>268 St, South New York/NY 98944, United States</p>

            </section>
            <section className='flex'>
              <Image src={email}
                alt="email"
                width={25}
                height={25}
                className=' cursor-pointer'
              />
              <p>fuadhossainbk01@gmail.com</p>
            </section>
          </div>
          <div className='flex space-x-4'>
            <Image src={facebook}
              alt="Face"
              width={25}
              height={25}
              className=' cursor-pointer'
            />
            <Image src={linkedin}
              alt="Face"
              width={25}
              height={25}
              className=' cursor-pointer'

            />
            <Image src={pinterest}
              alt="Face"
              width={25}
              height={25}
              className=' cursor-pointer'

            />
            <Image src={whatsapp}
              alt="Face"
              width={25}
              height={25}
              className=' cursor-pointer'

            />
            <Image src={twitter}
              alt="Face"
              width={25}
              height={25}
              className=' cursor-pointer'

            />
            <Image src={telegram}
              alt="Face"
              width={25}
              height={25}
              className=' cursor-pointer'

            />
          </div>
        </section>
        <section className='flex flex-col  font-semibold text-sm'>
          <h1 className='text-lg'>Quick Links</h1>
          <Link href='/'>Home</Link>
          <Link href='/cars'>Cars</Link>
          <Link href='/about'>About Us</Link>
          <Link href='/feedback'>Feedback</Link>
          <Link href='/faq'>FAQs</Link>
          <Link href='/contact'>Contact Us</Link>
        </section>
        <section className='flex flex-col  font-semibold text-sm'>
          <h1 className='text-lg'>Quick Links</h1>
          <Link href='/'>Home</Link>
          <Link href='/cars'>Cars</Link>
          <Link href='/about'>About Us</Link>
          <Link href='/feedback'>Feedback</Link>
          <Link href='/faq'>FAQs</Link>
          <Link href='/contact'>Contact Us</Link>
        </section>
        <section className='flex flex-col  font-semibold text-sm'>
          <h1 className='text-lg'>Quick Links</h1>
          <Link href='/'>Home</Link>
          <Link href='/cars'>Cars</Link>
          <Link href='/about'>About Us</Link>
          <Link href='/feedback'>Feedback</Link>
          <Link href='/faq'>FAQs</Link>
          <Link href='/contact'>Contact Us</Link>
        </section>
      </section>
      <Divider orientation='horizontal' />

    </main>
  )
}
