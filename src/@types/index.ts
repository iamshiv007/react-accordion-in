import { ReactNode } from 'react';

export type ITheme = 'light' | 'dark';
export type ISize = 'large' | 'small' | 'medium';
export type IDirection = 'left' | 'right' | 'center' | 'sideBySide';

export interface IAccordionBoxProps {
  heading: string;
  subHeading?: string;
  location?: string;
  time?: string;
  details: string | ReactNode;
  theme?: ITheme;
  even?: boolean;
  size?: ISize;
  direction?: IDirection;
}

export interface IAccordionContainerProps {
  accordionData: IAccordionBoxProps[];
  theme?: ITheme;
  size?: ISize;
  direction?: IDirection;
}
