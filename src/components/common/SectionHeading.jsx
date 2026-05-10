function SectionHeading({headingText}) {
    return (
        <>
            <h2 className="text-3xl mb-12 text-slate-900 dark:text-white border-l-4 border-blue-600 pl-4">
                { headingText }
            </h2>
        </>
    );
}

export default SectionHeading