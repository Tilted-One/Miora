import SubmitButton from "../../ui/SubmitButton";
import MioraLogo from '../../images/MioraLogo.png'

export default function ContactUs() {
    return (
        <div className="mb-16">
            <h1 className="text-2xl font-medium mb-6">Contact Us</h1>
            <div className="flex px-16 gap-x-10">
                <div className="w-2/4 h-[400px] h-10">
                    <img src={MioraLogo} alt="Miora Logo" className="h-72"></img>
                    <div className="flex gap-x-4 my-4">
                        <img alt="Eamil"></img>
                        <a id="emailLink" href="mailto:example@example.com">example@example.com</a>
                    </div>
                    <div className="flex gap-x-4 ">
                        <img alt="Phone"></img>
                        <a href="tel:+1234567890" id="phone">+1 (234) 567-890</a>
                    </div>
                </div>
                <div className="w-2/4 flex justify-end pl-20">
                    <form className="w-full">
                        <div className="mb-4">
                            <input className="border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline" type="text" name="Name" placeholder="Your Name" />
                        </div>
                        <div className="mb-4">
                            <input className="border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline" type="tel" placeholder="Your Phone Number" />
                        </div>
                        <div className="mb-4">
                            <input className="border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Your Email" />
                        </div>
                        <div className="mb-4">
                            <textarea className="border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline min-h-32" placeholder="Your Message"></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <SubmitButton />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
