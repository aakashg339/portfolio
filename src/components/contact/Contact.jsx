import { MdOutlineEmail } from "react-icons/md";
import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";

function Contact() {
    return (
        <>
            <section id="contact" className="px-6 py-16 bg-slate-50 dark:bg-slate-900 transition-colors scroll-mt-20">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl mb-8 text-slate-900 dark:text-white">
                        Let us Connect
                    </h2>

                    <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                        I am always interested in hearing about new opportunities and collaborations.
                    </p>

                    <div className="flex gap-6 justify-center flex-wrap">
                        <a
                            href="#"
                            className="flex items-center gap-2 px-6 py-3 border-2 border-slate-900 dark:border-slate-300 text-slate-900 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                        >
                            <MdOutlineEmail className="w-5 h-5" />
                            Email Me
                        </a>
                        <a
                            href="#"
                            className="flex items-center gap-2 px-6 py-3 border-2 border-slate-900 dark:border-slate-300 text-slate-900 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                        >
                            <FiLinkedin className="w-5 h-5" />
                            LinkedIn
                        </a>
                        <a
                            href="#"
                            className="flex items-center gap-2 px-6 py-3 border-2 border-slate-900 dark:border-slate-300 text-slate-900 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                        >
                            <LuGithub className="w-5 h-5" />
                            GitHub
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;