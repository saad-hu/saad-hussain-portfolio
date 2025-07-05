import { contactInfo } from "@/lib/constants/contact-info"

const ContactDetails = () => {
    const renderData = (title: string, data: string) => {
        switch (title) {
            case "Email": {
                return <a href={`mailto:${data}`}>{data}</a>
            }
            case "Phone": {
                return <a href={`tel:${data}`}>{data}</a>
            }
            case "Linkedin": {
                return <div></div>
            }
            default: return data
        }
    }

    const renderTitle = (title: string, data: any) => {
        switch (title) {
            case "Linkedin": {
                return <a href={data} target="_blank">{title}</a>
            }
            default: return title
        }
    }

    return (
        <div className='flex flex-col gap-5 sm:flex-row sm:gap-8 lg:gap-10 justify-center mt-10'>
            {contactInfo.map(({ title, icon, data }) => (
                <div className="flex gap-2 mb-5" key={title}>
                    <div>
                        {icon}
                    </div>

                    <div>
                        <h4 className="font-[theme(--font-primary)] text-base sm:text-lg font-bold">{renderTitle(title, data)}</h4>
                        {Array.isArray(data) ? (
                            data.map((datum, index) => (<div key={index}>{datum}</div>))
                        ) : (
                            <>{renderData(title, data)}</>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ContactDetails