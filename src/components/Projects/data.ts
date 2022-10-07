import { Project, ProjectType } from './index.d';

export const projects: Project[] = [
  {
    name: 'Portfolio',
    description: "This Site",
    type: ProjectType.WEB,
    picture: 'SITE.jpg',
    repoLink: '',
  },
  {
    name: 'Telegram Bot',
    description: 'GAME BOT',
    type: ProjectType.BOT,
    picture: 'TGBOT.jpg',
    repoLink: 'https://t.me/TGTakoBot',
  },
  {
    name: 'VK Bot',
    description: 'GAME BOT',
    type: ProjectType.BOT,
    picture: 'VKBOT.jpg',
    repoLink: 'https://vk.com/bottako',
  }
];
