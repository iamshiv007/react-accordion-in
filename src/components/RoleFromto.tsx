import React from 'react';
import { Default } from '../utils';

interface IRoleFromto {
  subHeading?: string;
  time?: string;
  theme: string;
}

export const RoleFromto = ({ subHeading, time, theme }: IRoleFromto) => {
  return (
    <div
      className={`${Default.CSS_NAMESPACE}__role-fromto-wrapper ${Default.CSS_NAMESPACE}__role-and-fromto-wrapper-theme--${theme}`}
    >
      <p className={`${Default.CSS_NAMESPACE}__role`}>{subHeading}</p>
      <p>{time}</p>
    </div>
  );
};
