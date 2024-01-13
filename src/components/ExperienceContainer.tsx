import React from 'react';
import { IExperienceContainerProps } from '../@types';
import { ExperienceBox } from './ExperienceBox';

const ExperienceContainer = ({
  experiences,
  theme = 'light',
  direction = 'sideBySide'
}: IExperienceContainerProps) => {
  return (
    <div>
      {experiences.map((expe, i) => {
        return (
          <div key={i}>
            <ExperienceBox
              direction={direction}
              {...expe}
              theme={theme}
              even={i % 2 === 0}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceContainer;
