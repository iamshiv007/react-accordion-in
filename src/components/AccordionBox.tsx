import React, { FC, ReactNode, useState } from 'react';
import { Default } from '../utils';
import { IAccordionBoxProps } from '../@types';
import { CompanyLocation } from './CompanyLocation';
import { RoleFromto } from './RoleFromto';
import { Details } from './Details';
import { ArrowBtn } from './ArrowBtn';

export const AccordionBox: FC<IAccordionBoxProps> = ({
  heading,
  subHeading,
  location,
  time,
  details,
  even,
  theme = 'light',
  direction
}) => {
  const [selectedDetails, setSelectedDetails] = useState<string | ReactNode>(
    ''
  );

  return (
    <div
      className={`${Default.CSS_NAMESPACE}__main-container
      ${
        direction === 'sideBySide'
          ? even
            ? `${Default.CSS_NAMESPACE}__main-container-flex--start`
            : `${Default.CSS_NAMESPACE}__main-container-flex--end`
          : ''
      }
      ${
        direction === 'left'
          ? `${Default.CSS_NAMESPACE}__main-container-flex--start`
          : ''
      }
      ${
        direction === 'right'
          ? `${Default.CSS_NAMESPACE}__main-container-flex--end`
          : ''
      } 
      ${
        direction === 'center'
          ? `${Default.CSS_NAMESPACE}__main-container-flex--center`
          : ''
      } 
          ${Default.CSS_NAMESPACE}__main-container-theme--${theme}`}
      key="Good Tech MIND"
    >
      <div
        className={`${Default.CSS_NAMESPACE}__container ${Default.CSS_NAMESPACE}__container-theme--${theme}`}
      >
        <CompanyLocation heading={heading} location={location} />

        <RoleFromto subHeading={subHeading} time={time} theme={theme} />

        <Details details={details} selectedDetails={selectedDetails} />
      </div>

      <ArrowBtn
        details={details}
        selectedDetails={selectedDetails}
        theme={theme}
        setSelectedDetails={setSelectedDetails}
      />
    </div>
  );
};
