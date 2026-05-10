import { MdOutlineEmail } from "react-icons/md";
import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import portfolioConfig from "../../config/portfolioConfig";
import ContactItem from "./ContactItem";

function Contact() {
    const contactSectionData = portfolioConfig.contact;

    const contacts = contactSectionData.items;

    return (
        <>
            <section id="contact" className="px-6 py-16 bg-slate-50 dark:bg-slate-900 transition-colors scroll-mt-20">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl mb-8 text-slate-900 dark:text-white">
                        Let us Connect
                    </h2>

                    <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                        {contactSectionData.description}
                    </p>

                    <div className="flex gap-6 justify-center flex-wrap">
                        {
                            contacts.map((contact) => (
                                <ContactItem
                                    key={contact.id}
                                    {...contact}  
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;