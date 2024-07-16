import { IProject } from '@/interfaces/IProject';

export const projectsPT: IProject[] = [
  {
    title: 'Gamers Pub',
    description:
      'Esse projeto tem duas partes, a primeira é um Chatbot que irá recomendar jogos de acordo com o que o usuário pedir. E a segunda parte é um sistema de avaliação de jogos utilizando a API IGDB de games.',
    image: {
      src: '/images/gamers-pub.png',
      alt: 'Captura de tela do Gamers Pub',
    },
    linkPreview: 'https://gamers-pub-xi.vercel.app',
    linkCode: 'https://github.com/Samuka0222/gamers-pub',
    tags: ['Next', 'Front', 'IA'],
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
    title: 'Gamers Pub',
    description:
      'This project has two parts: the first is a Chatbot that will recommend games according to what the user requests. The second part is a game evaluation system using the IGDB game API.',
    image: {
      src: '/images/gamers-pub.png',
      alt: 'Print from Gamers Pub interface',
    },
    linkPreview: 'https://gamers-pub-xi.vercel.app',
    linkCode: 'https://github.com/Samuka0222/gamers-pub',
    tags: ['Next', 'Front', 'IA'],
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
