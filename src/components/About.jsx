import React from 'react';
import { services } from '../constants';
import Footer from './Footer';
import ServiceCard from './ServiceCard'; // Make sure this path is correct
import ButtonLink from './ButtonLink'; // Make sure this path is correct

const About = () => {
  return (
    <div>
      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>
              👨‍💻 Hi, I'm Mohamed Aziz Abdellaoui, a highly motivated and ambitious LTIC student. I possess strong problem-solving skills, a keen ability to learn quickly, and a talent for inspiring others. I am committed to making a positive impact in the field of IoT, and I am eager to take on new challenges to achieve success in my academic and professional career.
              <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/abdellaoui-mouhamed-aziz/' target='_blank' rel='noopener noreferrer'> LinkedIn</a>
            </p>
            <ButtonLink
              url='https://drive.google.com/drive/folders/1Zuf9KL8W81RaGTqZ0VD_rljxtZYh9VlZ?usp=sharing'
              text='View Resume →'
              padding='p-3'
            />
          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;
