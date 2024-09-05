import React from 'react'
import "./Highlights.css"
import high from "../../Assets/Highlights/highlights.png"
import HighlightsData from './HighlightsData';
import { IoCheckmarkCircle } from "react-icons/io5";

const Highlights = () => {

    return (
        <div className='Highlights'>
            <div className='Highlights-main'>
                <div className="highlights-item">
                    <div className="highlights-left">
                        <h2>Our Auto Scrubber dryers have high contact pressure and scrubbers which can clean, strip and polish both uneven and smooth floors or shampoo carpets.</h2>

                    </div>
                    <div className="highlights-right">
                        <img src={high} alt="DLF Andheri Mumbai" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Highlights
