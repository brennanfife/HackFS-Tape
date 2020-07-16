import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Titlebar from './components/Titlebar';

import Upload from './Routes/Upload';
import Grab from './Routes/Grab';
import Landing from './Routes/Landing';
import styled from '@emotion/styled';
// import './App.css';

// body {
//   height: 100%;
//   width: 100%;
//   margin: 0;
//   padding: 0;
//   overflow: hidden;
//   font-size: 11px;
//   user-select: none;
//   color: white;
// }

const Wrapper = styled.div`
  background-color: #151515;
  height: 100vh;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  user-select: none;
  color: white;
`;

const App = () => {
  return (
    <Wrapper>
      <Titlebar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/upload" component={Upload} />
        <Route exact path="/grab" component={Grab} />
      </Switch>
    </Wrapper>
  );
};

export default App;
