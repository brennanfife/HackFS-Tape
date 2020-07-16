import { app, BrowserWindow, ipcMain } from 'electron';
import * as isDev from 'electron-is-dev';
import * as path from 'path';
require('electron-reload');

let mainWindow: BrowserWindow | null = null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    backgroundColor: '#2A2A2A',
    width: 800,
    height: 600,
    minWidth: 200,
    minHeight: 400,
    frame: false,
    webPreferences: { nodeIntegration: true },
  });

  mainWindow.setMenu(null);

  if (isDev) mainWindow.loadURL('http://localhost:3000');
  else mainWindow.loadFile('build/index.html');

  // Hot Reloading

  // if (isDev) mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => (mainWindow = null));

  mainWindow.on('maximize', () => mainWindow!.webContents.send('maximized'));

  mainWindow.on('unmaximize', () =>
    mainWindow!.webContents.send('unmaximized')
  );
};

ipcMain.handle('minimize-event', () => mainWindow!.minimize());

ipcMain.handle('maximize-event', () => mainWindow!.maximize());

ipcMain.handle('unmaximize-event', () => mainWindow!.unmaximize());

ipcMain.handle('close-event', () => app.quit());

app.on('browser-window-focus', () => mainWindow!.webContents.send('focused'));

app.on('browser-window-blur', () => mainWindow!.webContents.send('blurred'));

// app.on('ready', createWindow);

app.on('ready', async () => {
  createWindow();

  // try {
  //   const node = await IPFS.create();
  //   const id = await node.id();
  //   console.log(id);
  // } catch (error) {
  //   console.error(error);
  // }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (mainWindow === null) createWindow();
});
