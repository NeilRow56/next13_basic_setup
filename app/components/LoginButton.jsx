'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'

const SignInButton = () => {

  const { data: session } = useSession()

  if(session) {
    return (
      <div className='relative h-12 w-12'>
        {session?.user.image ? (
          <Image 
            src={session.user.imageUrl}
            alt={session.user.name}
            className='inline-block rounded-full'
          
          />
          ):(
            <span className='inline-block h-12 w-12 overflow-hidden rounded-full'>
              <Image 
              src="/favicon.ico"
            alt="default icon"
            className='inline-block rounded-full'
              />


            </span>
          
        )}

      </div>
    )
  }

  // button
   return (
    <button
      className='text-sm font-medium tracking-wider uppercase text-stone-500'
      onClick={() => signIn()}
    >
      Sign In
    </button>
  )

  }

export default SignInButton