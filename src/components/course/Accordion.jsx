import React, { useState } from 'react'

export default function Accordion({ index, title, content }) {
    const [accordion, setAccordion] = useState(false)

    const handleAccordion = () => {
        setAccordion(!accordion)
    }

    return (
        <div className="accordion">
            <div className="accordion__title" onClick={handleAccordion}>
                <div className="date">Ngày {index + 1}</div>
                <h3>{title}</h3>
            </div>
            <div className="content" style={{ display: accordion && 'block' }}>
                {content}
            </div>
        </div>
    )
}
