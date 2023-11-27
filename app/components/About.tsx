import React from 'react'
import IntroDuce from './IntroDuce'
import HeaderNav from './HeaderNav'

const About = () => {
  return (
    <div>
        <IntroDuce/>
        <section className='text-center my-16 '>
            <>
              <h3 className='uppercase text-gray-500 font-semibold leading-4'>
                INTRODUCE
              </h3>
              <h2 className='text-primary font-bold text-4xl'>ABOUT US</h2>
            </>
        </section>
    </div>
  )
}

export default About