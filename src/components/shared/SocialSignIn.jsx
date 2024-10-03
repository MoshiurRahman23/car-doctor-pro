"use client"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaFacebook, FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

export default function SocialSignIn() {
    const router = useRouter()
    const session = useSession()
    const handleSocialLogIn = async (provider) => {

        const resp = signIn(provider, { redirect: false })




        // const resp = await signIn(provider, {
        //     redirect: true,
        //     callbackUrl: path ? path : '/'
        // })
    }
    if (session.status === "authenticated") {
        router.push('/')
    }

    return (
        <div className='flex justify-center items-center gap-7'>
            <button onClick={() => handleSocialLogIn('google')} className="btn btn-circle btn-outline">
                <FcGoogle className='text-3xl' />
            </button>
            <button onClick={() => handleSocialLogIn('linkedin')} className="btn btn-circle btn-outline">
                <FaGithub className='text-3xl' />
            </button>
            <button onClick={() => handleSocialLogIn('facebook')} className="btn btn-circle btn-outline">
                <FaFacebook className='text-3xl' />
            </button>
        </div>
    )
}
