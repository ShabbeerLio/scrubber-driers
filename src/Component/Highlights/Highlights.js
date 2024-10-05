import React from 'react'
import "./Highlights.css"
import high from "../../Assets/Highlights/highlights.png"

const Highlights = () => {

    return (
        <div className='Highlights'>
            <div className='Highlights-main'>
                <div className="highlights-item">
                    <div className="highlights-left">
                        <h2>Scrubber driers clean and dry in a single pass and leave behind clean and dirty surfaces . These machines have powerfull cleaning performance with large capacity fresh water and dirty water tanks.</h2>
                    </div>
                    <div className="highlights-right">
                        <img src={high} alt=" " />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Highlights
