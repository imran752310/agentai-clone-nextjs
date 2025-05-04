import React from 'react';

interface HeadingProps {
  heading: string;
}

const Heading = ({ heading }: HeadingProps) => {
  return (
    <div className="text-center font-bold text-3xl pb-10">
      {heading}
    </div>
  );
};

export default Heading;
