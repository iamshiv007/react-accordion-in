import { ReactNode } from 'react';

export type ITheme = 'light' | 'dark';
export type ISize = 'large' | 'small' | 'medium';
export type IDirection = 'left' | 'right' | 'center' | 'sideBySide';

export interface IExperienceBoxProps {
  companyName: string;
  location?: string;
  role?: string;
  fromTo?: string;
  details: string | ReactNode;
  theme?: ITheme;
  even?: boolean;
  size?: ISize;
  direction?: IDirection;
}

export interface IExperienceContainerProps {
  experiences: IExperienceBoxProps[];
  theme?: ITheme;
  size?: ISize;
  direction?: IDirection;
}
