import { SignupForm } from '@/components/signup-form'
import { Card } from '@/components/ui/card'
import React from 'react'

export default function SignUp() {
  return (
    <>
      <Card className="mx-auto border-none">
      <div className="md:flex flex-cols h-screen w-full">
          {/* left */}
        <div className="bg-primary text-zinc-50  flex-cols h-screen w-full"> 
          <header className="flex items-center justify-start px-8 m-4 h-16">
            <h1 className="font-serif dark:text-zinc-900 text-2xl">
              Sales_router
            </h1>
          </header>
          <div className="mt-auto h-5/6 flex justify-end items-end ">
            <h2 className="font-serif dark:text-zinc-900   text-md px-8">
              Sales_Route “This webSite has saved me countless hours of work and
              helped me to create sales mans route faster and more optimized  .”
            </h2>
          </div>
        </div>
        <div className=" h-full flex items-center justify-center w-full">
    <SignupForm/>
        </div>
      </div>
    </Card>
    </>
  )
}
