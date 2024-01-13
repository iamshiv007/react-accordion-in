import React from 'react';
import { Default } from '../utils';

interface IRoleFromto {
  role?: string;
  fromTo?: string;
  theme: string;
}

export const RoleFromto = ({ role, fromTo, theme }: IRoleFromto) => {
  return (
    <div
      className={`${Default.CSS_NAMESPACE}__role-fromto-wrapper ${Default.CSS_NAMESPACE}__role-and-fromto-wrapper-theme--${theme}`}
    >
      <p className={`${Default.CSS_NAMESPACE}__role`}>{role}</p>
      <p>{fromTo}</p>
    </div>
  );
};
