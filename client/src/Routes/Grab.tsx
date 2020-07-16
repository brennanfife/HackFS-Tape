import React from 'react';
import Container from './RoutesContainer';
import { Button } from '@chakra-ui/core';
import { useHistory } from 'react-router-dom';

export default function Grab() {
  let history = useHistory();
  return (
    <>
      <Button onClick={() => history.goBack()}>Back</Button>
    </>
  );
}
