<template>
    <div class="main">
        <Html :data-theme="theme">
        <div class="min-h-screen bg-base-300">
            <div class="w-full">
                <SiteHeader class="fixed w-full top-0 z-50" />
                <slot />
            </div>
        </div>
        </Html>
    </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
onMounted(() => {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
         colorMode.preference = 'dark'
      } else {
         colorMode.preference = 'light'
      }
    })
const theme = computed(() => colorMode.value === 'light' ? 'light' : 'dark')
</script>