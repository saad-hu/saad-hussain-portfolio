import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { experiences } from "@/lib/constants/experience";
import SectionHeading from "./SectionHeading";
import SectionParagraph from "./SectionParagraph";

const Experience = () => {
    return (
        <div>
            <SectionHeading>Experience</SectionHeading>

            <SectionParagraph>
                With hands-on industry experience, I've contributed to both small startups and large-scale enterprise projects, adapting seamlessly to varying scopes and team dynamics. I'm equally comfortable working independently or collaborating within cross-functional teams, and I've had the opportunity to lead development efforts and guide teams toward successful project delivery.
            </SectionParagraph>

            <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
            >
                {experiences.map(exp => (
                    <AccordionItem
                        value={exp.companyName}
                        key={exp.companyName}
                    >
                        <AccordionTrigger className="font-[theme(--font-primary)] text-sm md:text-lg bg-[theme(--color-primary-dark)] items-center p-4 hover:bg-[theme(--color-primary)] cursor-pointer">
                            <div className="flex-1 flex-col sm:flex-row flex justify-between items-center text-center">
                                <span className="font-bold">
                                    {exp.title} @ {exp.companyName}
                                </span>
                                <span>
                                    {exp.tenure}
                                </span>
                            </div>
                        </AccordionTrigger>

                        <AccordionContent className="p-4 bg-[#061a45dc] mt-2 rounded-xl w-full">
                            <ul className="list-disc pl-4 space-y-1.5">
                                {exp.descriptionList.map((desc, index) => (
                                    <li key={index}>
                                        {desc}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex gap-2.5 flex-wrap mt-4">
                                {exp.skillsUsedList.map(skill => (
                                    <p
                                        className="py-1 px-3 rounded-full bg-purple-800 backdrop-blur-3xl"
                                        key={skill}
                                    >
                                        {skill}
                                    </p>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

export default Experience