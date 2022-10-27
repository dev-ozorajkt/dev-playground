<template>
    <div class="border-b bg-base-300/80 backdrop-blur-xl border-slate-300 dark:border-slate-700">
        <div class="flex items-center max-w-7xl mx-auto justify-between py-2 px-4 lg:px-0">
            <div class="logo">
                <NuxtLink to="/" class="logo-link group rounded pr-2 font-ubuntu font-bold text-xl lg:text-2xl text-base-content flex items-center relative">
                    <span class="w-6 block mr-2 z-10"><img src="/img/dev.svg" class="w-full block z-10"/></span>
                    <div class="logo-text flex items-center z-10 group-hover:text-white">ozorajkt<span class="w-[6px] h-[6px] bg-info group-hover:bg-white rounded-full flex mt-2 mx-1"></span>dev</div>
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

<style scoped>
.logo-link::after {
    content: '';
    transition: all .3s ease-in-out;
    @apply absolute block bg-info w-0 h-full left-0 top-0;
}
.logo-link:hover::after {
    @apply w-full;
}
</style>