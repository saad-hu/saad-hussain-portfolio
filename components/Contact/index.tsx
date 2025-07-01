import GlobeWrapper from './GlobeWrapper';
import ContactForm from './ContactForm';
import SectionHeading from '../SectionHeading';

const Contact = () => {

    return (
        <div>
            <SectionHeading>Let's Connect</SectionHeading>


            <div className='flex gap-5 flex-col lg:flex-row items-stretch lg:items-center'>

                <div className="lg:flex-1 flex flex-row items-center justify-center h-[50vh] sm:h-[75vh] lg:h-[30rem] xl:h-[40rem] relative w-full">
                    <GlobeWrapper />
                </div>


                <div className='lg:flex-1'>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Contact