<template>
    <div class="w-full">
        <Head>
            <Title>OzoraJKT</Title>
        </Head>
        <div>
            <div class="hero-section pt-28 pb-16 relative px-4 lg:px-0">
                <div class="hero-section-content max-w-7xl mx-auto relative z-10 bg-base-100/80 backdrop-blur-xl rounded-xl p-4 shadow flex items-center gap-12">
                    <div class="hero-img hidden md:block lg:w-[40%]">
                        <img src="/img/isometric.png" class="block w-full" />
                    </div>                    
                    <div class="w-full md:w-[60%]  text-left">
                        <h1 class="text-2xl md:text-6xl text-info font-ubuntu font-bold w-full mb-4">Ozora JKT's Code and Design Playground</h1>
                        <p class="text-lg md:text-xl font-tw">Space for experimental repositories and projects where designers, developers, and interns at Ozora JKT can showcase their ideas and creativity</p>
                        <a href="https://github.com/dev-ozorajkt?tab=repositories" class="link-button bg-primary text-primary-content rounded py-2 flex w-44 justify-center items-center mt-6 font-ubuntu relative">
                            <i class="ri-folder-2-line mr-1 z-10"></i>
                            <span class="z-10">Directory</span>                            
                            <i class="ri-arrow-right-s-line ml-1 mt-1 z-10"></i>
                        </a>
                    </div>            
                    

                    <!-- <div class="mockup flex justify-between py-4 gap-5">                        
                        <div class="mockup-window border bg-base-300 mt-8 w-1/2">
                            <div class="flex justify-center px-4 py-16 bg-base-200 text-base-content">Hello!</div>
                        </div>
                        
                        <div class="mockup-window border bg-base-300 mt-8 w-1/2">
                            <div class="flex justify-center px-4 py-16 bg-base-200 text-base-content">Hello!</div>
                        </div>
                    </div> -->
                </div>
                <div class="absolute w-full left-0 bottom-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,32L48,37.3C96,43,192,53,288,48C384,43,480,21,576,48C672,75,768,149,864,176C960,203,1056,181,1152,160C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </div>            
            </div>
        </div>
        <!-- Featured -->
        <div class="max-w-7xl mx-auto">
            <SiteFeatured />
        </div>

    </div>
</template>
<style scoped>
    .hero-section {        
        background: url(/img/circuit.png) repeat;
    }
    .link-button::before {
        content: '';
        @apply block absolute bg-primary w-full h-full rounded z-10
    }
    .link-button::after {
        content: '';
        @apply block absolute bg-gray-900 w-full h-full rounded left-1 top-1;
        transition: all .2s ease-in-out;
    }
    .link-button:hover::after {
        @apply left-0 top-0
    }
</style>