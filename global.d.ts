import { UpdateInfo } from 'electron-updater'

declare global {
  interface Window {
    $ipc: IIpcInstance | undefined
  }

  interface IAppInfo {
    appVersion: string
  }

  interface IIpcInstance {
    getAppInfo(): Promise<IAppInfo>
    checkAndAutoUpdateApp(): Promise<UpdateInfo>
  }
}

export {}
