import React from 'react';
import { LocationSvg } from '../icons';
import { Default } from '../utils';

interface ICompanyLocation {
  heading: string;
  location?: string;
}

export const CompanyLocation = ({
  heading,
  location
}: ICompanyLocation) => {
  return (
    <div className={`${Default.CSS_NAMESPACE}__company-location-wrapper`}>
      <p className={`${Default.CSS_NAMESPACE}__company-name`}>{heading}</p>
      {location && (
        <p className={`${Default.CSS_NAMESPACE}__location-wrapper`}>
          <LocationSvg /> {location}
        </p>
      )}
    </div>
  );
};
