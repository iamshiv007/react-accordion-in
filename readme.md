# react-accordion-in

![React Accordion](https://res.cloudinary.com/dqfrtazgi/image/upload/v1705176666/Untitled_video_-_Made_with_Clipchamp_gckjnm.gif 'React Accordion')

✨ react-accordion-in is my first npm package to use all developers around world

## Installation

```
$ npm install --save react-accordion-in
```

## Usage

```js
import React from 'react';
import { AccordionContainer } from 'react-accordion-in';

const Example = () => {
  const accordionData = [
    {
      heading: 'MILLENNIA AHEAD TECHNOLIOIES',
      subHeading: 'REACTJS INTERN',
      location: 'Nagpur, India',
      time: 'December 2022 - March 2023',
      details:
        'During this internship, we worked for a startup company to build an online salon appointment booking platform. In my first internship, I learned about version control tools like Git and GitHub. I spent a lot of time improving my skills in building UI and UX to advance my proficiency in CSS styling and JavaScript logic.'
    }
  ];
  return (
    <div>
      <AccordionContainer
        accordionData={accordionData}
        theme="light"
        direction="center"
      />
    </div>
  );
};
```

## API

| props         | type                                                                                                         | default    | description                  |
| ------------- | ------------------------------------------------------------------------------------------------------------ | ---------- | ---------------------------- |
| theme         | string                                                                                                       | light      | light/dark                   |
| direction     | string                                                                                                       | sideBySide | left/right/center/sideBySide |
| accordionData | { heading: string, subHeading?: string, location?: string, time?:string, details:string, direction?:string } | {}         | use your data                |

## Contribute

Show your ❤️ and support by giving a ⭐. Any suggestions are welcome!.
