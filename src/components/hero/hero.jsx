import { FaCode } from "react-icons/fa6";

function Hero() {
    return (
        <>
            <section id="hero" className="px-6 py-20 md:py-32 max-w-6xl mx-auto pt-32">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Profile Image Placeholder */}
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl">
                        <FaCode className="w-24 h-24 text-white" />
                    </div>

                    {/* Hero Text */}
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            My Name
                        </h1>
                        <p className="text-2xl text-slate-700 mb-6">
                            Designation
                        </p>
                        <p className="text-lg text-slate-600 mb-8 max-w-2xl">
                            Building scalable web applications that solve real problems.
                        </p>
                        <div className="flex gap-4 justify-center md:justify-start">
                            <a
                                href="mailto:your.email@example.com"
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
                            >
                                Get In Touch
                            </a>
                            <a
                                href="/resume.pdf"
                                className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;