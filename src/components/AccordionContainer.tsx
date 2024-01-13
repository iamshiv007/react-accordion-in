import React from 'react';
import { IAccordionContainerProps } from '../@types';
import { AccordionBox } from './AccordionBox';

const AccordionContainer = ({
  accordionData,
  theme = 'light',
  direction = 'sideBySide'
}: IAccordionContainerProps) => {
  return (
    <div>
      {accordionData.map((data, i) => {
        return (
          <div key={i}>
            <AccordionBox
              direction={direction}
              {...data}
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
