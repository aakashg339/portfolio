import portfolioConfig from "../../config/portfolioConfig";

function Footer() {
    const footerSectionData = portfolioConfig.footer;

    return (
        <>
            <footer className="px-6 py-8 bg-slate-900 dark:bg-black text-white text-center transition-colors">
                <p>© {footerSectionData.year} {footerSectionData.name}. Built with React and Tailwind CSS.</p>
            </footer>
        </>
    );
}

export default Footer;