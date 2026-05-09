function Navbar() {
    const navItems = [
        {
            id: "about",
            label: "About"
        },
        {
            id: "experience",
            label: "Experience"
        },
        {
            id: "education",
            label: "Education"
        },
        {
            id: "skills",
            label: "Skills"
        },
        {
            id: "projects",
            label: "Projects"
        },
        {
            id: "contact",
            label: "Contact"
        }
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);

        if(element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };
    
    return (
        <>
            <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-md z-40 transition-colors">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <button 
                            onClick={() => scrollToSection("hero")}
                            className="text-xl bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
                        >
                            Name
                        </button>

                        <div className="hidden md:flex items-center gap-6">
                            {navItems.map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => scrollToSection(item.id)}
                                    className="text-slate-700 hover:text-blue-600 transition-colors"
                                >
                                {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;