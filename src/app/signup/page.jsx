"use client"
import SocialSignin from '@/components/shared/SocialSignin'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react';

export default function SignInPage() {
    const router = useRouter();
    const handleSignIn = async (event) => {
        event.preventDefault();
        const newUser = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
        };

        const resp = await fetch("http://localhost:3000/signup/api", {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "content-type": "application/json"
            }
        })

        if (resp.status === 200) {
            event.target.reset()
        }
        if (resp.status === 200) {
            router.push('/')
        }
    }
    return (
        <div className='container px-24 mx-auto py-24'>

            <div className='grid grid-cols-2 gap-12'>
                <div>
                    <Image src="/assets/images/login/login.svg" height="540" width="540" alt="log In Img" />
                </div>
                <div className='border-2 border-primary p-12'>
                    <h6 className='text-3xl font-semibold text-center text-primary mb-12'>Sign In</h6>
                    <form onSubmit={handleSignIn} action="">
                        <label htmlFor="email">Name</label> <br />
                        <input
                            type="text"
                            name="name"
                            placeholder="your name"
                            className="mt-3 w-full input input-bordered"
                        />
                        <br /> <br />
                        <label htmlFor="email">Email</label> <br />
                        <input
                            type="text"
                            name="email"
                            placeholder="your email"
                            className="mt-3 w-full input input-bordered"
                        />
                        <br /> <br />
                        <label htmlFor="password">Password</label> <br />
                        <input
                            type="password"
                            name="password"
                            placeholder="your password"
                            className="w-full mt-3 input input-bordered"
                        />
                        <br />
                        <button
                            type="submit"
                            className="w-full btn btn-primary mt-12 text-lg"
                        >
                            Sign In
                        </button>
                    </form>
                    <div className='text-center'>
                        <p className='pb-5'>Or Sign In With</p>
                        {/* <div className='flex justify-center items-center gap-7'>
                            <button className="btn btn-circle btn-outline">
                                <FcGoogle className='text-3xl' />
                            </button>
                            <button className="btn btn-circle btn-outline">
                                <FaLinkedinIn className='text-3xl' />
                            </button>
                            <button className="btn btn-circle btn-outline">
                                <FaFacebook className='text-3xl' />
                            </button>
                        </div> */}
                        <SocialSignin></SocialSignin>

                        <div className='flex text-center py-4 justify-center items-center'>
                            <p>Already have an account? </p>
                            <Link href={'/login'} ><h2 className='text-primary underline'>Log In</h2></Link>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
