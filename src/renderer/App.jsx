/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import styled from 'styled-components';
import { useSnapshot } from 'valtio';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { sayHello, getFiles } from './serverApi';
import './serverListeners';
import folder from './folder.png';
import state from './state';

const pathByPlatform = window.navigator.platform === 'Win32' ? 'c:/' : '/';

const Hello = () => {
  const snapshot = useSnapshot(state);
  const [path, setPath] = React.useState(pathByPlatform);
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1 style={{ textAlign: 'center' }}>Drorsoft Electron File Explorer!</h1>
      <Flex>
        {' '}
        <div>
          {' '}
          <button style={{ marginBottom: 12 }} type="button" onClick={sayHello}>
            Say Hello To The Nice Server!
          </button>
        </div>
        <div style={{ marginBottom: 12 }}>
          {' '}
          <button type="button" onClick={() => getFiles(path)}>
            Give Me Files!
          </button>
        </div>
        <div style={{ marginBottom: 12 }}>
          {/* 👩‍🔬Mission👩‍🔬 - Get back to root directory (linux\mac or windows) */}
          <button type="button">Get me back home🏡</button>
        </div>
      </Flex>

      <Flex>
        {/* Mission - sort files by size */}
        {/* Mission - sort files by name (a-z) */}
        {snapshot.files.map((file) => {
          return (
            <File
              onDoubleClick={() => {
                // 👩‍🔬MISSION👩‍🔬: get the files inside the folder on double click
                // think about that you need to save the current PATH you are in
                // to ||Explore|| other directory later on..!
              }}
            >
              {' '}
              <Folder src={folder} alt="folder" /> <br />
              <div style={{ margin: 'auto' }}>{file}</div>
            </File>
          );
        })}
      </Flex>

      <Fixed style={{ bottom: 24, top: 'auto', left: 'auto', right: 24 }}>
        {/* 👩‍🔬Mission👩‍🔬 - do a text filter, to search the current folder by name */}
        <h2>search files</h2>
        <input type="text" />
      </Fixed>
      <Fixed>
        {' '}
        <h3> Size in this folder:</h3>
        {/* 👩‍🔬Mission👩‍🔬: REDUCE the size of all the files in the current directory in MB */}
        {/* Maybe this can help...?   https://stackoverflow.com/questions/42363140/how-to-find-the-size-of-the-file-in-node-js */}
        {/* JS Reduce - https://www.w3schools.com/jsref/jsref_reduce.asp */}
      </Fixed>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}

const Fixed = styled.div`
  position: fixed;
  top: 12px;
  left: 12px;
`;

const File = styled.div`
  text-align: center;
  width: 12%;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.02);
  }
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

const Folder = styled.img`
  transition: all 0.8s;
  margin: auto;
  width: 40px;
  cursor: pointer;
`;
