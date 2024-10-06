import { IProject } from '@/interfaces/IProject';

export const projectsPT: IProject[] = [
  {
    title: "Gamers' Pub (FRONT)",
    description:
      'Meu maior projeto Fullstack pessoal, uma plataforma para criar reviews de jogos utilizando a API do IGBD e um Chatbot de IA usando a API do Google Gemini para obter recomendações de jogos.',
    image: {
      src: '/images/gamers-pub.png',
      alt: 'Captura de tela do Gamers Pub',
    },
    linkPreview: 'https://gamers-pub-xi.vercel.app',
    linkCode: 'https://github.com/Samuka0222/gamers-pub',
    tags: ['Next', 'Front', 'IA'],
  },
  {
    title: "Gamers' Pub (API)",
    description:
      "API serverless para o projeto do Gamers' Pub, esse projeto é criado usando o Serverless Framework V4 utilizando os serviços da AWS.",
    image: {
      src: '/images/gamers-pub-api.png',
      alt: 'Captura de tela do repositório do Gamers Pub',
    },
    linkPreview: 'https://gamers-pub-xi.vercel.app',
    linkCode: 'https://github.com/Samuka0222/gamers-pub-sls-api',
    tags: ['Serverless', 'API', 'Typescript', 'IA'],
  },
  {
    title: 'Excalibur Swordplay',
    description:
      'Uma landing page para o site do Excalibur Swordplay feita com React e Typescript com foco em Animações utilizando a biblioteca Framer-Motio e com o deploy feito através da AWS, além disso é meu primeiro projeto testando o Biome.js para Linting.',
    image: {
      src: '/images/excalibur-swordplay.png',
      alt: 'Captura de tela da Landing Page Excalibur Swordplay',
    },
    linkPreview: 'https://excaliburswordplay.com.br',
    linkCode: 'https://github.com/Samuka0222/excalibur-swordplay',
    tags: ['Landing Page', 'Animações', 'React'],
  },
  {
    title: 'To-do List Serverless API',
    description:
      'Esse é meu primeiro projeto utilizando arquitetura Serverless para a construção de uma API. Utilizando typescript, esse projeto contém Lambdas, Autenticação com AWS Cognito e utiliza DynamoDB como banco de dados.',
    image: {
      src: '/images/todo-list-sls-api.png',
      alt: 'Captura de tela do código do projeto.',
    },
    linkCode: 'https://github.com/Samuka0222/gamers-pub',
    linkPreview: undefined,
    tags: ['Serverless', 'API', 'Typescript'],
  },
];

export const projectsEN: IProject[] = [
  {
    title: 'Gamers Pub (FRONT)',
    description:
      'My biggest personal Fullstack project, a platform for reviewing games using the IGDB API and a AI Chatbot using the Google Gemini API for requesting games recommendations',
    image: {
      src: '/images/gamers-pub.png',
      alt: 'Print from Gamers Pub interface',
    },
    linkPreview: 'https://gamers-pub-xi.vercel.app',
    linkCode: 'https://github.com/Samuka0222/gamers-pub',
    tags: ['Next', 'Front', 'IA'],
  },
  {
    title: "Gamers' Pub (API)",
    description:
      "API serverless para o projeto do Gamers' Pub, esse projeto é criado usando o Serverless Framework V4 utilizando os serviços da AWS.",
    image: {
      src: '/images/gamers-pub-api.png',
      alt: 'Print from the Gamers Pub Serverless API Repo',
    },
    linkPreview: 'https://gamers-pub-xi.vercel.app',
    linkCode: 'https://github.com/Samuka0222/gamers-pub-sls-api',
    tags: ['Serverless', 'API', 'Typescript', 'IA'],
  },
  {
    title: 'Excalibur Swordplay',
    description:
      'A landing page for the Excalibur Swordplay made with React and Typescript with focus on Animations using the library: Framer Motion, and the deploy using AWS, It is also my first project using Biome.js for linting.',
    image: {
      src: '/images/excalibur-swordplay.png',
      alt: 'Print of the Landing Page of Excalibur Swordplay',
    },
    linkPreview: 'https://excaliburswordplay.com.br',
    linkCode: 'https://github.com/Samuka0222/excalibur-swordplay',
    tags: ['Landing Page', 'Animations', 'React'],
  },
  {
    title: 'To-do List Serverless API',
    description:
      'This is my first project using Serverless architecture for building an API. Using TypeScript, this project contains Lambdas, Authentication with AWS Cognito, and uses DynamoDB as a database.',
    image: {
      src: '/images/todo-list-sls-api.png',
      alt: 'Print from the source code of the project.',
    },
    linkCode: 'https://github.com/Samuka0222/gamers-pub',
    linkPreview: undefined,
    tags: ['Serverless', 'API', 'Typescript'],
  },
];
