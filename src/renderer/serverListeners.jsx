import state from './state';

// calling IPC exposed from preload script
window.electron.ipcRenderer.on('msg from server', (response) => {
  console.log(`the server said: ${response}!`);
});

window.electron.ipcRenderer.on('send files in folder', (response) => {
  state.files = response;
});
