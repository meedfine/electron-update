<template>
  <div class="mt4">
    <button class="updateBtn border-none px4 py2" @click="appUpdate">检查并全量更新</button>
    <p v-if="appInfo" class="mt2">线上版本：{{ appInfo?.appVersion }}</p>
    <p v-if="hasNewUpdate" class="mt2">将在软件退出后自动安装</p>
  </div>
</template>

<script lang="ts" setup>
import { UpdateInfo } from 'electron-updater'

let appInfo = ref<IAppInfo>()
let updateInfo = ref<UpdateInfo>()

const hasNewUpdate = computed(() => {
  return updateInfo.value && appInfo.value && updateInfo.value?.version > appInfo.value?.appVersion
})

const appUpdate = async () => {
  updateInfo.value = await window.$ipc?.checkAndAutoUpdateApp()
  appInfo.value = await window.$ipc?.getAppInfo()

  console.log(updateInfo.value, appInfo.value)
}
</script>

<style lang="scss" scoped>
.updateBtn {
  cursor: pointer;
  &:hover {
    background: #ddd;
  }
  &:active {
    background-color: #ccc;
  }
}
</style>
