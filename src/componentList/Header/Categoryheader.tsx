import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { Navbar, NavbarContent, NavbarItem, NavbarBrand, Divider } from '@nextui-org/react';
import menu from '@/assets/Icon/menu4.png'
export default function Categoryheader() {
  return (
    <main>
      <Navbarr />
    </main>
  );
}

function Navbarr() {
  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/" className='flex'>
          <Image
            src={menu}
            alt='Menu'
            height={10}
            width={30}
            className='w- '
          />
          <p className='mt-1 font-semibold'>All Categories</p>
          <Divider orientation="vertical" />
        </Link>

      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <Link href="/">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/cars">Shop</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact">Contact</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about">About</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {/* Additional content, if any */}
      </NavbarContent>
    </Navbar>
  );
}

