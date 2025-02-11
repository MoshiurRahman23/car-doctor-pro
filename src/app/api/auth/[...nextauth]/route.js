import { connectDB } from '@/lib/connectDB';
import NextAuth from 'next-auth/next';
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
// import GitHubProvider from "next-auth/providers/github";
// import LinkedInProvider from "next-auth/providers/linkedin";
import bcrypt from "bcrypt";

const handler = NextAuth({
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials) {
                const { email, password } = credentials;
                if (!email || !password) {
                    return null;
                }
                const db = await connectDB()
                const currentUser = await db.collection('users').findOne({ email })
                if (!currentUser) {
                    return null;
                }
                const passwordMatch = bcrypt.compareSync(
                    password,
                    currentUser.password
                );

                if (!passwordMatch) {
                    return null;
                }
                return currentUser;
            }
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
        }),
        // GitHubProvider({
        //     clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
        //     clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET
        // })
        // LinkedInProvider({
        //     clientId: process.env.LINKEDIN_CLIENT_ID,
        //     clientSecret: process.env.LINKEDIN_CLIENT_SECRET
        // })
    ],
    callbacks: {},
    pages: {
        signIn: '/login'
    },
    callbacks: {
        async signIn({ user, account }) {
            if (account.provider === 'google' || account.provider === 'linkedIn' || account.provider === 'facebook') {
                const { name, email, image } = user;
                try {
                    const db = await connectDB()
                    const userCollection = db.collection('users')
                    const userExist = await userCollection.findOne({ email })
                    if (!userExist) {
                        const res = await userCollection.insertOne(user);
                        return user;
                    } else {
                        return user;
                    }
                } catch (error) {
                    console.log(error);
                }
            } else {
                return user;
            }
        },
    }
})

export { handler as GET, handler as POST }