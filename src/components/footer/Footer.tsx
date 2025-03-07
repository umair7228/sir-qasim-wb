import { Github, Linkedin, Mail, Twitter, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { FaMediumM } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='w-[85%] 2xl:w-[70%] max-w-screen-2xl gap-4 border-t py-4 mt-20 flex items-center justify-center'>
      <Link href={'https://www.linkedin.com/in/qasimhassan/'} target='_blank'>
        <Button variant="outline" className='hover:text-white hover:bg-black rounded-full w-12 h-12'>
            <Linkedin size={'32'} className='!w-6 !h-6' />
        </Button>
        </Link>

        <Link href={'https://github.com/aiwithqasim'} target='_blank'>
            <Button variant="outline" className='hover:text-white hover:bg-black rounded-full w-12 h-12'>
                <Github size={'32'} className='!w-6 !h-6' />
            </Button>
        </Link>

        <Link href={'mailto:qasimhassan1020@gmailcom'} target='_blank'>
            <Button variant="outline" className='hover:text-white hover:bg-black rounded-full w-12 h-12'>
                <Mail size={'32'} className='!w-6 !h-6' />
            </Button>
        </Link>

        <Link href={'https://www.twitter.com/qasimhassan1020'} target='_blank'>
            <Button variant="outline" className='hover:text-white hover:bg-black rounded-full w-12 h-12'>
                <Twitter size={'32'} className='!w-6 !h-6' />
            </Button>
        </Link>

        <Link href={'https://medium.com/@aiwithqasim'} target='_blank'>
            <Button variant="outline" className='hover:text-white hover:bg-black rounded-full w-12 h-12'>
                <FaMediumM size={'32'} className='!w-6 !h-6' />
            </Button>
        </Link>

        <Link href={'https://www.youtube.com/@aiwithqasim'} target='_blank'>
            <Button variant="outline" className='hover:text-white hover:bg-black rounded-full w-12 h-12'>
                <Youtube size={'32'} className='!w-6 !h-6' />
            </Button>
        </Link>
    </footer>
  )
}

export default Footer
