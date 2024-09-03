import React from 'react'
import "./Highlights.css"
import high from "../../Assets/Highlights/highlights.jpg"
import HighlightsData from './HighlightsData';
import { IoCheckmarkCircle } from "react-icons/io5";

const Highlights = () => {

    return (
        <div className='Highlights'>
            <div className='Highlights-main'>
                <div className="highlights-item">
                    <div className="highlights-left">
                        <h2>We deal in products range from leading top world manufacturing companies from IPC SOTECO SPA "VACUUM CLEANER" from Europe.</h2>

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
