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
];
