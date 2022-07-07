import state from './state';

// calling IPC exposed from preload script
window.electron.ipcRenderer.on('msg from backend', (response) => {
  console.log(`the backend said: ${response}!`);
});
