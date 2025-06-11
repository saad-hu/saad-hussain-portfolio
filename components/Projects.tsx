import React from 'react'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react';
import { projectList } from '@/lib/constants/projects';

const Projects = () => {
    return (
        <div>
            <h2 className='section-heading mb-7'>Projects</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectList.map((project) => (
                    <div
                        key={project.title}
                        // group name for the project card container is projectCard
                        className="group/projectCard p-5 rounded-xl border border-[#414d6a] transition duration-300 hover:shadow-lg hover:shadow-white/20"
                    >
                        <div className="relative w-full h-40 rounded-md overflow-hidden mb-4">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* using the group projectCard on hover to add animation to this container */}
                        <div className='transition duration-200 group-hover/projectCard:translate-x-2'>
                            <h5 className="font-[theme(--font-primary)] text-xl font-semibold mb-2">
                                <span className='text-[theme(--color-primary)]'>{project.title}</span>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ml-2 text-blue-400 hover:text-blue-500"
                                    >
                                        <ExternalLink size={16} className="inline" />
                                    </a>
                                )}
                            </h5>

                            <div className="text-sm text-[theme(--color-text-secondary)]">
                                {project.techStack.join(" | ")}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects