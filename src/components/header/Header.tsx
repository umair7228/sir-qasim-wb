import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'


const Header = () => {
  return (
    <header className='absolute top-0 w-[85%] 2xl:w-[70%] max-w-screen-2xl border-b py-4 flex items-center justify-between animate-slide-down' style={{animationDelay: "600ms", opacity: 0}}>
      <Link href={'/'} className='flex items-center gap-2'>
        <Image 
            src={'/logo.png'}
            alt='logo'
            width={100}
            height={100}
            className='rounded-full w-8 h-8 md:w-11 md:h-11 lg:w-12 lg:h-12'
        />
        <h2 className='text-lg md:text-2xl font-bold text-[#4183C4]'>QASIM HASSAN</h2>
      </Link>

      {/* buttons */}
      <nav className='hidden lg:block'>
        <Link href={'/'}>
          <Button variant={'link'} className='text-lg'>Home</Button>
        </Link>
        
        <Link href={'/about'}>
          <Button variant={'link'} className='text-lg'>About</Button>
        </Link>
        
        <Link href={'/experience'}>
          <Button variant={'link'} className='text-lg'>Experience</Button>
        </Link>
        
        <Link href={'/projects'}>
          <Button variant={'link'} className='text-lg'>Projects</Button>
        </Link>

        <Link href={'/blogs'}>
          <Button variant={'link'} className='text-lg'>Blogs</Button>
        </Link>
        
      </nav>


      {/* mobile menu */}
      <Sheet>
        <SheetTrigger className='block lg:hidden '><Menu /></SheetTrigger>
        <SheetContent className='bg-white'>
          <SheetHeader>
            <SheetTitle>
              <Link href={'/'} className='flex items-center gap-2'>
                <Image 
                    src={'/logo.png'}
                    alt='logo'
                    width={100}
                    height={100}
                    className='rounded-full w-8 h-8'
                />
                <h2 className='text-xl font-bold text-[#4183C4]'>QASIM HASSAN</h2>
              </Link>
                <hr className='mt-4' />
            </SheetTitle>
            <SheetDescription className='flex flex-col gap-4 mt-4'>
                <Link href={'/'}>
                  <Button variant={'link'} className='text-lg'>Home</Button>
                </Link>
                
                <Link href={'/'}>
                  <Button variant={'link'} className='text-lg'>About</Button>
                </Link>
                
                <Link href={'/'}>
                  <Button variant={'link'} className='text-lg'>Experience</Button>
                </Link>
                
                <Link href={'/'}>
                  <Button variant={'link'} className='text-lg'>Projects</Button>
                </Link>

                <Link href={'/'}>
                  <Button variant={'link'} className='text-lg'>Blogs</Button>
                </Link>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

    </header>
  )
}

export default Header
