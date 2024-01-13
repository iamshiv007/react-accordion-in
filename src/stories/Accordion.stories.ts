import type { Meta, StoryObj } from '@storybook/react';
import { AccordionContainer } from '../../src';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Accordion',
  component: AccordionContainer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof AccordionContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Simple: Story = {
  args: {
    experiences: [
      {
        companyName: 'MILLENNIA AHEAD TECHNOLIOIES',
        location: 'Nagpur, India',
        role: 'REACTJS INTERN',
        fromTo: 'December 2022 - March 2023',
        details:
          'During this internship, we worked for a startup company to build an online salon appointment booking platform. In my first internship, I learned about version control tools like Git and GitHub. I spent a lot of time improving my skills in building UI and UX to advance my proficiency in CSS styling and JavaScript logic.'
      },
      {
        companyName: 'MILLENNIA AHEAD TECHNOLIOIES',
        location: 'Nagpur, India',
        role: 'REACTJS INTERN',
        fromTo: 'December 2022 - March 2023',
        details:
          'During this internship, we worked for a startup company to build an online salon appointment booking platform. In my first internship, I learned about version control tools like Git and GitHub. I spent a lot of time improving my skills in building UI and UX to advance my proficiency in CSS styling and JavaScript logic.'
      }
    ],
    theme: 'dark',
    direction: 'left'
  }
};
