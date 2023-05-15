import React from 'react'
import CV from '../../assets/My CV.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Chat</a>
        </div>
    )
}

export default CTA //this line indicates that this component can be imported and used everywhere in our application.
