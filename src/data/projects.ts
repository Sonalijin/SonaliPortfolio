import EvaImg from '../assets/images/Eva.png';
import HelenDoronImg from '../assets/images/helen-doron.png';
import CuzseAppImg from '../assets/images/cuzse-app.png';
import PmjayImg from '../assets/images/pmjay.png';
import Swipe4winImg from '../assets/images/swipe4win.png';

export const projects = [
  {
    title: 'EVA App',
    description: 'Developed and maintained a highly interactive AI-powered system using React, implementing custom chat and call modules for real-time customer support and engagement.',
    technologies: ['React', 'Redux-Toolkit', 'MUI', 'TypeScript', 'Socket.io'],
    company: 'Blackngreen',
    period: 'Oct 2022 - Present',
    highlights: [
      'Implemented responsive and scalable UI components with React',
      'Integrated WebSocket for real-time communication',
      'Built robust user role and permission management system',
      'Developed digital signature functionality for secure transactions'
    ],
    link: 'https://evainternal.bngrenew.com/eva',
    image: EvaImg
  },
  {
    title: 'PMJAY User Management Portal',
    description: 'Lead Front-End Developer for PMJAY (Pradhan Mantri Jan Arogya Yojana) Portal, enhancing User Experience in National Healthcare System.',
    technologies: ['React', 'Redux', 'TypeScript'],
    company: 'TCS',
    period: 'May 2022 - Sept 2022',
    highlights: [
      'Project Lead for PMJAY Portal Development',
      'Optimized and Scaled Portal for improved User Access',
      'Enhanced Healthcare Service Delivery'
    ],
    link: 'https://ump.pmjay.gov.in/signup',
    image: PmjayImg
  },
  {
    title: 'Cuzse App',
    description: 'Designed and implemented an application for optimizing users\' physical and mental performance using data-driven insights.',
    technologies: ['React', 'Redux', 'TypeScript', 'Socket.io', 'Twilio'],
    company: 'Chimic',
    period: 'April 2021 - May 2022',
    highlights: [
      'Implemented video calling capabilities using Twilio',
      'Built real-time chat functionality with Socket.io',
      'Managed complex state with Redux and Saga'
    ],
    link: 'https://ddzyg3vutpr4b.cloudfront.net/login',
    image: CuzseAppImg
  },
  {
    title: 'Swipe4win Game',
    description: 'Developed a web game with swipe-based quiz features similar to Tinder using React, enhancing user engagement through intuitive gameplay mechanics.',
    technologies: ['React', 'Firebase', 'Styled-Components', 'Node', 'MongoDB', 'Express'],
    company: 'NIIT Ltd',
    period: 'August 2019 - November 2020',
    highlights: [
      'Built interactive game mechanics',
      'Implemented user engagement features',
      'Developed responsive design'
    ],
    link: 'https://swipe4win.bngrenew.com/#/launch',
    image: Swipe4winImg
  },
  {
    title: 'Helen Doron',
    description: 'Developed a web game for preschoolers with comprehensive admin panel for managing game assets and functionalities.',
    technologies: ['React', 'Redux', 'Socket.io', 'TypeScript'],
    company: 'NIIT Ltd',
    period: 'August 2019 - November 2020',
    highlights: [
      'Built admin panel for game management',
      'Implemented asset management system',
      'Created user management system'
    ],
    link: 'https://cocosteam.s3.us-east-2.amazonaws.com/Helen-Doron-Dev/index.html?platform_auth_token=07e3342d1cb85c69994c8f4d617009a7&platform_room_id=289823',
    image: HelenDoronImg
  }
];

