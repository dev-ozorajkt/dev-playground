<template>
    <button type="button" @click="toggleDark"
        class="rounded-full w-10 h-10 hover:bg-base-200 flex items-center justify-center">
        <i :class="{ 'ri-moon-line': !isDark, 'ri-sun-line': isDark }" class="ri-xl"></i>
    </button>
</template>
<script setup lang="ts">
import 'remixicon/fonts/remixicon.css'
const colorMode = useColorMode()
const toggleDark = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const isDark = computed(() => colorMode.value === 'light' ? false : true)

</script>