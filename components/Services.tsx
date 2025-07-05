import React, { ReactElement } from 'react'
import SectionHeading from './SectionHeading'
import { Code, Server } from 'lucide-react'
import { MovingBorderContainer } from './ui/moving-border'

const Services = () => {
    return (
        <div>
            <SectionHeading
                className='text-xl! md:text-3xl! lg:text-4xl!'
                viewportAmount="some"
            >
                Outpace your competition with lightning-fast, high-performing web applications, built to <ColorText>scale</ColorText>, <ColorText>engage</ColorText>, and <ColorText>convert</ColorText>.
            </SectionHeading>


            <div className='w-full flex flex-col gap-5 md:flex-row mt-9'>
                <div className='md:flex-3/5 md:py-5'>
                    <p className='sm:text-lg lg:text-xl font-bold mb-8'>
                        Build and launch web products 10x smarter, <span className='text-[theme(--color-text-tertiary)] font-medium'>with seamless performance, refined design, and a scalable architecture that adapts to your growth. Every line of code is crafted for speed, stability, and a standout user experience.</span>
                    </p>

                    <div className='flex justify-center md:justify-start'>
                        <a href="/#contact">
                            <MovingBorderContainer
                                containerClassName='h-14 w-40 cursor-pointer text-base lg:text-lg'
                            >
                                Let's Connect
                            </MovingBorderContainer>
                        </a>
                    </div>

                </div>

                <div className='border-l border-r border-[theme(--color-border-one)] md:flex-2/5'>

                    <Service
                        title='Frontend Development'
                        description="I specialize in modern frontend development using JavaScript and TypeScript frameworks such as React and Next.js. Whether it's building responsive marketing websites, dynamic web applications, or integrating APIs, I deliver fast, accessible, and scalable user experiences tailored to your needs."
                        icon={<Code />}
                    />

                    <Service
                        title='Backend Development'
                        description="I build scalable and high-performance backend systems using Node.js, Express, and NestJS. From designing RESTful APIs to managing databases like MongoDB and PostgreSQL, I focus on creating secure, efficient, and well-structured server-side architectures that power robust web applications."
                        icon={<Server />}
                    />
                </div>
            </div>

        </div>
    )
}

const Service: React.FC<{ title: string; description: string; icon?: ReactElement }> = ({ title, description, icon }) => {
    return (
        <div className='last:border-0 border-b border-[theme(--color-border-one)] px-4 py-2 sm:py-7'>
            <h4
                className='text-[theme(--color-text-secondary)] font-bold text-sm sm:text-base mb-3 flex gap-2 items-center'
            >
                {icon && icon}
                {title}
            </h4>
            <p className='text-[theme(--color-text-tertiary)] text-sm sm:text-base'>{description}</p>
        </div>
    )
}

const ColorText: React.FC<React.HtmlHTMLAttributes<HTMLSpanElement>> = ({ children }) => <span className='text-[theme(--color-primary)]'>{children}</span>

export default Services