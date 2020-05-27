import { BrowserWindow, app, globalShortcut } from 'electron';

const GlobalHotKey = [
  {
    key: 'f12',
    active() {
      const MainWindow: BrowserWindow | null = Reflect.get(global, 'MainWindow');
      if (!MainWindow) return;
      MainWindow.webContents.openDevTools();
    }
  }
];

export const registerGlobalHotKey = () => {
  GlobalHotKey.forEach((item) => {
    globalShortcut.register(item.key, item.active);
  });
};

export const unregisterGlobalHotKey = () => {
  globalShortcut.unregisterAll();
};

app.on('will-quit', () => {
  unregisterGlobalHotKey();
});

app.on('ready', () => {
  registerGlobalHotKey();
});
