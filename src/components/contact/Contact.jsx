import { MdOutlineEmail } from "react-icons/md";
import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";

function Contact() {
    return (
        <>
            <section id="contact" className="px-6 py-16 bg-slate-50 transition-colors">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl mb-8 text-slate-900">
                        Let us Connect
                    </h2>

                    <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
                        I am always interested in hearing about new opportunities and collaborations.
                    </p>

                    <div className="flex gap-6 justify-center flex-wrap">
                        <a
                            href="#"
                            className="flex items-center gap-2 px-6 py-3 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-50 transition-colors"
                        >
                            <MdOutlineEmail className="w-5 h-5" />
                        </a>
                        <a
                            href="#"
                            className="flex items-center gap-2 px-6 py-3 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-50 transition-colors"
                        >
                            <FiLinkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="#"
                            className="flex items-center gap-2 px-6 py-3 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-50 transition-colors"
                        >
                            <LuGithub className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;