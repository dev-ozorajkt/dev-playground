<template>
    <div class="w-full px-4 lg:px-0">
        <div>
            <div class="hero-section py-16 relative">
                <div class="hero-section-content max-w-6xl mx-auto text-center relative z-10 bg-base-100/80 backdrop-blur-xl rounded-xl p-4 shadow">                
                    <h1 class="text-6xl text-base-content font-montserrat font-bold w-full mb-4">Ozora JKT's Code Playground</h1>
                    <p class="text-lg">Space for experimental repositories and internship's projects</p>

                    <div class="mockup flex justify-between py-4 gap-5">                        
                        <div class="mockup-window border bg-base-300 mt-8 w-1/2">
                            <div class="flex justify-center px-4 py-16 bg-base-200 text-base-content">Hello!</div>
                        </div>
                        
                        <div class="mockup-window border bg-base-300 mt-8 w-1/2">
                            <div class="flex justify-center px-4 py-16 bg-base-200 text-base-content">Hello!</div>
                        </div>
                    </div>
                </div>
                <div class="absolute w-full bottom-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,32L48,37.3C96,43,192,53,288,48C384,43,480,21,576,48C672,75,768,149,864,176C960,203,1056,181,1152,160C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </div>            
            </div>
        </div>
        
    </div>
</template>
<style scoped>
    .hero-section {        
        background: url(/img/circuit.png) repeat;
    }
</style>