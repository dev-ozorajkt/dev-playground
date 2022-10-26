<template>
    <Html :data-theme="theme">
        <div class="min-h-screen bg-base-300">
            <div class="w-full">
                <SiteHeader class="sticky top-0 z-50"/>
                <slot />
            </div>
        </div>
    </Html>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const theme = computed(() => colorMode.value === 'light' ? 'light' : 'dark')
</script>