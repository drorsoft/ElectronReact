import React from 'react';
import styled from 'styled-components';
import { useSnapshot } from 'valtio';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './serverListeners';
import folder from './folder.png';

const pathByPlatform = window.navigator.platform === 'Win32' ? 'c:/' : '/';

const Hello = () => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1 style={{ textAlign: 'center' }}>Drorsoft Electron File Explorer!</h1>
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
