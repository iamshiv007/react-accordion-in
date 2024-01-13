import React from 'react';
import { IAccordionContainerProps } from '../@types';
import { AccordionBox } from './AccordionBox';

const AccordionContainer = ({
  experiences,
  theme = 'light',
  direction = 'sideBySide'
}: IAccordionContainerProps) => {
  return (
    <div>
      {experiences.map((expe, i) => {
        return (
          <div key={i}>
            <AccordionBox
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

export default AccordionContainer;
