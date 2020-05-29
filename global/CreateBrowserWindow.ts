import { BrowserWindow, ipcMain, nativeImage } from 'electron';

import XeaConfig from '~/root.config';

const pkg = require('~/package.json');

const isPro = process.env.NODE_ENV === 'production';

export const create = function (port: number): BrowserWindow {
  const href = `http://localhost:${port}/`;
  const browserWindow = new BrowserWindow({ ...pkg.window, icon: nativeImage.createFromPath('/favicon.ico') });
  browserWindow.loadURL(href);
  return browserWindow;
};

ipcMain.once('openWindow', () => {
  const port = isPro ? XeaConfig.port.serve : XeaConfig.port.views;
  Reflect.set(global, 'MainWindow', create(port));
});
