import { useEffect, useRef, useState } from 'react';

// MUI
import { Typography, Box } from "@mui/material";

// icons
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';

import "./contact.scss";

const Contact = () => {

    // intersection observer for heading
    let headingRef = useRef();
    let [isHeadingIntersecting, setIsHeadingIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (headingRef.current) {
                let headingEntry = entries[0];
                setIsHeadingIntersecting(headingEntry.isIntersecting);
            }
        },
            {
                threshold: 0.1
            }
        )

        observer.observe(headingRef.current);

        return () => observer.disconnect();
    }, [headingRef])


    useEffect(() => {
        if (isHeadingIntersecting) {
            headingRef.current.classList.add("show");
        } else {
            headingRef.current.classList.remove("show");
        }
    }, [isHeadingIntersecting])



    return (
        <Box
            id="contact-section"
            className="contact-section"
        >
            <Typography
                variant='h3'
                textAlign='center'
                className='heading hidden'
                ref={headingRef}
            >
                Contact
            </Typography>


            <Box
                className="contacts-container"
            >
                {contacts.map((contact, index) => (

                    <Box
                        key={index}
                        className="contact-container poppins-font"
                    >
                        {contact.icon}
                        {contact.value}
                    </Box>
                ))}
            </Box>

        </Box>
    );
}

const contacts = [
    { name: "Email", value: "saad9191h@gmail.com", icon: <EmailOutlinedIcon /> },
    { name: "Phone", value: "+92 334 3066824", icon: <PhoneOutlinedIcon /> }
]

export default Contact;