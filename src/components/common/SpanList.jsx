function SpanList({ texts, className = "" }) {
    return (
        <>
            {
                texts.map((text, idx) => (
                    <p key={idx} className={className}>
                        {text}
                    </p>
                ))
            }
        </>
    );
}

export default SpanList;