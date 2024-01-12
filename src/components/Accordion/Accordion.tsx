import React from 'react';
import './Accordion.css';

export interface AccordionProps {
  title: string;
}

const index = (props: AccordionProps) => {
  return <div>{props.title}</div>;
};

export default index;
