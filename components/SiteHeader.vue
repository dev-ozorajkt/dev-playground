<template>
    <div class="border-b border-slate-300 dark:border-slate-700">
        <div class="flex items-center max-w-7xl mx-auto justify-between py-2">
            <div class="logo">
                <NuxtLink to="/" class="logo-link rounded pr-2 font-ubuntu font-bold text-2xl text-base-content flex items-center relative">
                    <span class="w-6 block mr-2 z-10"><img src="/img/dev.svg" class="w-full block z-10"/></span>
                    <div class="flex items-center">ozorajkt<span class="w-[6px] h-[6px] bg-info rounded-full flex mt-2 mx-1"></span>dev</div>
                </NuxtLink>
            </div>
            <div class="flex">
                <button type="button" @click="toggleDark" class="rounded-full w-10 h-10 hover:bg-base-200 flex items-center justify-center">
                    <i :class="{ 'ri-moon-line': isColorModeDark, 'ri-sun-line': !isColorModeDark }" class="ri-xl"></i> 
                </button>
                <a href="https://github.com/dev-ozorajkt?tab=repositories" class="rounded-full w-10 h-10 hover:bg-base-200 flex items-center justify-center"><i class="ri-github-fill ri-xl"></i></a>
            </div>
        </div>
    </div>    
</template>

<script setup lang="ts">
import 'remixicon/fonts/remixicon.css'
const colorMode = useColorMode()
const toggleDark = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
const isColorModeDark = computed(() => colorMode.preference === 'dark' ? true : false)

</script>