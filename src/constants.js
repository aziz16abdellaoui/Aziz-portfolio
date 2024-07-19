// src/constants.js

import portfolioImage from './assets/portfolio.png';
import appointmentManagerImage from './assets/appointment-manager.png';
import f1CarRacingImage from './assets/f1-car-racing.png';
import loginPageImage from './assets/login-page.png';
import realTimeObjectDetectionImage from './assets/real-time-object-detection.png';
import nategImage from './assets/nateg.png';
import sndpImage from './assets/sndp.png';

export const services = [
    {
        title: "Technology Enthusiast",
        icon: 'https://csgeeek.github.io/web.png',
    },
    {
        title: "AI & machin learning ",
        icon: 'https://csgeeek.github.io/web.png',
    },
    {
        title: "Graphic Designer",
        icon: 'https://csgeeek.github.io/web.png',
    },
];

export const name = 'Mohamed Aziz Abdellaoui';

export const experiences = [
    {
        company: 'North American Tunisian Engineers Group (NATEG)',
        role: 'Vice-président',
        duration: 'Jan 2023 - Jan 2024',
        logo: nategImage,
        points: [
            'Leadership, Reliability and +14 skills',
        ],
        url: 'https://www.linkedin.com/company/north-american-tunisian-engineers-group-nateg/about/',
    },
    {
        company: 'AGIL TUNISIE',
        role: 'direction des moyenne de paiement',
        duration: 'Jul 2023 - Jul 2023',
        logo: sndpImage,
        points: [
            'Reliability, C# and +4 skills',
        ],
        url: 'https://www.linkedin.com/company/agil-tunisie/about/',
    },
];

export const projects = [
  {
    title: 'Portfolio',
    description: 'A personal portfolio website showcasing my work and skills.',
    image: portfolioImage,
    git: 'https://github.com/aziz16abdellaoui/aziz16abdellaoui',
    technologies: ['React', 'CSS', 'JavaScript'],
  },
  {
    title: 'Appointment Manager',
    description: 'The Appointment Manager is a user-friendly application designed to streamline the process of scheduling and managing appointments between doctors and patients. It provides a convenient platform for...',
    image: appointmentManagerImage,
    git: 'https://github.com/aziz16abdellaoui/Appointment-Manager',
    technologies: ['Python'],
  },
  {
    title: 'F1 Car Racing',
    description: 'A racing game built with Unity.',
    image: f1CarRacingImage,
    git: 'https://github.com/aziz16abdellaoui/F1-Car-Racing-By-Med-Aziz-Abdellaoui',
    technologies: ['Python'],
  },
  {
    title: 'Login Page',
    description: 'A login page built with Jupyter Notebook.',
    image: loginPageImage,
    git: 'https://github.com/aziz16abdellaoui/Login-page',
    technologies: ['Jupyter Notebook'],
  },
  {
    title: 'Real-Time Object Detection',
    description: 'Real-Time Object Detection with OpenCV and SSD MobileNet.',
    image: realTimeObjectDetectionImage,
    git: 'https://github.com/aziz16abdellaoui/Real-Time-Object-Detection-with-OpenCV-and-SSD-MobileNet',
    technologies: ['Python'],
  },
];

export const EMAIL_JS_SERVICE_ID = 'service_90wb9t5';
export const EMAIL_JS_TEMPLATE_ID = 'template_8l87rew';
export const EMAIL_JS_PUBLIC_KEY = 'pHPjc9RGGkF66r86N';
