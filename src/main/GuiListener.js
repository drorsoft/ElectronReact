import { ipcMain } from 'electron';

//  this is just a nice example to see how the server responds to the UI
ipcMain.on('msg to backend', async (event, arg) => {
  event.reply('msg from backend', 'Hey Front!');
});
