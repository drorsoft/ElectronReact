import { ipcMain } from 'electron';
import { readdir } from 'fs/promises';

//  this is just a nice example to see how the server responds to the UI
ipcMain.on('msg to server', async (event, arg) => {
  event.reply('msg from server', 'hey duuuuude');
});

ipcMain.on('get files by folder', async (event, arg) => {
  const path = arg[0];
  const files = await readdir(path);

  event.reply('send files in folder', files);
});
