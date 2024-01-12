import React from 'react';
import { render, screen } from '@testing-library/react';

import Accordion from './Accordion';

describe('Accordion', () => {
  test('test Accordion component', () => {
    render(<Accordion title="Accordion Text" />);
  });
});
