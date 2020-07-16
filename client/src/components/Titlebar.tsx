import React, { useState } from 'react';
import styled from '@emotion/styled';

const DragRegion = styled.div`
  top: 0;
  left: 0;
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  -webkit-app-region: drag;
`;

const Resizer = styled.div`
  -webkit-app-region: no-drag;
  position: absolute;
  top: 0;
  width: 100%;
  height: 20%;
`;

const TitleBar = styled.div<{ active: boolean }>`
  top: 0px;
  width: 100%;
  height: 30px;
  background-color: ${(props) => (props.active ? '#2a2a2a' : '#212220')};
  display: flex;
  font-family: 'Open Sans', sans-serif;
  position: relative;
`;

const SectionWindowControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90px;
  -webkit-app-region: no-drag;
`;

const SectionWindowControlBox = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.05s ease-in;
`;

const Circle1 = styled.circle<{ active: any }>`
  fill: ${(props) => (props.active ? '#525252' : '#3f3f3f')};
  transition: all 0.05s ease-in;
  &:hover {
    fill: ${(props) => (props.active ? '#f8b92b' : '#f8b92b')};
    transition: all 0.05s ease-in;
  }
`;

const Circle2 = styled.circle<{ active: any }>`
  fill: ${(props) => (props.active ? '#525252' : '#3f3f3f')};
  transition: all 0.05s ease-in;
  &:hover {
    fill: ${(props) => (props.active ? '#2bc73b' : '#2bc73b')};
    transition: all 0.05s ease-in;
  }
`;

const Circle3 = styled.circle<{ active: any }>`
  fill: ${(props) => (props.active ? '#525252' : '#3f3f3f')};
  transition: all 0.05s ease-in;
  &:hover {
    fill: ${(props) => (props.active ? '#2bc73b' : '#2bc73b')};
    transition: all 0.05s ease-in;
  }
`;

const Circle4 = styled.circle<{ active: any }>`
  fill: ${(props) => (props.active ? '#525252' : '#3f3f3f')};
  transition: all 0.05s ease-in;
  &:hover {
    fill: ${(props) => (props.active ? '#f35d58' : '#f35d58')};
    transition: all 0.05s ease-in;
  }
`;

const ipcRenderer = window.require('electron').ipcRenderer;

export default function Titlebar() {
  const [isActive, setIsActive] = useState<any>();
  const [isMaximized, setIsMaximized] = useState<any>();

  ipcRenderer.on('focused', () => setIsActive(true));
  ipcRenderer.on('blurred', () => setIsActive(false));
  ipcRenderer.on('maximized', () => setIsMaximized(true));
  ipcRenderer.on('unmaximized', () => setIsMaximized(false));

  const minimizeHandler = () => ipcRenderer.invoke('minimize-event');
  const maximizeHandler = () => ipcRenderer.invoke('maximize-event');
  const unmaximizeHandler = () => ipcRenderer.invoke('unmaximize-event');
  const closeHandler = () => ipcRenderer.invoke('close-event');
  return (
    <div>
      <TitleBar active={isActive}>
        <DragRegion />
        <SectionWindowControls>
          <SectionWindowControlBox>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
            >
              <Circle4
                onClick={closeHandler}
                active={isActive}
                cx="11.6"
                cy="11.6"
                r="11.4"
              />
            </svg>
          </SectionWindowControlBox>

          <SectionWindowControlBox>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
            >
              <Circle1
                onClick={minimizeHandler}
                active={isActive}
                cx="11.6"
                cy="11.6"
                r="11.4"
              />
            </svg>
          </SectionWindowControlBox>
          {isMaximized ? (
            <SectionWindowControlBox>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
              >
                <Circle2
                  onClick={unmaximizeHandler}
                  active={isActive}
                  cx="11.6"
                  cy="11.6"
                  r="11.4"
                />
              </svg>
            </SectionWindowControlBox>
          ) : (
            <SectionWindowControlBox>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
              >
                <Circle3
                  onClick={maximizeHandler}
                  active={isActive}
                  cx="11.6"
                  cy="11.6"
                  r="11.4"
                />
              </svg>
            </SectionWindowControlBox>
          )}
        </SectionWindowControls>
        <Resizer style={isMaximized ? { display: 'none' } : {}} />
      </TitleBar>
    </div>
  );
}
