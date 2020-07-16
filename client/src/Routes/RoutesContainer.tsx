import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 1rem 0;
  width: 100%;
  margin: 0 auto;
  @media (min-width: 800px) {
    width: 80%;
  }
`;

const Content = styled.div`
  width: 100%;
  padding: 0.75rem;
`;

const Container = ({ children }: any) => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Landing</Link>
        </li>
        <li>
          <Link to="/page2">Page2</Link>
        </li>
      </ul>
      <>{children}</>
    </>
  );
};

export default Container;
