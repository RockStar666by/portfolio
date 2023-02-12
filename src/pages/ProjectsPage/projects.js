import * as images from '../../assets/images/projectPreviews/index.js';

export const projects = [
  {
    id: 1,
    header: 'Portfolio',
    description:
      'Website with my portfolio, CV, contacts and social media. On Contacts Page you can send me a message, using message form.',
    image: images.img1,
    stack: ['React', 'TypeScript', 'Formik'],
    linkGithub: 'https://github.com/RockStar666by/portfolio',
    linkDemo: 'https://a-sauchuk.vercel.app/',
  },
  {
    id: 2,
    header: 'Online Store',
    description: 'E-commerce Online Store with filters and cart',
    image: images.img2,
    stack: ['React', 'Redux', 'Apollo'],
    linkGithub: 'https://github.com/RockStar666by/entry-react-developer-test',
    linkDemo: 'https://react-ecommerce2-phi.vercel.app/',
  },
  {
    id: 3,
    header: 'Currency Info',
    description:
      'Provides information about currency and its dynamics. Has built-in currency converter',
    image: images.img3,
    stack: ['React', 'AntDesign'],
    linkGithub: 'https://github.com/RockStar666by/npc-test',
    linkDemo: 'https://npc-test.vercel.app/',
  },
  {
    id: 4,
    header: 'Animated Mobile App Download Page',
    description:
      'Animated Mobile App page with adaptive design and brief information on app',
    image: images.img4,
    stack: ['React'],
    linkGithub: 'https://github.com/RockStar666by/917-world-test',
    linkDemo: 'https://917-world-test.vercel.app/',
  },
];
