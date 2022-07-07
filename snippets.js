// https://www.w3schools.com/nodejs/nodejs_filesystem.asp
// ipcMain.on('get files by folder', async (event, arg) => {
//   const path = arg[0];
//   const files = await readdir(path);
//   event.reply('send files in folder', files);
// });

const getFiles = (path) => {
  console.log('fetching');
  window.electron.ipcRenderer.sendMessage('get files by folder', [path]);
};
