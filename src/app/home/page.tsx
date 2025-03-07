import HomePage from '@/components/homePage/HomePage'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='w-full overflow-x-hidden relative -z-30 flex flex-col items-center justify-center'>
        <div className='w-[85%] 2xl:w-[70%] max-w-screen-2xl flex flex-col lg:flex-row items-center justify-center lg:justify-between min-h-screen relative z-50'>
            {/* Left Content */}
            <div className="w-[90%] lg:w-[60%] xl:w-[50%] ">
                <h2 className="text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold my-6 animate-slide-right text-center lg:text-start">QASIM HASSAN</h2>
                <h3 className="text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-semibold my-2.5 animate-slide-right text-center lg:text-start"
                style={{animationDelay: "100ms", opacity: 0}}
                >Cloud Data Engineer</h3>
                <p className="text-sm xl:text-lg animate-slide-right text-center lg:text-start" style={{animationDelay: "200ms", opacity: 0}}>
                Experienced Data Engineer with 5+ years in data pipelines, monitoring,
                and lineage projects. Skilled in AWS, Azure, Databricks, and
                Snowflake, delivering technical and business value. Passionate about
                leveraging emerging technologies for real-time solutions.
                </p>

                {/* social icons */}
                <div className='my-2.5 space-x-3 animate-slide-up flex items-center justify-center lg:justify-start' style={{animationDelay: "600ms", opacity: 0}}>
                    <Link href={'https://www.linkedin.com/in/aiwithqasim/'} target='_blank'>
                        <Button variant="outline" className='hover:text-white hover:bg-black rounded-full w-10 h-10 xl:w-12 xl:h-12'>
                            <Linkedin size={'32'} className='!w-6 !h-6' />
                        </Button>
                    </Link>

                    <Link href={'https://github.com/aiwithqasim'} target='_blank'>
                        <Button variant="outline" className='hover:text-white hover:bg-black rounded-full w-10 h-10 xl:w-12 xl:h-12'>
                            <Github size={'32'} className='!w-6 !h-6' />
                        </Button>
                    </Link>

                    <Link href={'mailto:qasimhassan1020@gmailcom'} target='_blank'>
                        <Button variant="outline" className='hover:text-white hover:bg-black rounded-full w-10 h-10 xl:w-12 xl:h-12'>
                            <Mail size={'32'} className='!w-6 !h-6' />
                        </Button>
                    </Link>
                </div>

                {/* button */}
                <Link href={'/about'} className='flex items-center justify-center lg:justify-start'>
                    <Button className='my-3.5 hover:text-white hover:bg-black border animate-slide-up rounded-lg' style={{animationDelay: "600ms", opacity: 0}}>About Me</Button>
                </Link>
            </div>

            {/* Right Image */}
            <div className="animate-slide-left flex items-start justify-end lg:w-[40%] mt-14 lg:mt-0">
                <Image
                src="/logo.png"
                alt="Hero Image"
                width={500}
                height={500}
                className="w-[100%] lg:w-4/5 2xl:w-auto 2xl:h-auto rounded-full"
                />
            </div>

        </div>
        <HomePage />
    </div>
  )
}

export default Home
