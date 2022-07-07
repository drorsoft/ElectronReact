const sayHello = () =>
  window.electron.ipcRenderer.sendMessage('msg to backend', ['hey, server!!!']);

export { sayHello };
