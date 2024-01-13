import React, { ReactNode } from 'react';
import { Default } from '../utils';

interface IDetails {
  details: string | ReactNode;
  selectedDetails: string | ReactNode;
}

export const Details = ({ details, selectedDetails }: IDetails) => {
  return (
    <p
      className={`${Default.CSS_NAMESPACE}__details ${
        details === selectedDetails
          ? `${Default.CSS_NAMESPACE}__details--expand`
          : `${Default.CSS_NAMESPACE}__details--collapse`
      }`}
    >
      {details}
    </p>
  );
};
