
import GlobeWrapper from './GlobeWrapper';

const Contact = () => {

    return (
        <div>
            <h2 className='section-heading mb-7'>Let's Connect</h2>


            <div className='flex gap-5 flex-col lg:flex-row'>

                <div className="lg:flex-1 flex flex-row items-center justify-center h-[60vh] sm:h-[80vh] lg:h-[40rem] relative w-full">
                    <GlobeWrapper />
                </div>


                <div className='lg:flex-1'>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam deleniti fugit voluptatibus provident labore aut temporibus dolorum quidem? Quod nostrum laboriosam corrupti dignissimos provident. A eaque aut dolorem ducimus sit.</h3>
                </div>
            </div>
        </div>
    )
}

export default Contact