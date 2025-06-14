
export type TExperience = {
    title: string;
    companyName: string;
    tenure: string;
    descriptionList: string[];
    skillsUsedList: string[];
}

export const experiences: TExperience[] = [
    {
        title: "Software Engineer",
        companyName: "Afiniti",
        tenure: "July 2024 - Present",
        descriptionList: [
            "Contributed to the development of an extensive configuration management system using TypeScript-based frameworks for the contact center industry, which specializes in optimizing customer interactions, enhancing customer satisfaction, and improving operational efficiency across various industries.",
            "Designed and implemented a scalable multi-tenant backend system using NestJS and PostgreSQL, enabling secure data separation across tenants.",
            "Led the development of a complex Teams feature enabling the creation and management of hierarchical team structures, with access controls allowing supervisors to view agents from only their own teams and all nested sub-teams.",
            "Built and maintained the company’s core backend services, including the Mega ACD Backend and Orchestrator API, architecting the latter to support dynamic strategy-based behavior with flexible DTOs, route handling, and services based on the selected strategy.",
            "Engineered and deployed the company’s frontend applications using Next.js. Enhanced development velocity by significantly contributing to the company’s internal UI component library shared across multiple services.",
            "Developed and maintained a Node.js-based terminal application (\"Maintenance Shell\") that executed complex CLI operations such as querying services and automating remote tasks via SSH and Bash scripts.",
            "Followed Agile methodologies, actively participating in sprint planning, end-of-sprint demos, and collaborative backlog grooming to ensure continuous delivery of high-impact features."
        ],
        skillsUsedList: ['Nest.js', 'Next.js', 'Docker', 'React.js', 'PostgreSQL']
    },
    {
        title: "Software Engineer",
        companyName: "OkayKer",
        tenure: "March 2023 - June 2024",
        descriptionList: [
            "Developed a comprehensive e-commerce web application from the ground up, using React.js, Redux Toolkit, Material UI, and related technologies, transforming design concepts from Figma into a user-friendly and responsive platform that efficiently caters to 7,500+ customers.",
            "Architected and developed new modules and scalable features—such as an Inventory Management System consisting of Purchase Requisition and Purchase Order components—using Node.js, MongoDB, and React.js, contributing to the development of the company’s SaaS product.",
            "Created, enhanced, and deployed REST API endpoints resulting in a 20% reduction in API response time. Leveraged AWS services such as S3 to implement data storage and retrieval.",
            "Fully redesigned the company’s existing admin dashboard, to meet evolving industry requirements, optimize user workflows, and enforce ground rules and style guidelines, ensuring consistency.",
            "Developed and deployed a robust PDF report generation module on the server, reducing report generation time by over 60% and significantly improving operational efficiency.",
            "Implemented extensive updates to legacy frontend React.js v16 codebase, upgrading all libraries and packages to the latest major versions, and reduced codebase complexity by refactoring and optimizing code.",
            "Automated admin tasks with cron jobs on the server by creating a service reminder module, reducing admin’s manual effort by 50%."
        ],
        skillsUsedList: ['Nest.js', 'Next.js', 'Docker', 'React.js', 'PostgreSQL']
    },
    {
        title: "Frontend Developer",
        companyName: "High Tech Engineering",
        tenure: "June 2022 - February 2023",
        descriptionList: [
            "Worked closely with the design and product team to implement new features with a mobile-first approach that resulted in a 10% increase in mobile user engagement.",
            "Developed new pages and sections using frontend languages and frameworks such as Vanilla JavaScript, CSS, HTML, jQuery, Tailwind CSS, and Bootstrap, ensuring cross-browser compatibility and achieving a 98% score in accessibility testing.",
            "Reduced page load times by 30% by implementing lazy loading and other optimization techniques."
        ],
        skillsUsedList: ['Nest.js', 'Next.js', 'Docker', 'React.js', 'PostgreSQL']
    },
];