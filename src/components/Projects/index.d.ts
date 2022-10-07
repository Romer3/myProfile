interface IVariants {
  hidden: {
    opacity: number;
    y: number;
  };
  visible: {
    opacity: number;
    y: number;
  };
  startFade: {
    opacity: number;
  };
  endFade: {
    opacity: number;
  };
}

export interface IProjectCard {
  variants: Variants;
  name: string;
  description: string;
  type: 'Website' | 'Bot'| string;
  picture: string;
  repoLink: string;
  isFirstRender: boolean;
}

export enum ProjectType {
  WEB = 'Website',
  BOT = 'Bot'
}

export interface Project {
  name: string;
  description: string;
  type: ProjectType;
  picture: string;
  repoLink: string;
}
