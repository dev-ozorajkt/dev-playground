<template>
    <div :class="{ 'navbar-scrolled': scrolled}">
        <div class="flex items-center max-w-7xl mx-auto justify-between py-2 px-4 lg:px-0">
            <div class="logo">
                <NuxtLink to="/"
                    class="logo-link group rounded pr-2 font-ubuntu font-bold text-xl lg:text-2xl text-base-content flex items-center relative">
                    <span class="w-6 block mr-2 z-10"><img src="/img/dev.svg" class="w-full block z-10" /></span>
                    <div class="logo-text flex items-center z-10 group-hover:text-white">ozorajkt<span
                            class="w-[6px] h-[6px] bg-info group-hover:bg-white rounded-full flex mt-2 mx-1"></span>dev
                    </div>
                </NuxtLink>
            </div>
            <div class="flex">
                <ThemeToggler />
                <a href="https://github.com/dev-ozorajkt?tab=repositories"
                    class="rounded-full w-10 h-10 hover:bg-base-200 flex items-center justify-center"><i
                        class="ri-github-fill ri-xl"></i></a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import 'remixicon/fonts/remixicon.css'

const scrolled = ref(false)

const doScroll = (event) => {
    const scrollTop = window.scrollY

    if (scrollTop > 50) {
        console.log('Yay!')
        scrolled.value = true
    } else {
        scrolled.value = false
    }
}

onMounted(() => {
    window.addEventListener('scroll', doScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', doScroll)
}) 
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
.navbar-scrolled {
    @apply border-b bg-base-300/80 backdrop-blur-xl border-slate-300 dark:border-slate-700;
}
</style>