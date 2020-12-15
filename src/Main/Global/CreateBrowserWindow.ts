/**
 * @Message nativeImage.createFromPath png 或者 jpg
 */

import { BrowserWindow, IpcMainEvent, app, dialog, ipcMain, nativeImage } from 'electron';

import Package from '~/package.json';

ipcMain.once('CreateBrowserWindow', (event: IpcMainEvent & { href: string }) => {
  if (!event.href || typeof event.href !== 'string') {
    dialog.showErrorBox('创建新窗口错误', `新窗口地址不合法、 ${event.href}`);
    return;
  }
  const icon = nativeImage.createFromPath($$.joinPathBasedOnThePublic('assets/favicon/favicon.png'));
  const NewBrowserWindowOptions = { ...Package.window, icon };
  const _BrowserWindow = new BrowserWindow(NewBrowserWindowOptions);
  _BrowserWindow.loadURL(event.href);
  Reflect.set(global, 'CreateBrowserWindow', _BrowserWindow);
  /**
   * @platform darwin Mac 平台关闭按钮不退出
   * @Message 创建窗口后监听窗口关闭，区分平台
   * 关闭窗口事件，如果是quit退出，则清除全局主窗口缓存实例， 否则隐藏窗口
   */
  if (process.platform === 'darwin' || process.platform === 'linux') {
    Reflect.set(global, 'willQuitApp', false);
    (Reflect.get(global, 'CreateBrowserWindow') as BrowserWindow).on('close', (e) => {
      if (Reflect.get(global, 'willQuitApp')) {
        Reflect.deleteProperty(global, 'CreateBrowserWindow');
      } else {
        e.preventDefault();
        (Reflect.get(global, 'CreateBrowserWindow') as BrowserWindow).hide();
      }
    });
    app.on('activate', () => (Reflect.get(global, 'CreateBrowserWindow') as BrowserWindow).show());

    app.on('before-quit', () => Reflect.set(global, 'willQuitApp', true));
  }
  /**
   * @platform win32 平台关闭按钮不退出，系统托盘
   * @Message 创建窗口后监听窗口关闭，区分平台
   * 关闭窗口事件，如果是quit退出，则清除全局主窗口缓存实例， 否则隐藏窗口
   */
  // if (process.platform === 'win32') {}
});
