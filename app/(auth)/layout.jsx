import "./globals.css";
import Header from "./header";
import Footer from "./footer";
import Provider from '../components/provider'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import Link from "next/link";
// import Sidebar from "./sidebar";

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <Provider>
        
        
        
        <main className="flex min-h-full overflow-hidden">
            <div className="mx-auto flex w-full maw-w-2xl">
                <Link href='/' className="flex items-center pap-2 text-stome-500">
                <ChevronLeftIcon className="w-5" />
                <span className="uppercase font-medium">Home </span>
                </Link>
                <div>
                    <h1 className="text-center text-2xl font-medium">
                        Sign in to your account
                    </h1>
                </div>
                <div className="mx-4 mt-10 flex-auto bg-white">
            
            
            {children}
                </div>
            </div>
        </main>
        <Footer />
        </Provider>
      </body>
    </html>
  );
}