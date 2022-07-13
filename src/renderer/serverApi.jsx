const sendMsg = window.electron.ipcRenderer.sendMessage;

const sayHello = () => sendMsg('msg to server', ['hey, server!!!']);

const getFiles = (path) => {
  console.log('fetching');
  window.electron.ipcRenderer.sendMessage('get files by folder', [path]);
};

export { sayHello, getFiles };
