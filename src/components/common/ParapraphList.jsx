function ParapraphList({ parapraphs, className = "" }) {
    return (
        <>
            {
                parapraphs.map((paragraph, idx) => (
                    <p key={idx} className={className}>
                        {paragraph}
                    </p>
                ))
            }
        </>
    );
}

export default ParapraphList;