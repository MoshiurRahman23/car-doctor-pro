"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { signOut, useSession } from 'next-auth/react';

export default function Navbar() {

    const session = useSession();
    console.log(session);


    return (
        <div className=' bg-slate-100 text-slate-900 mx-auto'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                    </div>
                    <Link href={'/'}>
                        <Image src="/assets/logo.svg" height={60} width={100} alt='Logo' />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className='flex items-center justify-center space-x-4'>
                        {
                            navItems.map((item) => <Link className='font-semibold hover:text-primary duration-300 hover:underline' href={item.path} key={item.path}>{item.title}</Link>)
                        }
                    </div>
                </div>
                <div className="navbar-end">
                    <div className='flex space-x-3 items-center'>
                        <HiOutlineShoppingBag className='text-2xl' />
                        <CiSearch className='text-2xl' />
                        <a className="btn btn-outline btn-primary px-8">Appointments</a>

                        <div>
                            <Image alt={session?.data?.user?.name} src={session?.data?.user?.image} height={50} width={50} className="rounded-full" />
                        </div>
                        {
                            session?.status === 'loading' &&
                            <h6>Loading....</h6>
                        }

                        {
                            session.status === 'unauthenticated' &&
                            <button className="btn btn-primary px-8"> <Link href={'/login'} >Log In</Link></button>
                        }
                        {
                            session.status === 'authenticated' &&
                            <button onClick={() => signOut()} className="btn btn-primary btn-outline px-8"> Log Out</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}
const navItems = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Services",
        path: "/services"
    },
    {
        title: "Blog",
        path: "/blog"
    },
    {
        title: "Contacts",
        path: "/contacts"
    },
];