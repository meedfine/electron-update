import { App, BrowserWindow, IpcMain } from 'electron'
import { Logger, UpdateInfo, autoUpdater } from 'electron-updater'
import Log from 'electron-log'

autoUpdater.logger = Log
;(autoUpdater.logger as any).transports.file.level = 'info'
;(autoUpdater.logger as Logger).info('App starting...')

interface IInitParam {
  app: App
  win: BrowserWindow
  ipcMain: IpcMain
}

export function initUpdate(param: IInitParam) {
  const { ipcMain } = param
  ipcMain.handle('getAppInfo', () => getAppInfo(param))
  ipcMain.handle('checkAndAutoUpdateApp', () => checkAndAutoUpdateApp())
}

function getAppInfo(param: IInitParam): IAppInfo {
  const { app } = param
  return {
    appVersion: app.getVersion(),
  }
}

function checkAndAutoUpdateApp(): Promise<UpdateInfo | undefined> {
  return autoUpdater.checkForUpdatesAndNotify().then((res) => res?.updateInfo)
}
