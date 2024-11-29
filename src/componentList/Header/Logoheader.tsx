'use client'
import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Input,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    Avatar,
    Button,
    Divider
} from "@nextui-org/react";
import Image from 'next/image';
import fav from '@/assets/Icon/fav.png'
import cart from '@/assets/Icon/cart.png'
import Login from '../../../../ecommerce_site/src/app/login/page'
import Signup from '../../../../ecommerce_site/src/app/signup/page'



export default function Logoheader() {

    const [showAuth, setShowAuth] = useState(false);

    const toggleAuth = () => {
        setShowAuth(!showAuth);
    };

    return (
        <Navbar isBlurred >
            <NavbarContent className="w-full" justify='center'>
                <NavbarBrand>
                    <Link color="foreground" href="/">
                        <p className="sm:block font-bold text-inherit">Ecommerce Site</p>
                    </Link>
                </NavbarBrand>
                <NavbarContent className='my-6'>
                    <Input
                        type='search'
                        labelPlacement='inside'
                        label='searching for...'
                        
                    />
                </NavbarContent>
                <NavbarContent   justify="end">
                    {/* <Button onClick={toggleAuth} variant="ghost" color='success' className="text-xs">
                        {showAuth ? 'Close' : 'Login / Signup'}
                    </Button> */}
                    <Image src={cart} alt="cart" width={30} height={20} />
                    <Image src={fav} alt="fav" width={30} height={20} />
                    <Dropdownn />
                    
                </NavbarContent>
            </NavbarContent>

            {/* {showAuth && (
                <section className="fixed top-96 left-0 h-full w-full flex justify-center items-center bg-transparent z-10">
                    <div className="relative w-1/2 p-6 rounded transform transition-transform duration-500 delay-75 ease-in">
                        <div className="flex">
                            <Login />
                            <Signup />
                        </div>
                    </div>
                </section>
            )} */}
        </Navbar>
    );
}

function Dropdownn() {

    return (
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name="Jason Hughes"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">zoey@example.com</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                <DropdownItem key="logout" color="danger">
                    Log Out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}