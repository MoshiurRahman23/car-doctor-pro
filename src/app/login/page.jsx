"use client"
import Image from 'next/image'
import React from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import SocialSignIn from '@/components/shared/SocialSignIn';


export default function LogInPage() {
    const router = useRouter()
    const handleLogIn = async () => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const resp = await signIn("credentials", {
            email,
            password,
            redirect: false
        })
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
                    <h6 className='text-3xl font-semibold text-center text-primary mb-12'>Log In</h6>
                    <form onSubmit={handleLogIn} action="">
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
                        <SocialSignIn></SocialSignIn>
                        <div className='flex text-center py-4 justify-center items-center'>
                            <p>Do not have an account? </p>
                            <Link href={'/signup'} ><h2 className='text-primary underline'> Sign in</h2></Link>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
