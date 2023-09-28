import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('$ipc', {
  getAppInfo: () => ipcRenderer.invoke('getAppInfo'),
  checkAndAutoUpdateApp: () => ipcRenderer.invoke('checkAndAutoUpdateApp'),
} as IIpcInstance)
