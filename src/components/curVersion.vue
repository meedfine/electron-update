<template>
  <div>
    <div>系统环境</div>
    <div class="pl4">
      <div>App版本：{{ appInfo?.appVersion }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
let appInfo = ref<IAppInfo>()

window.$ipc?.getAppInfo().then((res) => {
  appInfo.value = res
})
</script>
