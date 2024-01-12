import React from 'react';

export interface AccordionProps {
  title: string;
}

const index = (props: AccordionProps) => {
  return <div>{props.title}</div>;
};

export default index;
