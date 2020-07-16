import React from 'react';
import { Button, Link } from '@chakra-ui/core';
import { Link as ReactLink } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      {/* @ts-ignore */}
      <Link as={ReactLink} to="/upload">
        <Button>Upload</Button>
      </Link>
      {/* @ts-ignore */}
      <Link as={ReactLink} to="/grab">
        <Button>Grab</Button>
      </Link>
    </div>
  );
};

export default Landing;
