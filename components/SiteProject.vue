<template>
    <div class="py-12">
        <h2 class="text-4xl font-bold font-ubuntu text-center mb-12"><span>&#128640;</span>Projects
        </h2>
        <div class="flex flex-wrap justify-center gap-6">
            <div class="w-[80%] md:w-1/3 bg-gradient-to-tr from-purple-400 to-indigo-800 rounded-lg min-h-[250px]">
                <a href="https://interns-ozorajkt.github.io/" class="text-4xl text-white font-ubuntu font-bold flex justify-center items-center h-full">
                    Intern Center
                </a>
            </div>
            <div class="relative w-[80%] md:w-1/3 bg-gradient-to-tr from-green-400 to-blue-900 rounded-lg min-h-[250px]">
                <a href="https://log.ozorajkt.dev" class="text-4xl text-white font-ubuntu font-bold flex justify-center items-center h-full">
                    Daily Log
                </a>
                <div class="absolute top-2 right-2">
                    <div class="badge badge-outline text-white mr-2">Nuxt</div>
                    <div class="badge badge-outline text-white">Supabase</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.animate-rotate {
    display: inline-block;
    animation-name: rotating;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
}

@keyframes rotating {
    0% {
        transform: scale(0.5);
    }

    33.3% {
        transform: scale(0.8);
    }

    100% {
        transform: scale(0.5);
    }
}

</style>